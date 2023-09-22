import { useSelector, useDispatch } from "react-redux";
import { setAns } from "../redux/actions";
import { setExp } from "../redux/actions";
import { setOp } from "../redux/actions";
import { setTheme } from "../redux/actions";
import { useEffect, useState } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";


const Buttons = ({ setResultClass, resultClass }) => {
  const theme = useSelector((state) => state.theme.theme);
  let operator = useSelector((state) => state.op.op);
  let exp = useSelector((state) => state.num.num);
  let ans = useSelector((state) => state.ans.ans);
  const opArray = ["*", "-", "/", "+","%"];
  const [prevAns, setPrevAns] = useState(0);
  const [currNum, setCurrNum] = useState("");
  const classes =
    "w-16 h-16 flex justify-center items-center hover:bg-gray-200 hover:cursor-pointer rounded-full text-xl  transition-all duration-300 ease-in hover:delay-100";
  const whiteTextClass = "text-white hover:text-black";
  const numArr1 = [1, 2, 3];
  const numArr2 = [4, 5, 6];
  const numArr3 = [7, 8, 9];

  const dispatch = useDispatch();

  const handleEquals = () => {
    setResultClass(true);
  };

  const handleDeleteOne = ()=>{
   let updatedCurrNum =  sliceLastCharacterAndAppend(currNum,"");
   let updatedExp = sliceLastCharacterAndAppend(exp,"");
   if(updatedExp===""){
    dispatch(setExp("0"));
   }else{
   dispatch(setExp(updatedExp));} 
   if(updatedCurrNum?.length!==0){
   setCurrNum(updatedCurrNum);
   }else{
    setCurrNum(0);
  }
   }
   
  const handleNum = (num) => {
    if (resultClass) {
      dispatch(setExp(num.toString()));
      dispatch(setAns(0));
      setCurrNum(num.toString());
      setPrevAns(0);
      dispatch(setOp(""));
      setResultClass(false);
    } else {
      setCurrNum((prev) => {
        return prev + num;
      });
      dispatch(setExp(exp === "0" ? num.toString() : exp + num));
    }
  };

  useEffect(() => {
    if (exp !== "0" && currNum) {
      dispatch(setAns(handleCalculation(prevAns, parseInt(currNum))));
    }
  }, [currNum]);

  const handleCalculation = (num1, num2) => {
    switch (operator) {
      case "-":
        return num1 - num2;
      case "/":
        return num1 / num2;
      case "*":
        return num1 * num2;
      case "%":
        return num1 * (num2 / 100);
      default:
        return num1 + num2;
    }
  };

  const handleOperator = (op) => {
    if (!resultClass) {
      if (opArray.includes(exp.charAt(exp.length - 1)) && op !== operator) {
        let resultExp = sliceLastCharacterAndAppend(exp, op);
        dispatch(setExp(resultExp));
      } else if (!opArray.includes(exp.charAt(exp.length - 1))) {
        setPrevAns(ans);
        setCurrNum("");
        dispatch(setExp(exp + op));
      }
      dispatch(setOp(op));
    }
  };

  const sliceLastCharacterAndAppend = (expression, op) => {
    try {
      let resultExpression = expression.slice(0, -1);
      resultExpression = resultExpression + op;
      return resultExpression;
    } catch (error) {
      
    }
  };

  const handleClear = () => {
    dispatch(setOp(""));
    dispatch(setAns(0));
    dispatch(setExp("0"));
    setCurrNum("");
    setPrevAns(0); 
    setResultClass(false);
  };

  const handleNegativeValues = () => {
    if (exp !== "0" ) {
      let currNumToChange = currNum;
      if (currNumToChange.charAt(0) !== "-") {
        currNumToChange = "-" + currNumToChange; 
      }else{
        currNumToChange = currNumToChange.replace("-","");
      }
      dispatch(setExp(exp.replace(currNum,currNumToChange)));
      setCurrNum(currNumToChange);
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key;
    if (!isNaN(key) && key !== " ") {
      handleNum(parseInt(key));
    } else {
      switch (key) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
          handleOperator(key);
          break;
        case "Enter":
          handleEquals();
          break;
        case "Escape":
          handleClear();
          break;
          case " ":
            dispatch(setTheme(!theme));
            break;
            case "Backspace":
             handleDeleteOne();
              break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currNum, exp, operator, ans, handleNum, handleOperator, handleClear]);

  return (
    <div
      className={`flex justify-center items-center flex-wrap ${
        theme ? "bg-gray-800" : "bg-gray-100"
      }  w-full h-3/5 rounded-lg`}
    >
      <div className={`${classes} text-red-500`} onClick={() => handleClear()}>
        C
      </div>
      <div className={`${classes}`}  onClick={()=>{handleDeleteOne()}}><RiDeleteBack2Line color="#5ec7bc"/> </div>
      <div
        className={`${classes} text-[#5ec7bc]`}
        onClick={() => handleOperator("%")}
      >
        %
      </div>
      <div
        className={`${classes} text-[#5ec7bc]`}
        onClick={() => handleOperator("/")}
      >
        /
      </div>
      {numArr1.map((numArr) => {
        return (
          <div
            className={`${classes} ${theme ? whiteTextClass : ""}`}
            onClick={() => handleNum(numArr)}
          >
            {numArr}
          </div>
        );
      })}
      <div
        className={`${classes} text-[#5ec7bc]`}
        onClick={() => handleOperator("*")}
      >
        *
      </div>
      {numArr2.map((numArr) => {
        return (
          <div
            className={`${classes} ${theme ? whiteTextClass : ""}`}
            onClick={() => handleNum(numArr)}
          >
            {numArr}
          </div>
        );
      })}
      <div
        className={`${classes} text-[#5ec7bc]`}
        onClick={() => handleOperator("+")}
      >
        +
      </div>
      {numArr3.map((numArr) => {
        return (
          <div
            className={`${classes} ${theme ? whiteTextClass : ""}`}
            onClick={() => handleNum(numArr)}
          >
            {numArr}
          </div>
        );
      })}
      <div
        className={`${classes} text-[#5ec7bc]`}
        onClick={() => handleOperator("-")}
      >
        -
      </div>
      <div className={`${classes} text-[#5ec7bc]`}>.</div>
      <div
        className={`${classes} ${theme ? whiteTextClass : ""}`}
        onClick={() => handleNum(0)}
      >
        0
      </div>
      <div
        className={`${classes} text-[#5ec7bc]`}
        onClick={() => handleNegativeValues()}
      >
        +/-
      </div>
      <div
        className={`${classes} bg-gradient-to-l from-cyan-500 to-blue-500 hover:cursor-pointer`}
        onClick={() => handleEquals()}
      >
        =
      </div>
    </div>
  );
};

export default Buttons;
