'use client'
import axios from 'axios'
import React, { useEffect } from 'react'

 function Scoreboard() {

    const getAllUsers = async () =>{
        try {
            const result = await axios.get("/api/getUsers")
            console.log(result.data.users)
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