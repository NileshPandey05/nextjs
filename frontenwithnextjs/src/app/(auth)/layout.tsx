import React from "react"

export default function({children}:Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <>
            <div className="border-b text-center">
                20% off for the next 3 days
            </div>
            {children}
        </>
    )
}
