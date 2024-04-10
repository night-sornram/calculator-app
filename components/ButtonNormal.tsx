export default function ButtonNormal({value, display , setDisplay} : {value: string, display : string , setDisplay : Function}){
    return (
        <button onClick={()=>{
            if(display === "" || display === "NaN" || display === "Infinity" || display === "-Infinity"){
                if ( value === "x" || value === "*" || value === "/" || value === "."){
                    setDisplay("")
                }
                else {
                    setDisplay("" + value)
                }
            }
            else if (display[display.length-1] === "+" || display[display.length-1] === "-" || display[display.length-1] === "x" || display[display.length-1] === "/" || display[display.length-1] === "."){
                if ( value === "x" || value === "*" || value === "/" || value === "." || value === "+" || value === "-"){
                    setDisplay(display)
                }
                else {
                    setDisplay(display + value)
                }
            }
            else {
                setDisplay(display + value)
            }

            }
        } className=" bg-buttonNormal p-3 text-textNormal text-md md:text-3xl rounded-lg font-bold
        shadow-[inset_0_-4px_0px] shadow-buttonNormalShadow hover:bg-buttonNormalHover">
            {value}
        </button>
    )
}
    