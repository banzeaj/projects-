import Button  from "@/components/button";
import React from "react";
import User from "@/components/user";

const HomePage = ()=>{

  return(
    <div>

      <h1 className="text-4xl text-red-800">this is a home page</h1>

      <p>this is a paragraph </p>
        <div>
        <Button />
        <User name="John welker" age={40} />

        </div>
       
    </div>
  )
}

export default HomePage