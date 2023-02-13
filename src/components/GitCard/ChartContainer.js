import React from "react"
import { PieChart, PieArcSeries } from "reaviz"
import { Column } from "../Grid"
import { Text } from "../Text"

const ChartContainer = ({ values, label }) => {
  if (values.length > 1)
    return (
      <Column width={["100%", "50%"]} alignItems="center">
        <PieChart
          width={350}
          height={250}
          data={values}
          series={
            <PieArcSeries
              cornerRadius={4}
              padAngle={0.02}
              padRadius={200}
              doughnut={true}
            />
          }
        />
        <Text textAlign="center" color="#f3f3f3" variant={["small", "regular"]}>
          {label}
        </Text>
      </Column>
    )
}

export default ChartContainer
