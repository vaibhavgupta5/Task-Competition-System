"use client";
import React, { useState } from "react";
import { dailyQues } from "@/Constants/dailyFormQues";
import FormField from "@/Components/optionformField";
import axios from "axios";
function Daily() {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Selected Options:", formData);

     try {
     setSubmitting(true)
     const result = await axios.post("/api/dailyForm", formData);
     setSubmitting(false)
     setSubmitted(true)
   } catch (error) {
    setSubmitting(false)
    setSubmitted(false)
   }
  };

  
  if (submitted) {
    return  (<div className="bg-[#FFE0E0] h-[100vh] flex w-full flex-col items-center justify-center p-4 text-[#202124]">
      <div className="w-[55%]"></div>
        <div className="h-[25vh] rounded-lg flex justify-center items-center w-[55%] text-black bg-white">Form Submitted Successfully</div></div>)
    }

  return (
    <div className="bg-[#FFE0E0] h-full flex w-full flex-col items-center p-4 text-[#202124]">
      <div className="w-[45%]">
        <div className="h-[25vh] rounded-lg bg-black"></div>

        <div className="bg-white rounded-lg mt-4 p-4 border-0 border-t-8 border-red-600">
          <div className="w-full text-left">
            <h1 className="text-[32px] font-medium">Moguls Daily Check</h1>
            <hr className="mt-2 mb-2" />
            <p className="text-red-600 font-light text-[14px]">
              * Indicates required question
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {dailyQues.map((item:any, index:any) => (
            <div key={index} onChange={handleChange}>
              <FormField question={item.question} options={item.options} />
            </div>
          ))}

          <div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-md mt-4">
              {!submitting ? "Submit" : "Loading" }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Daily;
