import { RailSegment } from "@/components/atoms/RailSegment"
import {
  AILeadershipSection,
  ContextsSection,
  EducationSection,
  Footer,
  GitHubProofSection,
  Header,
  Hero,
  ImpactSection,
  LeadershipPeopleSection,
  TrajectorySection,
  WhereIAddValueSection,
} from "@/components/organisms"
import type { Locale } from "@/lib/i18n/locales"
import type { Dictionary } from "@/lib/i18n/types"
import styles from "./HomeTemplate.module.css"

interface HomeTemplateProps {
  dictionary: Dictionary
  locale: Locale
}

/** Assembles the home page in the order defined by docs/03-wireframe-estrutura.md. */
export function HomeTemplate({ dictionary, locale }: HomeTemplateProps) {
  return (
    <>
      <Header dictionary={dictionary.nav} homeLabel={dictionary.hero.name} locale={locale} />
      <main id="main-content">
        <div className={styles.railWrapper}>
          <RailSegment />
          <Hero dictionary={dictionary.hero} />
          <WhereIAddValueSection dictionary={dictionary.whereIAddValue} />
          <ImpactSection dictionary={dictionary.impact} />
        </div>
        <AILeadershipSection dictionary={dictionary.aiLeadership} />
        <LeadershipPeopleSection dictionary={dictionary.leadershipPeople} />
        <TrajectorySection dictionary={dictionary.trajectory} />
        <ContextsSection dictionary={dictionary.contexts} />
        <EducationSection dictionary={dictionary.education} />
        <GitHubProofSection dictionary={dictionary.githubProof} />
      </main>
      <Footer dictionary={dictionary.footer} headingLabel={dictionary.nav.sections.contact} />
    </>
  )
}
