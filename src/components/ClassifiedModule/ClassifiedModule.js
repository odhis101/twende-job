import React from 'react'

export default function ClassifiedModule( {Employers_Name,jobDescription,EMPLOYER_EMAIL,Employers_contact,jobTitle,DeadlineDate,Category}) {
  return (
    <div className="JobCentercontainer rounded-md shadow-inherit cursor-pointer" >
    <div className="JobCentercontainer__header">
    <p  className=" px-2"> {Category}
</p>
    <p className="text-[#717171] px-2"> {DeadlineDate.slice(0, 10)}</p>
        </div>
    <p className="px-2"> {jobDescription}
 </p>
    <div className="JobCentercontainer__header">
    <p className="px-2 font-normal">CALL/WHATSAPP {Employers_contact}</p>

        </div>
   

    

</div>
  )
}
