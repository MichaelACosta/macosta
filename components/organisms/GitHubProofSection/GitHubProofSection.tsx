"use client"

import { useEffect, useState } from "react"
import { Text } from "@/components/atoms/Text"
import { LanguageDonut, type LanguageSlice } from "@/components/molecules/LanguageDonut"
import { SkeletonBlock } from "@/components/molecules/SkeletonBlock"
import { GITHUB_USERNAME } from "@/lib/content/links"
import { SECTION_IDS } from "@/lib/content/sectionIds"
import { fetchGitHubRepos, fetchGitHubUser } from "@/lib/github/client"
import { formatLanguages } from "@/lib/github/formatLanguages"
import type { Dictionary } from "@/lib/i18n/types"
import styles from "./GitHubProofSection.module.css"

interface GitHubProofSectionProps {
  dictionary: Dictionary["githubProof"]
}

type SectionState =
  | { status: "loading" }
  | { status: "error" }
  | {
      status: "ready"
      followers: number
      following: number
      publicRepos: number
      languages: LanguageSlice[]
    }

export function GitHubProofSection({ dictionary }: GitHubProofSectionProps) {
  const [state, setState] = useState<SectionState>({ status: "loading" })

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const [user, repos] = await Promise.all([
          fetchGitHubUser(GITHUB_USERNAME),
          fetchGitHubRepos(GITHUB_USERNAME),
        ])
        if (cancelled) return
        setState({
          status: "ready",
          followers: user.followers,
          following: user.following,
          publicRepos: user.public_repos,
          languages: formatLanguages(repos, dictionary.otherLanguagesLabel),
        })
      } catch {
        if (!cancelled) setState({ status: "error" })
      }
    }

    load()

    return () => {
      cancelled = true
    }
  }, [dictionary.otherLanguagesLabel])

  // Never breaks the page — an unavailable GitHub API just hides the section (US-19 CA3)
  if (state.status === "error") {
    return null
  }

  return (
    <section
      id={SECTION_IDS.github}
      className={styles.section}
      aria-labelledby="github-proof-heading"
    >
      <div className="container">
        <Text as="h2" variant="display" id="github-proof-heading">
          {dictionary.title}
        </Text>
        <Text muted>{dictionary.intro}</Text>

        {state.status === "loading" ? (
          <div className={styles.stats}>
            <SkeletonBlock label={dictionary.title} width="220px" height="72px" />
            <SkeletonBlock label={dictionary.title} width="260px" height="120px" />
          </div>
        ) : (
          <div className={styles.stats}>
            <dl className={styles.numbers}>
              <div className={styles.numberItem}>
                <dt className={styles.numberLabel}>{dictionary.followers}</dt>
                <dd className={styles.numberValue}>{state.followers}</dd>
              </div>
              <div className={styles.numberItem}>
                <dt className={styles.numberLabel}>{dictionary.following}</dt>
                <dd className={styles.numberValue}>{state.following}</dd>
              </div>
              <div className={styles.numberItem}>
                <dt className={styles.numberLabel}>{dictionary.repositories}</dt>
                <dd className={styles.numberValue}>{state.publicRepos}</dd>
              </div>
            </dl>

            {state.languages.length > 1 && (
              <LanguageDonut languages={state.languages} label={dictionary.languagesLabel} />
            )}
          </div>
        )}

        <Text variant="mono" muted className={styles.note}>
          {dictionary.note}
        </Text>
      </div>
    </section>
  )
}
