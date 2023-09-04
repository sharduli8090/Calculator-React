import { useSelector, useDispatch } from "react-redux";
import { setAns } from "../redux/actions";
import { setstrans } from "../redux/actions";
import { setExp } from "../redux/actions";
import { setOp } from "../redux/actions";
import { useEffect, useState } from "react";

const Buttons = () => {
  const theme = useSelector((state) => state.theme.theme);
  let operator = useSelector((state) => state.op.op);
  let exp = useSelector((state) => state.num.num);
  let ans = useSelector((state) => state.ans.ans);
  const opArray = ["*", "-", "/", "+"];
  const [prevAns, setPrevAns] = useState(0);
  const [currNum, setCurrNum] = useState("");
  const classes =
    "w-16 h-16 flex justify-center items-center hover:bg-gray-200 hover:cursor-pointer rounded-full text-xl";
  const whiteTextClass = "text-white hover:text-black";
  const numArr1 = [1, 2, 3];
  const numArr2 = [4, 5, 6];
  const numArr3 = [7, 8, 9];

  const dispatch = useDispatch();

  const handleEquals = () => {  
    clearExp();
  };
  const clearExp = ()=>{
    setExp("0");
  }

  const handleNum = (num) => {
    setCurrNum((prev) => {
      return prev + num;
    });
    dispatch(setExp(exp === "0" ? num.toString() : exp + num));
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
    if (opArray.includes(exp.charAt(exp.length - 1)) && op !== operator) {
      let resultExp = sliceLastCharacterAndAppend(exp, op);
      dispatch(setExp(resultExp));
    } else if (!opArray.includes(exp.charAt(exp.length - 1))) {
      setPrevAns(ans);
      setCurrNum("");
      dispatch(setExp(exp + op));
    }
    dispatch(setOp(op));
  };

  const sliceLastCharacterAndAppend = (expression, op) => {
    let resultExpression = expression.slice(0, -1);
    resultExpression = resultExpression + op;
    return resultExpression;
  };

  const handleClear = () => {
    dispatch(setOp(""));
    dispatch(setAns(0));
    dispatch(setExp("0"));
    setCurrNum("");
    setPrevAns(0);
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
      <div className={`${classes}text-[#5ec7bc]`}>() </div>
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
      <div className={`${classes} text-[#5ec7bc]`}>+/-</div>
      <div
        className={`${classes} bg-gradient-to-l from-cyan-500 to-blue-500 hover:cursor-pointer`}
        onClick={()=>handleEquals()}
      >
        =
      </div>
    </div>
  );
};

export default Buttons;
