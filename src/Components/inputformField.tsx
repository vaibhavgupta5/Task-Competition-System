'use client'
import React from 'react';

// Define props types if using TypeScript
interface FormFieldProps {
  question: string;
}

const InputFormField: React.FC<FormFieldProps> = ({ question }) => {

  const formatedQuestion = question.split(/(?=[A-Z])/).join(' ').toUpperCase();
  return (
    <div  className="bg-white rounded-lg mt-4 p-4">
    <div className="w-full text-left">
      <h1 className="text-[18px] font-medium">{formatedQuestion}</h1>
      <input required name={question} type='text'
        className="p-3 pb-2 pt-2 mt-4 mb-4 w-[45%] border border-1 border-gray-300 rounded-md"
        
      >

      </input>
    </div></div>
  );
};

export default InputFormField;
