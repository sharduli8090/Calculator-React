import { useState } from "react";

const Buttons = ()=>{
const [answer , setAnswer] = useState("");
    const classes = "w-16 h-16 flex justify-center items-center hover:bg-gray-200 hover:cursor-pointer rounded-full text-xl";
    return(
        <div className="flex justify-center items-center flex-wrap bg-gray-100 w-full h-3/5 rounded-lg">
          <div className={`${classes} text-red-500`}  >
            C
          </div>
          <div className={`${classes}text-[#5ec7bc]`}  >
            ()
          </div>
          <div className={`${classes} text-[#5ec7bc]`} >
            %
          </div>
          <div className={`${classes} text-[#5ec7bc]`}   >
            /
          </div>
          <div className={`${classes}`} >
            1
          </div>
          <div className={`${classes}`} >
            2
          </div>
          <div className={`${classes}`} >
            3
          </div>
          <div className={`${classes} text-[#5ec7bc]`}  >
            *
          </div>
          <div className={`${classes}`} >
            4
          </div>
          <div className={`${classes}`} >
            5
          </div>
          <div className={`${classes}`} >
            6
          </div>
          <div className={`${classes} text-[#5ec7bc]`}  >
            +
          </div>
          <div className={`${classes}`} >
            7
          </div>
          <div className={`${classes}`} >
            8
          </div>
          <div className={`${classes}`} >
            9
          </div>
          <div className={`${classes} text-[#5ec7bc]`}  >
            -
          </div>
          <div className={`${classes} text-[#5ec7bc]`} >
            .
          </div>
          <div className={`${classes}`} >
            0
          </div>
          <div className={`${classes} text-[#5ec7bc]`}  >
            +/-
          </div>
          <div className={`${classes} bg-gradient-to-l from-cyan-500 to-blue-500 hover:cursor-pointer`} >
            =
          </div>
        </div>
    );
}

export default Buttons;