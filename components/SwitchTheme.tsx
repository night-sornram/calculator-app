"use client";

import { useState } from "react";

export default function SwitchTheme() {

    const [theme, setTheme] = useState(1)
    return (
        <div className=" flex flex-row space-x-3 ">
            <div className=" flex justify-end items-end">
                <h1 className=" font-bold text-text text-sm">
                    THEME
                </h1>
            </div>
            <div className=" flex flex-col w-20">
                <div className=" flex flex-row w-full justify-around text-text text-xs font-bold">
                    <h1>
                        1
                    </h1>
                    <h1>
                        2
                    </h1>
                    <h1>
                        3
                    </h1>
                </div>
                <div className=" flex flex-row bg-card justify-around p-1 w-full rounded-full">
                    <button onClick={ ()=>{
                            document.documentElement.setAttribute("data-theme","theme1");
                            setTheme(1)
                        }}>
                        <div className={` w-4 h-4 rounded-full ${theme === 1 ? "bg-buttonEq" : "bg-transparent"} `}></div>
                    </button>
                    <button onClick={ ()=>{
                            document.documentElement.setAttribute("data-theme","theme2");
                            setTheme(2)
                        }}>
                        <div className={` w-4 h-4 rounded-full ${theme === 2 ? "bg-buttonEq" : "bg-transparent"} `}></div>
                    </button>
                    <button onClick={ ()=>{
                            document.documentElement.setAttribute("data-theme","theme3");
                            setTheme(3)
                        }}>
                        <div className={` w-4 h-4 rounded-full ${theme === 3 ? "bg-buttonEq" : "bg-transparent"} `}></div>
                    </button>
                </div>
            </div>
        </div>
    );
}