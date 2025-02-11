import { ButtonProps } from "../../interfaces";

const Button:React.FC<ButtonProps>=({buttonLabel,backgroundColor,buttonSize})=>{
    const backgroundColorClass=backgroundColor ? {
        "purple":"bg-[#FC7A8D]",
        "blue":"bg-[#5BCBFF]",
    }[backgroundColor] : "bg-[#5BCBFF]";
    return(
<button className={`${backgroundColorClass} ${buttonSize} px-4 py-2 cursor-pointer md:mx-15 mx-auto md:mt-2 mt-0 flex flex-col h-full font-bold rounded-md text-white hover:${backgroundColor} transition delay-150 duration-300 ease-in-out text-white`}>{buttonLabel}</button>
    )
}
export default Button;