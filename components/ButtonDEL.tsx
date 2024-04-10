export default function ButtonDEL({value , display,  setDisplay} : {value: string, display : string, setDisplay : Function}){
    return (
        <button onClick={()=>{
            if (display === "" || display === "NaN" || display === "Infinity" || display === "-Infinity"){ 
                setDisplay("")
            } 
            else{
                setDisplay(display.slice(0,display.length-1))}
            }
        } className=" bg-buttonDel p-3 text-white text-md md:text-3xl rounded-lg font-bold 
        shadow-[inset_0_-4px_0px] shadow-buttonDelShadow hover:bg-buttonDelHover">
            {value}
        </button>
    )
}
    