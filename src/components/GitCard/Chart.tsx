import React from "react"
import styled from "styled-components"
import { PieChart, PieArcSeries } from "reaviz"
import { useThemeMode } from "../../theme/ThemeModeContext"
import { chartPalette } from "../../theme/tokens"
import type { LanguageDatum } from "./Utils"

const ChartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Legend = styled.p`
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  color: var(--text-muted);
  margin: 12px 0 0;
  text-align: center;
`

export const Chart: React.FC<{
  languages: LanguageDatum[]
  legendLabel: string
}> = ({ languages, legendLabel }) => {
  const { mode } = useThemeMode()

  if (languages.length < 2) return null

  const top = [...languages]
    .sort((a, b) => b.data - a.data)
    .slice(0, 4)
    .map((language) => language.key)

  return (
    <ChartWrap>
      <PieChart
        width={160}
        height={160}
        data={languages}
        series={
          <PieArcSeries
            cornerRadius={4}
            padAngle={0.02}
            padRadius={200}
            doughnut
            colorScheme={chartPalette[mode]}
          />
        }
      />
      <Legend>
        {legendLabel} — {top.join(" · ")}
      </Legend>
    </ChartWrap>
  )
}
