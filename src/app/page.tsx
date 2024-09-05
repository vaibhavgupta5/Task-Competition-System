'use client'
import Header from "@/Components/header";
import Scoreboard from "@/Components/scoreboard";

export default function Home() {
  return (
    <div className="bg-black h-screen w-full flex flex-col items-center">
    <Header/>
      <div className="flex flex-row w-[90%] justify-center items-center ">
        <div className="flex flex-col w-[40%] justify-center items-center text-black">
        <div className="bg-white h-[15vh] rounded-md flex   w-full m-2 p-4">
          <div className="flex flex-col items-start justify-center ">
            <h1 className="text-xl  ">Welcome,</h1>
            <h1 className="text-3xl font-bold  ">Harshit Chaturvedi</h1>
            </div>
        </div>
        <div className="bg-white rounded-md h-[70vh] w-full m-2">
          <Scoreboard/>
        </div>
        </div>
      </div>
    </div>
  )
}
