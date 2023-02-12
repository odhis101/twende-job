import React from 'react'

export default function SkillModule( {id,skillName,skillDescription,Email,skillCategory,Location,Names,phoneNumber,Category}) {
  return (
    <div className="JobCentercontainer rounded-md shadow-inherit cursor-pointer" >
     <p  className=" px-2"> Names {Names}</p>
    <div className="JobCentercontainer__header">
    <p  className=" px-2"> Skill Name : {skillCategory}</p>
   
        </div>
       
    <p className="px-2 py-2"> Description : {skillDescription}
 </p>
    <div className="JobCentercontainer__header">
    <p className="px-2 font-normal">Location {Location}</p>
    <p className="px-2 font-normal">CALL/WHATSAPP {phoneNumber}</p>

        </div>
   

    

</div>
  )
}
