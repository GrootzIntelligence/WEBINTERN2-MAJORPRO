import { IoCallSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import Options from "./Options";
import { useState } from "react";
import Logo from "../assets/logo";

function Sidenav(){
    const contact=["Email", "Instagram","Customer Care"];
    const contact_select=["abc@gmail.com","abc_xyz","1800-1234-1234"]
    const address=["Branches","Timings", "Visit Branch"];
    const address_select=["Pune | Hyderabad | Gurgaon | Bangalore","09:30 - 20:30","Open Maps"]
    const services=["Development", "Courses", "Solutions"];
    const servives_select=["Website | Mobile App | Windows App","Web Development | Flutter | DSA","Consult | Technology "]
    const settings=["Language", "Write to Us","Suggestions"];
    const settings_select=["English","Write Now","Open Suggestions"]
    const none=[];
    const contact_head="Contact";
    const address_head="Company";
    const services_head="Services";
    const settings_head="Settings";

    const [option,setOption]=useState(none);
    const [list,setList]=useState(none);
    const [head,setHead]=useState(none);


    

    return(
        <div onMouseEnter={()=>{setOption(contact);setList(contact_select);setHead(contact_head);}} className="flex h-screen w-[7vw] fixed bg-white hover:w-[22vw] duration-700 overflow-hidden" onMouseLeave={()=>{setOption(none);setList(none);setHead(none)}}>
            <div className="flex flex-col items-center w-full ml-[0.9vw] ">
                <div className="h-[10vh] flex justify-center">            
                    <Logo/>
                </div>
                    <div onMouseEnter={()=>{setOption(contact);setList(contact_select);setHead(contact_head)}} className={`p-[6px]  mt-[5vh] border-black border-2 rounded-md h-[5vh] w-[5vh] flex flex-nowrap items-center justify-center object-fill group hover:scale-[0.95] hover:bg-gray-500 duration-700`}>
                        <IoCallSharp size={70} color="black"/>
                       
                    </div>
                
                
                    <fieldset onMouseEnter={()=>{setOption(address);setList(address_select);setHead(address_head)}} className="border-2 border-gray-500 rounded-md pt-[1.1vh] p-[2vh] mt-[1.1vh] ml-[0.6vh] text-center">
                        <div className="text-blue-900 font-bold">09:30</div>
                        <div className="text-gray-500 font-bold">to</div>
                        <div className="text-blue-900 font-bold">20:30</div>
                        <legend><FaRegClock size={25}/></legend>
                    </fieldset>
                    
                <div onMouseEnter={()=>{setOption(services);setList(servives_select);setHead(services_head);}} className="text-center font-bold uppercase mt-[100%]">
                    <div>Our</div>
                    <div>Services</div>
                </div>
                           <div onMouseEnter={()=>{setOption(settings);setList(settings_select);setHead(settings_head);}} className="p-[6px] border-black border-2 mt-[30vh] rounded-md h-[5vh] w-[5vh] flex items-center justify-center object-fill group hover:scale-[0.95] hover:bg-gray-500 duration-700">
                <IoSettings size={70}/></div>
            </div>
            <div className="flex flex-col">
                <Options selectedOption={option} selectedList={list} selectedHead={head}/>
            </div>
            
        </div>
    )
}

export default Sidenav;