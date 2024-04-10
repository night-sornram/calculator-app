"use client";

import ButtonDEL from "@/components/ButtonDEL";
import ButtonEqual from "@/components/ButtonEqual";
import ButtonNormal from "@/components/ButtonNormal";
import ButtonReset from "@/components/ButtonReset";
import SwitchTheme from "@/components/SwitchTheme";
import { useState } from "react";


export default function Home() {
  const[display, setDisplay] = useState("")
  return (
    <main className="  bg-bg min-h-screen flex justify-center items-center p-7 md:p-0">
      <div className=" flex flex-col justify-center items-center w-[500px] space-y-10">
        <div className=" flex flex-row w-full justify-between items-end">
            <h1 className=" text-2xl font-bold text-text">
              calc
            </h1>
            <SwitchTheme />
        </div>
        <div className=" bg-display w-full p-7 h-20 rounded-md text-end">
          <h1 className=" text-4xl text-text font-bold">
            {display}
          </h1>
        </div>
        <div className=" bg-card p-5 rounded-md grid grid-cols-4 gap-4 w-full">
          <ButtonNormal value={"7"} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"8"} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"9"} display={display} setDisplay={setDisplay} />
          <ButtonDEL value={"DEL"} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"4"} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"5"} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"6"} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"+"} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"1"} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"2"} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"3"} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"-"} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"."} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"0"} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"/"} display={display} setDisplay={setDisplay} />
          <ButtonNormal value={"x"} display={display} setDisplay={setDisplay} />
          <ButtonReset value={"RESET"} display={display} setDisplay={setDisplay} />
          <ButtonEqual value={"="} display={display} setDisplay={setDisplay} />
        </div>
      </div>
    </main>
  );
}
