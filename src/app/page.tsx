'use client'
import { RadialCharts } from "@/Components/charts/radial";
import Header from "@/Components/header";
import Scoreboard from "@/Components/scoreboard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [dailyData, setdailyData] = useState<String>()

  const [weeklyData, setweeklyData] = useState<String>()

  const chartName = "Home"
  const getAllUsers = async () => {
      try {
        const result = await axios.get("/api/getUsers");
        // console.log(result.data.users);
  
  
  
        result.data.users.map((user: any) => {
          let score = 0;
          let weeklyScore = 0;
          let monthlyScore = 0;

          if(user.name === "Harshit Chaturvedi"){
              console.log("yes", user.name)
              user.daily.map((daily: any) => {
                  score += Number(daily.total);
                });

                user.weekly.map((weekly: any) => {
                  weeklyScore += Number(weekly.total);
                });
    
                setdailyData(score.toString())
                setweeklyData(weeklyScore.toString())
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

  return (
    <div className="bg-gradient-to-r from-[#F5F5F8] to-[#D4D4DA] h-screen w-full flex flex-col items-center">
    <Header/>
      <div className="flex flex-row w-[90%] justify-center items-center ">
        <div className="flex flex-col w-[30%] justify-center items-center text-black">
        <div className="bg-white h-[15vh] rounded-md flex   w-full m-2 p-4">
          <div className="flex flex-col items-start justify-center ">
            <h1 className="text-xl  ">Welcome,</h1>
            <h1 className="text-3xl font-bold  ">Harshit Chaturvedi</h1>
            </div>
        </div>
        <div className="bg-white p-4 rounded-md h-[70vh] w-full m-2">
          <h1 className="font-medium text-xl pb-4">Scoreboard</h1>
          <Scoreboard/>
        </div>

       
        </div>

        <div className="bg-white p-4 rounded-md h-[87vh]  w-[40%] m-2">
          <h1 className="font-medium text-xl pb-4">Your Scores</h1>
         <div className="flex">
         <RadialCharts  chartName={chartName} dailyData={dailyData?.toString()}/>
         <RadialCharts chartName={chartName} dailyData={weeklyData?.toString()}/>
         </div>
        </div>

        <div className="bg-white p-4 rounded-md h-[87vh]  w-[50%] ">
          <h1 className="font-medium text-xl pb-4">Scoreboard</h1>
          <Scoreboard/>
        </div>


      </div>
    </div>
  )
}
