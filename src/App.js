import Wrapper from "./Components/Wrapper";
import Screen from "./Components/Screen";
import ButtonBox from "./Components/ButtonBox";
import React, {useState} from "react";


const btnValues = [
    ["C", "+-", "%", "/"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    [",", ".", "="],
];

const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");



    const App = () => {
            let [calc, setCalc] = useState({
            sign: "",
            num: "",
            res: "",
            });

        const numClickHandler = (e) => {
            e.preventDefault();
            const value = e.target.innerHTML;

            if (calc.num.length < 16) {
                setCalc({
                    ...calc,
                    num:
                    calc.num === "" && value === "0" ? "0" : calc.num % 1 ? Number(calc.num + value)
                    : calc.num + value,
                    res: !calc.sign ? "" : calc.res,
                });
            }
        };

        const commaClickHandler = (e) => {
            e.preventDefault();
            const value = e.target.innerHTML;

            setCalc({
                ...calc,
                sign: value,
                res: !calc.res && calc.num ? calc.num : calc.res,
                num: "",
            });
        };

        const equalsClickHandler = () => {
            if (calc.sign && calc.num) {
                const math = (a, b, sign) =>
                    sign === "+" ? a + b : sign === "-" ? a - b : sign === "X" ? a * b : a / b;

                setCalc({
                    ...calc,
                    res: calc.num === "0" && calc.sign === "/" ? "Can't divide with 0" : toLocaleString(
                        math(
                                Number(removeSpaces(calc.res)),
                                Number(removeSpaces(calc.num)),
                                calc.sign
                        )
                    ),
                    sign: "",
                    num: "",
                });
            }
        };

        const invertClickHandler = () => {
            setCalc({
                ...calc,
                num: parseFloat(calc.num),
                res: parseFloat(calc.res),
                sign: "",
            });
        };



        const resetClickHandler = () => {
            setCalc({
                ...calc,
                sign: "",
                num: "",
                res: "",
            });
        };

        const percentClickHandler = () => {
            setCalc({
                ...calc,
                num: parseFloat(removeSpaces(calc.num)),
                res: parseFloat(removeSpaces(calc.res)),
                sign: "",
             });
        };

        const signClickHandler = (e) => {
            e.preventDefault();
            const value = e.target.innerHTML;

            setCalc({
                ...calc,
                sign: value,
                res: !calc.res && calc.num ? calc.num : calc.res,
                num: "",
            });
        };


        return (
            <div><Wrapper>
                <div><Screen value={calc.num ? calc.num : calc.res} /></div>
                <div><ButtonBox> {btnValues.flat().map((btn, i) => {
                        return (
                            <div><button key={i} className={btn === "=" ? "equals" : ""} value={btn}
                            onClick={
                                        btn === "C"
                                            ? resetClickHandler
                                            : btn === "+-"
                                            ? invertClickHandler
                                            : btn === "%"
                                                ? percentClickHandler
                                                : btn === "="
                                                    ? equalsClickHandler
                                                    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                                                        ? signClickHandler
                                                        : btn === "."
                                                            ? commaClickHandler
                                                            : numClickHandler
                            }
                            /></div>
                            );
                        })
                    }
                </ButtonBox></div>
            </Wrapper></div>
        )
    }


export default App;