'use client'
import Header from "@/Components/header";
import Scoreboard from "@/Components/scoreboard";

export default function Home() {
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
          <h1 className="font-medium text-xl pb-4">Scoreboard</h1>
          <Scoreboard/>
        </div>

        <div className="bg-white p-4 rounded-md h-[87vh]  w-[50%] ">
          <h1 className="font-medium text-xl pb-4">Scoreboard</h1>
          <Scoreboard/>
        </div>


      </div>
    </div>
  )
}
