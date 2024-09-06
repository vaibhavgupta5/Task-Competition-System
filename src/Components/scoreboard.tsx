'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

 function Scoreboard() {


interface ScoreboardData {
    name: string;
    score: number;
}

  const [scoreboard, setscoreboard] = useState<ScoreboardData[]>([]);
  
    const getAllUsers = async () =>{
        try {
            const result = await axios.get("/api/getUsers")
            console.log(result.data.users)

            let updatedScoreboard: any[] = [];

            let score = 0;

            result.data.users.map((user: any) =>{

              user.daily.map((daily: any) =>{
                score += daily.total
              })

              user.weekly.map((weekly: any) =>{
                score += weekly.total
              })

              user.monthly.map((monthly: any) =>{
                score += monthly.total
              })

             const dataScore  = {
              name: user.name,
              score: score
             } as any

             updatedScoreboard.push(dataScore);


            })

            setscoreboard(updatedScoreboard); // Set state once the loop is done


        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(()=>{
        getAllUsers()
    },[])


  return (
    <div>Scoreboard</div>
  )
}

export default Scoreboard