import React from "react";
import { useCountUp } from "use-count-up";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export function Profile(): JSX.Element {

  

  const { value: value1 } = useCountUp({
    isCounting: true,
    duration: 2.5,
    start: 0,
    end: 75
  });

    return (
      // <CssVarsProvider theme={theme}>
      <>
        <div className="flex justify-between px-12 py-12">
          <h1 className="border-b-2 border-black inline-flex">Profile</h1>
          <p className="border-b-2 border-black inline-flex">IMG</p>
        </div>
        <div className="flex-row mx-16 my-6 grid grid-cols-2 gap-8"> 
        <div>
          <h2 className="border-b-2 border-r-2 border-black inline-flex mb-4 pr-2">Your Courses</h2>
        </div>

        <div className="flex-end flex">
          <div className="  mx-16 my-6  gap-8 grid grid-rows-2  w-1/2" >  
            <div className="border-2 bg-slate-50 rounded-md border-black p-4 justify-center"> {/*goal*/}
  
                <CircularProgressbar value={value1 as number} text={`${value1}%`} />
            </div>
            <div className=" border-2 bg-slate-50 rounded-md border-black p-4 " > {/*savings*/}
              savings
            </div>
          </div>
        </div>
        </div>
        </>
      // </CssVarsProvider>
    )
}

export default Profile;
