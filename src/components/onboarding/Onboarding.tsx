import React, { useState } from 'react';
import Step2 from './steps/Step2';
import Step1 from './steps/Step1';

interface UserData {
  name: string;
  email: string;
}

function Onboarding() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',

  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission or API calls here
  };

  return (
    <div className='bg-slate-100 flex justify-center items-center h-screen'>
      <div className='border-black border-2 rounded-md p-5 m-5 bg-zinc-50'>
        {currentStep === 1 && (
          <Step1
          userData={userData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
          />
          )}
        {currentStep === 2 && (
          <Step2
          userData={userData}
          handleInputChange={handleInputChange}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          />
          )}
        </div>
    </div>
  );
}

export default Onboarding;