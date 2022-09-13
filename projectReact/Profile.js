import React from 'react'
import { useState,useEffect } from 'react';
import './Profile.css';
// import leftArrow from 'images/swiper-left.svg';
// import rightArrow from 'images/swiper-right.svg';
// import Page from './Page';
 import list from './Data';
//  const len = list.length - 1;
 export default function Profile() {
    // function Slider(props) {
    //     const [activeIndex, setActiveIndex] = useState(0);
      
       
    
    
    // function btn(){
    //     const[next, setNext]=useState({})
           
    // function BtnSlider({ direction, moveSlide }) {

    // }
   
    
    const [data,setData] = useState(0) 
    function click(index){
        //debugger
        setData(list[index])
       
        
    }
// constructor(props){
//     super(props);
//     this.state={
//         data:0
//     }
// };
// function BtnSlider({ direction, moveSlide }) {
    const nextSlide = () => {
        // debugger
        if(data !== data.length){
            setData(data + 1)
        } 
        else if (data === data.length){
            setData(1)
        }
    }

    const prevSlide = () => {
        // debugger
        if(data !== 1){
            setData(data - 1)
        }
        else if (data === 1){
             setData(data.length)
            // setData(data+1)
        }
    }
// }
//   const[auto, setAuto]=useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            // click(0);
            nextSlide();
            prevSlide();
            console.log(data+1)
    console.log("hello")
    //   setData(data === data.length-1?data+1:data-1);
    setData( data+1);
}, 2000);
// console.log(interval);
console.log("buy")
        return () => clearInterval(interval);

    });
    
    

    return (
        <div>
            <div className=" new-testimonials">
                <div className=" new-testimonials p-6 pl-0 pr-0 text-center max-width sm-p-2 sm-pb-3">
                    <h2 className=" first-content-text text-section--title mt-0">
                        <span className="primary-text">Thousands </span>
                        <span className="white-text">of lives changed</span>
                    </h2>
                    <h2 className=" sub-heading">
                        Hear it from the ones who have been on this journey already
                    </h2>
                    <div className=" only-web">
                        <div className="css-student-main">
                            <div className="css-student">
                                <div className=" d-flex flex-col justify-between h-100">
                                    <div className=" d-flex justify-between">
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Saurabh-Garg.webp"
                                            style={{ marginTop: "-15px" }}
                                            className=" stu-image-active" alt=''
                                            onClick={()=>{click(0)}}
                                            // onClick={()=>{data(0)}}

                                        />
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Naveen-Katiyar.webp"
                                            className=" stu-image" alt=''
                                            onClick={()=>{click(1)}}
                                        />
                                    </div>
                                    <div className=" d-flex justify-center">
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Kaushal-Sorathiya.webp"
                                            style={{ marginTop: "-120px" }}
                                            className=" stu-image" alt=''
                                            onClick={()=>{click(2)}}
                                        />
                                    </div>
                                    <div className=" d-flex justify-between">
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp"
                                            style={{ marginTop: "-160px" }}
                                            className=" stu-image" alt=''
                                            onClick={()=>{click(3)}}
                                        />
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Nipun-Sinha.webp"
                                            style={{ marginLeft: "-60px" }}
                                            className=" stu-image" alt=''
                                            onClick={()=>{click(4)}}
                                        />
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Gajendra-Malviya.webp"
                                            style={{ marginTop: "-60px" }}
                                            className=" stu-image" alt=''
                                            onClick={()=>{click(5)}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="css-swipers">
                                <div className=" d-flex mt-5">
                                    <div className=" d-flex items-center">
                                    {/* <div className={direction === "items-center" ? "d-flex items-center" : "d-flex items-center"}> */}
                                        <img src= "images/swiper-left.svg" className=" cursor-ptr" alt='' 
                                       
                                        onClick={()=>{prevSlide()}}
                                        // onClick={()=>setData(data.index+1)}
                                        
                                        />
                                    </div>
                                    <div className=" testimonials-web-card">
                                        <div className="card+companylogo">
                                            <div className="cardimage">
                                                <img
                                                    src={data.image}
                                                    className=" image" alt=''
                                                />
                                            </div>
                                            <div className=" name">{data.name}</div>
                                            <div className="">
                                                <img
                                                    src={data.company }
                                                    className=" company" alt=''
                                                />
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className=" d-flex justify-end">
                                                <div className=" youtube">
                                                    <img src="icons/youtube.svg" alt="youtube" className="" />
                                                    <span className="">Watch Testimonial</span>
                                                </div>
                                            </div>
                                            <div className="">
                                                <p className=" text">
                                                   {data.review}
                                                </p>
                                                <p className=" read-more">Read More</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" d-flex items-center">
                                        <img src="images/swiper-right.svg" className=" cursor-ptr" alt='' 
                                           onClick={()=>{nextSlide()}} />
                                    </div>
                                </div>
                                <div className=" mt-5">
                                    <div className=" undefined">
                                        <button className="css-testimonials" tabIndex={0} type="button">
                                            Read More Testimonials
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="css-student">
                                <div className=" d-flex flex-col justify-between h-100">
                                    <div className=" d-flex justify-between">
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Utkarsh-singh.webp"
                                            style={{ marginTop: 10 }}
                                            className=" stu-image" alt=''
                                            onClick={()=>{click(6)}}
                                        />
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Prakhar-Agarwal.webp"
                                            style={{ marginTop: 40 }}
                                            className=" stu-image" alt=''
                                            onClick={()=>{click(7)}}
                                        />
                                    </div>
                                    <div className=" d-flex justify-center">
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Karri-Devi.webp"
                                            style={{ marginTop: "-120px" }}
                                            className=" stu-image" alt=''
                                            onClick={()=>{click(8)}}
                                        />
                                    </div>
                                    <div className=" d-flex justify-between">
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Pawan-Kumar.webp"
                                            style={{ marginTop: "-120px" }}
                                            className=" stu-image" alt=''
                                             onClick={()=>{click(9)}}
                                            
                                        />
                                        <img
                                            src="https://images.geekster.in/placed/Vamsi-Krishna.webp"
                                            style={{ marginTop: "-60px" }}
                                            className=" stu-image" alt=''
                                            onClick={()=>{click(10)}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" only-mobile">
                        <div className=" mt-1">
                            <div className=" image-container">
                                <div className=" d-flex">
                                    <img src="https://images.geekster.in/new-testimonial/Saurabh-Garg.webp"alt='' className="image"
                                    onClick={()=>{click(0)}}
                                     />
                                    <img src="https://images.geekster.in/new-testimonial/Naveen-Katiyar.webp" alt='' className="image"
                                    onClick={()=>{click(1)}} />
                                    <img src="https://images.geekster.in/new-testimonial/Kaushal-Sorathiya.webp"alt='' className="image" 
                                    onClick={()=>{click(2)}}/>
                                    <img src="https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp"alt='' className="image" 
                                    onClick={()=>{click(3)}}/>
                                    <img src="https://images.geekster.in/new-testimonial/Nipun-Sinha.webp" alt='' className="image" 
                                    onClick={()=>{click(4)}}/>
                                </div>
                                <div className="">
                                <img src= {data.image } alt=''className=" active-image" 
                                        onClick={()=>{click(5)}}
                                    />
                                </div>
                                <div className="d-flex">
                                    <img src="https://images.geekster.in/new-testimonial/Utkarsh-singh.webp" alt='' className="image" 
                                    onClick={()=>{click(6)}}/>
                                    <img src="https://images.geekster.in/new-testimonial/Prakhar-Agarwal.webp" alt='' className="image"
                                    onClick={()=>{click(7)}} />
                                    <img src="https://images.geekster.in/new-testimonial/Karri-Devi.webp"alt='' className="image" 
                                    onClick={()=>{click(8)}}/>
                                    <img src="https://images.geekster.in/new-testimonial/Pawan-Kumar.webp"alt='' className="image" 
                                    onClick={()=>{click(9)}}/>
                                    <img src="https://images.geekster.in/placed/Vamsi-Krishna.webp"alt='' className="image" 
                                    onClick={()=>{click(10)}}/>
                                </div>
                            </div>


                            <div className=" testimonials-mobile-card">
                                <div className="">
                                    <div className=" name">{data.name}</div>
                                    <div className="">
                                        <img
                                            src={data.company}
                                            className=" company" alt='user'
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <div className=" d-flex justify-start">
                                        <div className=" youtube">
                                            <img src="icons/youtube.svg" alt="youtube" className="" />
                                            <span className="">Watch Testimonial</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className=" text">
                                           {data.review}
                                        </p>
                                        <p className=" read-more">Read More</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" d-flex justify-center items-center mt-3 arrow-icon">
                                <img src="images/swiper-left.svg" className=" cursor-ptr mr-2" alt='' />
                                <img src="images/swiper-right.svg" className=" cursor-ptr ml-2" alt='' />
                            </div>
                            <div className=" mt-4">
                                <div className=" undefined" >

                                    <button className=" css-testimonials" tabIndex={0} type="button">
                                        Read More Testimonials
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

 
