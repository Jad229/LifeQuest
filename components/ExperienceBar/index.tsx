'use client'

import { useEffect, useState } from "react";

const user = {
  username: "User",
  currentExp: 500,
  level: 5
}


function ExperienceBar(){
  const [experienceBar, setExperienceBar] = useState(1)
  const expNeeded = calculateExpNeeded(user.level);
 
  function calculateExpNeeded(level: number): number {
    return 1000 + (level - 1) * 500; //1000 + 500 for each subsequent level
  }

  function calculateExperience(currentExp: number, expNeeded: number): number{
    return (currentExp/expNeeded) * 100;
  }
  
  useEffect(() => {
    const calculatedExperience = calculateExperience(user.currentExp, expNeeded)
    setExperienceBar(calculatedExperience);
    
  }, [])
  
  return (
    <div className="mx-auto w-full lg:w-1/2">
        <div className=' w-full bg-white h-7 text-black font-bold rounded-full'>
            <div className="h-full bg-green-500 rounded-full border border-white transition-all ease-out duration-500" style={{width: `${experienceBar}%`}}></div>
        </div>
        <p className="self-start">Progress: </p>
    </div>
  )
}

export default ExperienceBar