import React, { useState , useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';


function GetProjects() {
  const navigate = useNavigate()
  const [Submitted, setSubmitted] = useState(false) // tells if the form is successfully submitted or not
  const [name, setName] = useState('');              //stores the name input
  const [email, setEmail] = useState(null);           //stores the email input
  const [isNameValid, setIsNameValid] = useState(false);   //used to check whether the name field is filled or empty
  const [isEmailValid, setIsEmailValid] = useState(false);  // used to know whether email is valid or not
  const [errors , setErrors] = useState(null);            // tells errors if any
  const [remainingTime, setRemainingTime] = useState(5);    // Time remaining after the form is submitted which will automatically navigate to the home page

  const handleSubmit = (event) => {           // handling the submission of the form
    event.preventDefault();
    if(!isEmailValid){                          // checks if the email is valid which has been submitted
      setErrors("Enter a valid email address") // Sets errors if the email is not valid
      return
    }
    else{
      setErrors(null)     // if everyhting is fine then there are now errors
      setSubmitted(true) // Form is finally submitted

      
    }

  };
  useEffect(() => {
    let timerId;
    if (Submitted) {                                    // Will trigger when the form is successfully submitted
      timerId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);   //countdown for automatically navigation to the home page
        if(remainingTime === 0){                        // when the remaining time is 0 then the webpage navigates to the home page automatically
          navigate('/');
        }
      }, 1000); // Update every second
    }

    return () => clearInterval(timerId);                 // Clear the interval when component unmounts or isSubmitted becomes false

  }, [Submitted, navigate, remainingTime]);
  
  const handleNameChange = (event) => {  
    const newName = event.target.value;
    setName(newName);
    setIsNameValid(newName.trim().length > 0);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const validateEmail = (email) => {      // checks whether the email is valid or not
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div>
        <div className='flex py-8 px-12 justify-between'>
          <svg width="121" height="32" viewBox="0 0 121 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.2621 10.7612C37.6781 9.54073 39.224 8.57237 42.5571 8.23332V13.9571L40.4347 14.2961C37.3511 14.8436 36.4284 15.3001 36.4284 18.0816V30.4385H30.0051V8.44376H36.2626V10.7612H36.2621ZM58.2149 22.1554C58.1663 23.3377 58.1242 24.4281 56.7512 25.2663C55.7914 25.8163 54.9143 25.8163 54.5417 25.8163C53.2478 25.8163 52.3712 25.2262 51.996 24.7229C51.4971 24.0448 51.4971 23.0815 51.4971 22.1177V8.49053H45.0373V22.2774C45.0373 25.8555 45.2452 27.1573 46.3672 28.7595C47.8695 30.8615 50.4958 31.0714 51.9133 31.0714C53.335 31.0714 54.7475 30.7278 56.0419 30.0654C57.2075 29.4752 57.5832 29.0538 58.2144 28.3386V30.439H64.6356V8.49053H58.2144V22.1554H58.2149ZM14.113 25.0569C16.574 25.0106 19.7839 24.9293 19.7839 21.5271C19.7839 17.9474 16.8625 17.9073 15.3633 17.8651H8.9882V25.0569H14.113ZM25.6251 17.6989C26.667 18.8309 27.2526 20.4657 27.2526 22.1569C27.2526 24.4687 26.0429 27.7032 22.3721 29.3431C20.1621 30.313 17.7817 30.438 14.404 30.438H1.98037V12.4443L14.5303 12.4783C16.1978 12.4392 18.9093 12.3579 18.9093 9.28555C18.9093 6.4252 16.4498 6.30066 15.0307 6.30066L5.47871 6.27473L0 0.750244H13.3652C16.4498 0.750244 19.2454 0.875802 21.0402 1.46648C24.6648 2.64071 26.1255 5.5463 26.1255 8.36345C26.1255 9.95654 25.7067 10.929 25.5835 11.2162C24.2491 14.2463 21.4104 14.8355 19.8305 15.1709C21.6233 15.4658 23.9966 15.8486 25.6251 17.6989ZM75.0333 8.52967H68.5736V30.4395H74.9948V18.5859C74.9948 15.8485 74.9948 13.1148 78.374 13.1148C79.6238 13.1148 80.7483 13.6251 81.2492 14.7948C81.4971 15.387 81.5407 16.0986 81.5407 18.0832V30.4401H87.9194V15.4282C87.9194 12.0229 87.3379 10.0445 85.0437 8.82297C83.9156 8.19671 82.4554 7.94814 81.1646 7.94814C79.6238 7.94814 78.2026 8.32075 77.2043 8.74266C76.0808 9.28606 75.659 9.79184 75.0333 10.4679V8.52967ZM96.8097 16.7463C97.0161 15.8216 97.227 14.809 98.1067 13.8422C98.7277 13.1702 99.8143 12.4133 101.355 12.4133C102.485 12.4133 103.694 12.8337 104.489 13.6378C105.401 14.6006 105.566 15.8216 105.691 16.7463H96.8097ZM106.494 23.0531C106.154 24.2131 104.957 26.2459 101.454 26.2459C97.9921 26.2459 96.7291 23.5156 96.7697 20.7808H112.326C112.237 18.3002 112.075 14.0104 109.232 10.9402C106.447 7.91053 102.689 7.79259 101.393 7.79259C92.809 7.79259 90.2222 14.6001 90.2222 19.8974C90.2222 27.0897 94.764 31.2493 101.227 31.2493C104.735 31.2493 107.563 29.9038 109.446 28.1445C110.569 27.0897 111.781 25.3258 112.036 23.0525H106.494V23.0531ZM121 0.754312H114.577V30.439H121V0.754312Z" fill="#333333"/>
          </svg>
          { !Submitted ?                    // if form is successfully submitted then the cross button disappears. 
          (<Link to='/'>
            <div className='border-2 h-[60px] w-[60px] rounded-full flex items-center justify-center hover:bg-[#F1F1F1] cursor-pointer' >
              <FontAwesomeIcon icon={faXmark} style={{color: "#000000"}} className='h-[30px] w-[30px]' />
            </div>
          </Link>) : 
          (<></>)}
        </div>

        {Submitted ? (                      // displays the element according to the submission of the form.
        <>
        <div className='flex justify-center mt-[40px]'>
          <div className=''>
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto' >
            <path d="M34.0014 67.3219C15.5919 67.3219 0.668091 52.3979 0.668091 33.9886C0.668091 15.5791 15.5919 0.655273 34.0014 0.655273C52.4107 0.655273 67.3347 15.5791 67.3347 33.9886C67.3347 52.3979 52.4107 67.3219 34.0014 67.3219ZM30.6768 47.3219L54.2471 23.7517L49.5331 19.0377L30.6768 37.8939L21.2488 28.4656L16.5347 33.1799L30.6768 47.3219Z" fill="#28B246"/>
            </svg>
            <div className='mt-[30px]'>
              <div className='font-covered-by-your-grace text-[36px] text-[#2DA950] text-center'>
              Success Submitted
              </div>
              <div className='text-[56px] font-semibold font-manrope tracking-tight	text-center'>
              Congratulations
              </div>
              <div className='text-manrope text-[27px] text-[#727272] max-w-[700px] text-center mt-[10px]'>
              Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
              </div>
            </div>
          </div>
          
        </div>
        <div className='mt-[110px] flex justify-center font-manrope font-medium text-[20px] text-[#727272]'>
        Redirecting you to Homepage in&nbsp; <span className='text-black font-semibold'> {remainingTime} Seconds</span> 
        </div>
        </>
        ):(
        <>
        <div className='flex items-center justify-center mb-[50px]'>
          <div className='max-w-[590px]'>
            <div className='font-covered-by-your-grace text-[36px] text-[#2DA950] text-center'> 
              Registration Form
            </div>
            <div className='font-manrope font-semibold text-[56px] text-center leading-tight	'>
              Start your success Journey here!
            </div>
            <form onSubmit={handleSubmit} className='mt-[40px]'>
              <div className='flex justify-center'>
                <input
                  className={`bg-[#EFEFEF] placeholder:text-[#827A7A] py-6 px-10 placeholder:text-[20px] w-[420px] rounded-full`}
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Enter your name'
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className='flex justify-center mt-[20px]'>
                <input
                  className={`bg-[#EFEFEF] placeholder:text-[#827A7A] py-6 px-10 placeholder:text-[20px] w-[420px] rounded-full`}
                  type="text"
                  id="email"
                  name="email"
                  placeholder='Enter your email'
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              {errors ? (<div className='flex text-[#FF0808] items-center ml-[90px] mt-[15px] text-manrope  tracking-tight	 text-[16px]'>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-[10px]'>
                            <path d="M7.50162 13.6666C3.81973 13.6666 0.834961 10.6818 0.834961 6.99992C0.834961 3.31802 3.81973 0.333252 7.50162 0.333252C11.1835 0.333252 14.1683 3.31802 14.1683 6.99992C14.1683 10.6818 11.1835 13.6666 7.50162 13.6666ZM6.83496 8.99992V10.3332H8.16829V8.99992H6.83496ZM6.83496 3.66658V7.66658H8.16829V3.66658H6.83496Z" fill="#FF0808"/>
                            </svg>
                            {errors}
                          </div>) : (<>
                          </>)}
              <div className='flex justify-center mt-[50px]'>
                <button
                  type="submit"
                  className={`w-[420px] text-[18px] text-white ${isNameValid && email ? 'bg-black  hover:bg-[#4E4E4E]' : 'bg-[#C9C9C9] cursor-not-allowed' } p-6 rounded-full`}
                  
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        </>
          )}
        

      </div>
    </>
  );
}

export default GetProjects;
