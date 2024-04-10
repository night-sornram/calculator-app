export default function ButtonReset({value ,display, setDisplay} : {value: string, display :string, setDisplay : Function}){
    return (
        <button onClick={()=>{
            try{
                setDisplay(eval(display.replace("x","*")).toString())
            }
            catch{
                setDisplay("NaN")
            }
        }
            } className=" bg-buttonEq col-span-2 p-3 text-textEq text-md md:text-3xl rounded-lg font-bold 
        shadow-[inset_0_-4px_0px] shadow-buttonEqShadow hover:bg-buttonEqHover">
            {value}
        </button>
    )
}
    