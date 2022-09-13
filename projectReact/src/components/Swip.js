//  import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from 'react';

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Swip() {
  const imgs=[
    {id:0,value:"https://wallpaperaccess.com/full/2637581.jpg"},
    {id:1,value:"https://wallpaperaccess.com/thumb/8051222.jpg"},
    {id:2,value:"https://wallpaperaccess.com/thumb/43575.jpg"},
    {id:3,value:"https://wallpaperaccess.com/thumb/43575.jpg"},
    {id:4,value:"https://wallpaperaccess.com/thumb/43575.jpg"},
  ]
  const [wordData,setWordData]=useState(imgs[0])
  // const updateData=(){
  //  update(wordData+imgs[1])

  // }
   const Data=(index)=>{
  const wordSlider=imgs[index+1];
  setWordData(wordSlider)
  }
  return (
    <>
    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide><img src={wordData.value.replace[1]} height="300" width="500" /> 
        
        
        </SwiperSlide>
        {/* <SwiperSlide><img src={updateData.value} height="300" width="500" /></SwiperSlide> */}
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
