"use client"



import { TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { ChartConfig, ChartContainer } from "@/Components/ui/chart"
import { useEffect, useState } from "react"
import axios from "axios"




const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function RadialCharts(score: string)
 {

    const [dailyData, setdailyData] = useState<String>()

    const getAllUsers = async () => {
        try {
          const result = await axios.get("/api/getUsers");
          // console.log(result.data.users);
    
    
    
          result.data.users.map((user: any) => {
            let score = 0;

            if(user.name === "Harshit Chaturvedi"){
                console.log("yes", user.name)
                user.daily.map((daily: any) => {
                    score += Number(daily.total);
                  });
      
                  setdailyData(score.toString())
                  console.log(dailyData);
            }
    


            // user.weekly.map((weekly: any) => {
            //   score += Number(weekly.total);
            // });
    
            // user.monthly.map((monthly: any) => {
            //   score += Number(monthly.total);
            // });
    
    
            // console.log(dataScore);
            // console.log(updatedScoreboard)
          });
          // console.log(updatedScoreboard)
          
    
          // console.log(scoreboard);
        } catch (error) {
          console.log("error", error);
        }
      };
    
      useEffect(() => {
        getAllUsers();
      }, []);

    const chartData = [
        { browser: "safari", visitors: dailyData, fill: "var(--color-safari)" },
        
      ]
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart - Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
          
        >

          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartData[0].visitors?.toString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
