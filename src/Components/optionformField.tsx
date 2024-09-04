import React, { useState } from 'react';

// Define props types if using TypeScript
interface FormFieldProps {
  question: string;
  options: string[];
}

const FormField: React.FC<FormFieldProps> = ({ question, options }) => {

  const [isdisabled, setDisabled] = useState(false);
  
  const formatedQuestion = question.split(/(?=[A-Z])/).join(' ').toUpperCase();
  return (
    <div  className="bg-white rounded-lg mt-4 p-4">
    <div className="w-full text-left">
      <h1 className="text-[18px] font-medium">{formatedQuestion}</h1>
      <select
        name={question}
        onChange={() => setDisabled(true)}
        className="p-3 mt-4 mb-4 w-[35%] border border-1 border-gray-300 rounded-md"
        required
      >
        <option value="" disabled={isdisabled ? true : false} >
          Select an option
        </option>
        {options.map((opt, idx) => (
          <option value={opt} key={idx}>
            {opt}
          </option>
        ))}
      </select>
    </div></div>
  );
};

export default FormField;
