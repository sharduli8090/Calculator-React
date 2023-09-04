import Buttons from "./Buttons";
import { useSelector } from "react-redux";
import ToggleButton from "./ToggleButton";
import { useState } from "react";

const Screen = () => {
    const theme = useSelector((state) => state.theme.theme);
    const ans = useSelector((state) => state.ans.ans); 
    const exp = useSelector((state) => state.num.num); 

    return (
    <div className={`h-screen flex justify-center flex-col items-center ${theme?"bg-black":"bg-gray-500"} `}>
        <ToggleButton/>
      <div className={`w-1/5 h-4/5 rounded-lg ${theme?"bg-gray-900":"bg-gray-300"} flex justify-end flex-col items-end`}>
        <div className={`p-6 text-4xl ${!theme?"text-black":"text-gray-200"}`}>{exp}</div>
        <div className={`text-xl px-6 pb-6 ${theme?"text-slate-500":"text-gray-600"}`}>{ans}</div>
        <Buttons/>
      </div>
    </div>
    );
};

export default Screen;
