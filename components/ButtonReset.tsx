export default function ButtonReset({value , display,  setDisplay} : {value: string, display : string, setDisplay : Function}){
    return (
        <button onClick={()=>{setDisplay("")}} className=" bg-buttonDel p-3 col-span-2 text-white text-md md:text-3xl rounded-lg font-bold 
        shadow-[inset_0_-4px_0px] shadow-buttonDelShadow hover:bg-buttonDelHover">
            {value}
        </button>
    )
}
    