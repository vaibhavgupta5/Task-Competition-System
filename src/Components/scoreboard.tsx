"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Scoreboard() {
 

  const [scoreboard, setscoreboard] = useState<any[]>([]);

  const getAllUsers = async () => {
    try {
      const result = await axios.get("/api/getUsers");
      // console.log(result.data.users);

      let updatedScoreboard: any[] = [];


      result.data.users.map((user: any) => {
        let score = 0;

        user.daily.map((daily: any) => {
          score += Number(daily.total);
        });

        user.weekly.map((weekly: any) => {
          score += Number(weekly.total);
        });

        user.monthly.map((monthly: any) => {
          score += Number(monthly.total);
        });

        const dataScore = {
          name: user.name,
          image: user.image,
          score: score,
        } as any;

        // console.log(dataScore);

        updatedScoreboard.push(dataScore);
        // console.log(updatedScoreboard)
      });
      // console.log(updatedScoreboard)
      setscoreboard(updatedScoreboard); // Set state once the loop is done

      // console.log(scoreboard);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);



  return <div>
    <ul>
      {scoreboard.map((user: any, index: number) => (
        <li className="flex p-4 items-center justify-between bg-[#F5F5F8] mb-2 rounded-md" key={index}>
          <Image className="rounded-full" src="/image.png" alt={user.name} width={50} height={50} />
          <h2>{user.name}</h2>
          <p>{user.score}</p>
        </li>
      ))}
    </ul>
  </div>;
}

export default Scoreboard;
