import React, { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import GirlImage from '../../Images/girl.png';
import ArrowImage from '../../Images/arrow.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FAQs from './components/FAQs';

function Home() {
    const sliderRef = useRef(null); 
        const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    // Slider Settings
    const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true, 
            autoplaySpeed: 3000,
            afterChange: (index) => setCurrentSlide(index) 

        };

   

    

  return (
    <>
    
    
    <div className='mx-[20px]'>  
        <Navbar/> 
        <div className='text-center text-[56px] font-semibold font-manrope mt-[80px] tracking-tighter	leading-tight	'>
            <div className='text-[36px] font-covered-by-your-grace text-[#2DA950] font-normal tracking-normal	'>
                Success stories
            </div> 
            Every success journey <br></br> we&apos;ve encountered.
        </div>

        <div className='flex  relative'>
                <img src={GirlImage} alt="person" width={520}  className='rounded-[35px] ml-[200px] mt-[90px]'  />

                <div className='absolute ml-[62px] mt-[210px] bg-[#ffffff] rounded-3xl min-w-[260px] px-4 min-h-[240px] shadow-lg'>

                    <svg width="103" height="103" viewBox="20 25 103 103" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                    <path d="M29.1859 46.4413C29.7668 47.0822 30.3446 47.7255 30.9061 48.3851C31.2077 48.7311 31.5068 49.0823 31.8308 49.4068C33.5621 51.1369 35.3154 52.8474 37.0044 54.6197C38.039 55.7157 39.0622 56.8225 40.0739 57.94L41.5861 59.6208L43.0793 61.3183C43.3725 61.6697 43.6367 62.0441 43.8694 62.4377C43.972 62.5946 44.0354 62.7738 44.0544 62.9603C44.0734 63.1469 44.0474 63.3355 43.9786 63.5107C43.7988 63.9999 43.2619 64.1319 42.77 63.7545C42.4562 63.5013 42.1757 63.2098 41.9351 62.8869C41.3727 62.162 40.7814 61.464 40.161 60.7928C39.5431 60.1194 38.8975 59.4713 38.224 58.8487C37.8526 58.5047 37.4441 58.1668 37.1621 57.761C36.2596 56.4657 35.0968 55.3913 34.0957 54.1804C33.3509 53.2808 32.5366 52.4366 31.7638 51.5587L29.6945 49.2123C29.0003 48.4343 28.3251 47.6381 27.6329 46.8574C27.372 46.5456 27.1321 46.2171 26.9148 45.8738C26.7175 45.544 26.5387 45.2035 26.3795 44.8539C26.2379 44.5449 26.4146 44.4042 26.7546 44.5948C27.2419 44.8692 27.709 45.1773 28.1527 45.5166C28.3351 45.6558 28.5101 45.8061 28.6787 45.9637C28.8404 46.1279 29.0027 46.2926 29.164 46.4564L29.1859 46.4413Z" fill="black"/>
                    <path d="M51.6312 34.9063L51.9159 35.9745L52.1748 37.0511C52.2673 37.4316 52.3601 37.8141 52.4848 38.1848C52.6499 38.6797 52.8211 39.1726 52.9943 39.6648L53.5051 41.1436L54.5327 44.0978L55.7889 47.7383L57.0653 51.3722C57.1844 51.7439 57.2764 52.1238 57.3407 52.5089C57.3736 52.6656 57.3691 52.828 57.3276 52.9832C57.2861 53.1383 57.2087 53.2819 57.1017 53.4024C56.8134 53.7414 56.35 53.6858 56.0677 53.2325C55.8906 52.9339 55.7532 52.6137 55.6586 52.2798C55.1991 50.7722 54.644 49.2956 53.9967 47.8587C53.7927 47.4711 53.634 47.0615 53.5237 46.6376C53.257 45.3034 52.7206 44.0516 52.3761 42.7424C52.121 41.7699 51.7955 40.8143 51.5353 39.8417C51.0781 38.1055 50.6384 36.366 50.2627 34.6105C50.1129 33.9456 50.0749 33.26 50.1503 32.5814C50.1823 32.2877 50.4075 32.2459 50.5799 32.5291C50.8237 32.9366 51.0404 33.3598 51.2284 33.7957C51.377 34.159 51.5037 34.5309 51.6078 34.9093L51.6312 34.9063Z" fill="black"/>
                    <path d="M75.1791 37.6372C74.9739 38.2443 74.7658 38.8509 74.5549 39.4568C74.429 39.7738 74.3222 40.0978 74.2349 40.4271C74.0217 41.3087 73.828 42.1952 73.6346 43.0811C73.44 43.9668 73.24 44.8504 73.0257 45.7302C72.7642 46.8142 72.4914 47.8952 72.2211 48.9768L71.3921 52.2171C71.2943 52.5454 71.1565 52.8609 70.9819 53.1565C70.8246 53.4466 70.4919 53.5812 70.0897 53.62C69.5037 53.6765 68.968 53.3605 68.9376 52.8861C68.9279 52.5829 68.9816 52.2807 69.0954 51.9986C69.5646 50.7066 69.8793 49.3651 70.0332 48.0019C70.0773 47.6239 70.0935 47.2225 70.2648 46.8871C70.8065 45.8155 70.9718 44.6394 71.3867 43.5343C71.6919 42.7128 71.9188 41.8654 72.2083 41.0384C72.4663 40.3009 72.73 39.5656 72.9994 38.8325L73.8532 36.648C74.0728 36.077 74.4262 35.5655 74.8839 35.1562C74.9276 35.1121 74.9835 35.0819 75.0444 35.0695C75.1054 35.0571 75.1685 35.063 75.2258 35.0866C75.2831 35.1101 75.3319 35.1501 75.366 35.2016C75.4 35.253 75.4178 35.3134 75.417 35.3751C75.4324 35.7939 75.4227 36.2134 75.3881 36.6313C75.3341 36.9681 75.2552 37.3006 75.1521 37.6261L75.1791 37.6372Z" fill="black"/>
                    <path d="M86.2467 53.226C86.1272 53.3506 86.0123 53.4794 85.885 53.597L85.5015 53.9487C85.3628 54.0695 85.2346 54.2017 85.118 54.3437C84.8209 54.7336 84.5376 55.1359 84.234 55.5199C83.9347 55.9076 83.6332 56.2935 83.3184 56.6675C82.9313 57.1286 82.5365 57.5828 82.1268 58.0236L80.8982 59.3464C80.7597 59.4759 80.5983 59.5786 80.4222 59.6494C80.254 59.7288 79.9999 59.6487 79.7191 59.4875C79.3101 59.2526 79.0138 58.848 79.0922 58.5905C79.1461 58.4346 79.2482 58.2995 79.384 58.2046C79.9697 57.7512 80.4598 57.1875 80.8259 56.5461C80.9298 56.3677 81.0144 56.1608 81.1976 56.0616C81.7776 55.7401 82.1138 55.1923 82.6035 54.7875C82.9698 54.489 83.2655 54.123 83.6224 53.8145C84.2559 53.2617 84.8745 52.6957 85.5285 52.1618C85.7958 51.9368 86.1263 51.7995 86.4744 51.769C86.5172 51.766 86.56 51.7723 86.5999 51.7875C86.6399 51.8028 86.6759 51.8265 86.7055 51.857C86.7352 51.8876 86.7577 51.9243 86.7715 51.9645C86.7853 52.0047 86.7901 52.0475 86.7855 52.0899C86.7562 52.2056 86.7225 52.3208 86.6849 52.4339C86.6503 52.5458 86.6061 52.6545 86.5529 52.7589C86.4594 52.9184 86.3515 53.0691 86.2304 53.2091L86.2467 53.226Z" fill="black"/>
                    <path d="M26.1184 72.4885C26.5269 72.549 26.9341 72.6136 27.3398 72.6823C27.5537 72.724 27.77 72.7529 27.9876 72.7687C28.5679 72.7859 29.149 72.8095 29.7303 72.8441C30.3113 72.8811 30.8903 72.9401 31.4672 73.0212C32.1758 73.1284 32.8814 73.2568 33.5805 73.4148C34.2795 73.5726 34.9737 73.7492 35.6632 73.9447C35.8738 74.0151 36.0707 74.1203 36.2457 74.256C36.4217 74.3784 36.4794 74.6378 36.4658 74.951C36.4456 75.4072 36.1899 75.826 35.8916 75.8551C35.7047 75.8653 35.5185 75.8274 35.3512 75.7449C34.5824 75.4031 33.7519 75.2171 32.9082 75.1976C32.6741 75.1893 32.4253 75.2122 32.2186 75.1093C31.5565 74.7767 30.8212 74.7793 30.1244 74.6C29.8646 74.5349 29.6014 74.4838 29.3359 74.447C29.0712 74.4045 28.8053 74.3701 28.5408 74.3245C27.5977 74.1629 26.6488 74.0089 25.6917 73.8986C25.2908 73.8394 24.9203 73.6539 24.6348 73.3692C24.4875 73.2439 24.4989 73.0428 24.6776 72.8796L24.8693 72.7381C24.898 72.7146 24.9311 72.697 24.9666 72.6861L25.0643 72.6502C25.1935 72.6038 25.3254 72.5653 25.4593 72.5347C25.567 72.5111 25.6769 72.499 25.7871 72.4986C25.8965 72.503 26.006 72.5122 26.1152 72.5148L26.1184 72.4885Z" fill="black"/>
                    </svg>

                    <div className='font-bold text-[64px] mt-[17px] ml-[17px]'>
                        40%

                        <div className='font-normal text-[18px] text-[#828282] max-w-[200px] '>
                        Achieved reduction in project execution time by optimising team availability
                        </div>

                    </div>

                </div >
                    
                <div className='bg-[#ffffff] shadow-lg absolute flex px-[18px] py-4 rounded-full mt-[510px] ml-[140px]'>
                    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.39" cx="26.1875" cy="26.71" r="26" fill="#DDEFE0"/>
                    <path d="M23.1587 33.9525C23.11 34.1462 21.8912 38.71 15.1875 38.71C14.9223 38.71 14.6679 38.6046 14.4804 38.4171C14.2928 38.2295 14.1875 37.9752 14.1875 37.71C14.1875 31.0062 18.7512 29.7875 18.945 29.7387C19.2024 29.6744 19.4748 29.715 19.7023 29.8515C19.9299 29.9881 20.0938 30.2094 20.1581 30.4669C20.2224 30.7243 20.1818 30.9967 20.0453 31.2242C19.9087 31.4517 19.6874 31.6157 19.43 31.68C19.3175 31.7112 16.6275 32.4975 16.235 36.6625C20.4 36.27 21.1875 33.585 21.22 33.46C21.2863 33.2029 21.452 32.9827 21.6807 32.8477C21.9094 32.7128 22.1823 32.6743 22.4394 32.7406C22.6965 32.8069 22.9167 32.9726 23.0516 33.2013C23.1865 33.43 23.225 33.7029 23.1587 33.96V33.9525ZM34.7837 25.5275L34.1875 26.1237V33.415C34.189 33.6786 34.138 33.9399 34.0376 34.1837C33.9372 34.4275 33.7893 34.6489 33.6025 34.835L29.3125 39.1225C29.1275 39.3088 28.9074 39.4566 28.665 39.5575C28.4226 39.6583 28.1626 39.7101 27.9 39.71C27.6833 39.7099 27.468 39.6749 27.2625 39.6062C26.9096 39.4895 26.5964 39.2764 26.3583 38.991C26.1202 38.7056 25.9666 38.3593 25.915 37.9912L25.2437 33.18L19.7175 27.6537L14.9087 26.9825C14.5402 26.9308 14.1933 26.7773 13.9072 26.5392C13.6212 26.3012 13.4072 25.988 13.2894 25.6349C13.1716 25.2819 13.1546 24.903 13.2404 24.5408C13.3262 24.1787 13.5113 23.8477 13.775 23.585L18.0625 19.295C18.2486 19.1082 18.47 18.9603 18.7137 18.8599C18.9575 18.7594 19.2188 18.7085 19.4825 18.71H26.7737L27.37 18.1137C30.705 14.78 34.7225 14.6362 36.2962 14.73C36.7838 14.7596 37.2437 14.9667 37.5891 15.3121C37.9345 15.6575 38.1416 16.1174 38.1712 16.605C38.2625 18.1737 38.1187 22.1925 34.785 25.5275H34.7837ZM24.7737 20.71H19.4825L15.1875 25.0025L19.8312 25.65L24.7737 20.71ZM32.1875 28.1237L27.2462 33.065L27.8962 37.71L32.1875 33.415V28.1237Z" fill="#2DA950"/>
                    </svg>
                    
                    <div className='font-bold font-manrope text-[24px] ml-[15px] pr-[10px]'>
                        10 DAYS

                        <div className='font-normal text-[16px] text-[#828282] font-manrope'>
                            Staff Deployment
                        </div>

                    </div>

                </div>

                <div className='absolute bg-[#002E18] text-[#ffffff] font-manrope rounded-3xl  p-8 border-[#3D3D3D] border-2 mt-[450px] ml-[530px]'>

                    <div className='text-[54px]   font-semibold'>
                        $0.5 <span className='text-[20px] text-[#A6A3A0]'> MILLION</span>
                    </div>

                    <div className='font-normal text-[16px] text-[#CCCCCC] font-manrope max-w-[200px] mt-[10px] '>
                    Reduced client expenses by saving on hiring and employee costs.
                    </div>

                </div>
            <div className='absolute ml-[740px]'>

            <div className='flex relative '>
                <div className='border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-r-3xl	rounded-b-3xl	rounded-tl-[60px]	absolute ml-[250px]'>
                </div>
                <div className='border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-r-3xl	rounded-b-3xl	rounded-tl-[60px]	absolute ml-[449px]'>
                </div>
                <div className='border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-r-3xl	rounded-b-3xl	rounded-tl-[60px]	absolute ml-[647px] '>
                </div>
            </div> 

            <div className='flex relative mt-[198px]'>
                <div className='border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-3xl	absolute ml-[250px]'>
                </div>
                <div className='border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-3xl	absolute ml-[449px]'>
                </div>
                <div className='border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-3xl	absolute ml-[647px] '>
                </div>
            </div> 

            <div className='flex relative mt-[198px]'>
                <div className='border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-l-3xl	rounded-t-3xl	rounded-br-[60px]	absolute ml-[250px]'>
                </div>
                <div className='border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-l-3xl	rounded-t-3xl	rounded-br-[60px]	absolute ml-[449px]'>
                </div>
                <div className='border-2 h-[200px] w-[200px] border-[#e8e8e880] rounded-l-3xl	rounded-t-3xl	rounded-br-[60px]	absolute ml-[647px] '>
                </div>
            </div>

            </div> 

            <div className='font-manrope text-[40px] font-semibold max-w-[400px] leading-tight ml-[190px] mt-[180px] z-10 '>
                <Slider {...settings} ref={sliderRef}>
                <div>
                Enhance fortune 50 company&apos;s insights teams research capabilities
                </div>
                <div>
                Enhance fortune 50 company&apos;s insights teams research capabilities
                </div>
                <div>
                Enhance fortune 50 company&apos;s insights teams research capabilities
                </div>
                </Slider>
                <div className='flex space-x-3 mt-[50px]'>
                    <div className={`h-[10px] w-[10px] rounded-full  cursor-pointer ${currentSlide === 0 ? "bg-[#2DA950]" : "bg-[#E4E3E3] hover:bg-[#CAD0CB]"}`} onClick={() => goToSlide(0)}>
                    </div>

                    <div className={`h-[10px] w-[10px] rounded-full  cursor-pointer ${currentSlide === 1 ? "bg-[#2DA950]" : "bg-[#E4E3E3] hover:bg-[#CAD0CB]"}`} onClick={() => goToSlide(1)}>
                    </div>

                    <div className={`h-[10px] w-[10px] rounded-full  cursor-pointer ${currentSlide === 2 ? "bg-[#2DA950]" : "bg-[#E4E3E3] hover:bg-[#CAD0CB]"}`} onClick={() => goToSlide(2)}>
                    </div>

                </div>

                <div className='px-10 mt-[120px] border-[1px] text-[#ffffff] bg-[#000000] hover:bg-[#4E4E4E] cursor-pointer flex text-[20px] max-w-[250px] py-8 rounded-full'>
                        Explore More
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[5px] ml-[20px]'>
                        <path d="M12.1716 6.9999L-5.92571e-07 6.9999L-7.67416e-07 8.9999L12.1716 8.9999L6.8076 14.3638L8.2218 15.778L16 7.9999L8.2218 0.221679L6.8076 1.63589L12.1716 6.9999Z" fill="white"/>
                        </svg>

                    </div>
            </div>

        </div>

        <div className='bg-[#E8EEE7]  mt-[250px] rounded-[40px] flex mb-[50px] pb-[20px]'>
            <div className=''>
                <div className='font-manrope font-bold text-[60px] ml-[100px] mt-[100px]'>
                    <div className='text-[32px] font-normal font-covered-by-your-grace text-[#9E9D9D]'>
                    What&apos;s on your mind
                    </div>
                    Ask Questions
                </div>
                <img src={ArrowImage} alt="Arrow" className='rounded-bl-[40px] mt-[150px]' width={530} />
            </div>
            <div className='ml-[250px] text-[30px] text-manrope font-semibold w-[700px] pr-[100px] mt-[160px]'>
                
                <FAQs question={'Do you offer freelancers?'} answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus. Cupiditate porro repellat, impedit unde architecto officia aspernatur aliquid sequi tenetur rem itaque eius delectus blanditiis voluptatum eligendi mollitia quisquam?"} />

                <FAQs question={"What's the guarantee that I will be satisfied with the hired talent?"} answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus. Cupiditate porro repellat, impedit unde architecto officia aspernatur aliquid sequi tenetur rem itaque eius delectus blanditiis voluptatum eligendi mollitia quisquam"} />

                <FAQs question={"Can I hire multiple talents at once?"} answer={"If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."}/>

                <FAQs question={"Why should I not go to an agency directly?"} answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus. Cupiditate porro repellat, impedit unde architecto officia aspernatur aliquid sequi tenetur rem itaque eius delectus blanditiis voluptatum eligendi mollitia quisquam"}/>

                <FAQs question={"Who can help me pick a right skillset?"} answer={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, minus. Cupiditate porro repellat, impedit unde architecto officia aspernatur aliquid sequi tenetur rem itaque eius delectus blanditiis voluptatum eligendi mollitia quisquam"}/>
                
            </div>
        </div> 
        <footer className='bg-[#F5F5F5] flex font-manrope text-[18px] font-medium h-[144px] mb-[50px] p-14 justify-between rounded-[30px]'>
            <div className='flex items-center'>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7877 7.42773C13.913 5.97351 12.3195 5 10.5 5C7.73999 5 5.5 7.23999 5.5 10C5.5 12.76 7.73999 15 10.5 15C12.3195 15 13.913 14.0265 14.7877 12.5723L13.0729 11.5442C12.5483 12.4166 11.5927 13 10.5 13C8.8425 13 7.5 11.6575 7.5 10C7.5 8.3425 8.8425 7 10.5 7C11.593 7 12.5491 7.58386 13.0735 8.4568L14.7877 7.42773ZM20.5 10C20.5 4.47998 16.02 0 10.5 0C4.97998 0 0.5 4.47998 0.5 10C0.5 15.52 4.97998 20 10.5 20C16.02 20 20.5 15.52 20.5 10ZM2.5 10C2.5 5.57996 6.07996 2 10.5 2C14.92 2 18.5 5.57996 18.5 10C18.5 14.42 14.92 18 10.5 18C6.07996 18 2.5 14.42 2.5 10Z" fill="#1C1C1C"/>
                </svg>
                &nbsp;&nbsp;&nbsp;&nbsp;Talup 2023. All rights reserved
            </div>
            <div className='flex font-normal space-x-12'>
                <div className='underline	text-[#1C1C1C] cursor-pointer'>
                Terms & Conditions
                </div>
                <div className='underline	text-[#1C1C1C] cursor-pointer'>
                Privacy Policy
                </div>
            </div>
        </footer>         

    </div>
    </>
  )
}

export default Home;