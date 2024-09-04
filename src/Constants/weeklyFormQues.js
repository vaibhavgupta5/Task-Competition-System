import { names } from "@/Constants/names.js";

export const weeklyQues = [
  { 
    question: "name",
    options: names,
    type: "option",
  },
  {
    question: "buddyPartnerCall",
    type: "option",
    options: ["Yes", "No"],
  },
  {
    question: "socialMediaPosts",
    type: "option",
    options: Array.from({ length: 16 }, (_, i) => i.toString()), // ["0", "1", ..., "15"]
  },
  {
    question: "outreachDone",
    type: "option",
    options: Array.from({ length: 16 }, (_, i) => i.toString()), // ["0", "1", ..., "15"]
  },
  {
    question: "proposalsShared",
    type: "option",
    options: Array.from({ length: 16 }, (_, i) => i.toString()), // ["0", "1", ..., "15"]
  },
  {
    question: "level00AdsRunning",
    type: "option",
    options: ["Yes", "No"],
  },
  {
    question: "level1AdsRunning",
    type: "option",
    options: ["Yes", "No"],
  },
  {
    question: "level2AdsRunning",
    type: "option",
    options: ["Yes", "No"],
  },
  {
    question: "contentMultiplierSystemExecuted",
    type: "option",
    options: ["Yes", "No"],
  },
];
