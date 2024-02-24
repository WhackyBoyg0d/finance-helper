import React from "react";

interface Props {
    userData: UserData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    nextStep: () => void;
}

interface UserData {
    name: string;
    email: string;
    // Add more fields as needed
}
  
function Step1({ userData, handleInputChange, nextStep }: Props) {
    return (
        <div className=" rounded px-8 pt-6 pb-8 mb-4">
            {/* <h2 className="text-2xl mb-4 pb-4">Lets get you started!</h2> */}
            <h2 className="text-2xl mb-4 border-b-2 border-black inline-flex pb-2 ">Whats your learning goals?</h2>
            <form onSubmit={nextStep}>


            <div className="mb-4">
                    <div className="flex gap-10">
                      <div className='flex flex-col'>

  <div className="inline-flex items-center">
    <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="custom-style1">
      <input name="type" type="radio"
        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/10 bg-gray-900/5 p-0 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
        id="custom-style1" />
      <span
        className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          className="w-full h-full scale-105">
          <path fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"></path>
        </svg>
      </span>
    </label>
    <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="custom-style1">
      <p className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-400">
        Saving 💰
      </p>
    </label>
  </div>
  <div className="inline-flex items-center">
    <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="custom-style2">
      <input name="type" type="radio"
        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/10 bg-gray-900/5 p-0 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
        id="custom-style2" checked />
      <span
        className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          className="w-full h-full scale-105">
          <path fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"></path>
        </svg>
      </span>
    </label>
    <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="custom-style2">
      <p className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-400">
        Investing 📈
      </p>
    </label>
  </div>
  <div className="inline-flex items-center">
    <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="custom-style2">
      <input name="type" type="radio"
        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/10 bg-gray-900/5 p-0 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
        id="custom-style2" checked />
      <span
        className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          className="w-full h-full scale-105">
          <path fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"></path>
        </svg>
      </span>
    </label>
    <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="custom-style2">
      <p className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-400">
        Both 🚀
      </p>
    </label>
  </div>
</div>
</div>

                        {/* <input
                    type="radio"
                    name="react-tips"
                    value="option1"
                    checked={true}
                    className="form-check-input"
                    />
            Option 1
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                    /> */}
                </div>


                <div className="flex items-center justify-center">
                    <button
                        className="bg-emerald-300 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded "
                        type="submit"
                    >
                        Next
                    </button>
                </div>
                
            </form>
        </div>
    );
}

export default Step1;