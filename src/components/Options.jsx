import { NavLink } from "react-router-dom";

function Options({selectedOption,selectedList,selectedHead}){

    return(
        <div className="flex flex-col items-center text-center justify-center h-screen w-[10vw] gap-12 duration-500">
            <div className="size-2xl font-extrabold text-purple-500 mb-[5vh] underline uppercase">{selectedHead}</div>

           {selectedOption.map((currElement,index)=>{
            return (
                    <NavLink key={index} className='cursor-pointer'>
                        <div className="font-bold underline size-3vh mb-[2vh]">{currElement}</div>
                        {selectedList[index]}
                    </NavLink>
            )            
           })}
        </div>
    )
}

export default Options;