// import Swip from './components/Swip';
// import Prof from './components/Prof';
// import Page from './components/Page';
// import Add from './components/Add';
import './App.css';
// import Auto from './components/Auto';
// import Page from './components/Page';
import Profile from './components/Profile';
//import "swiper/css/bundle";
// import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import './ImageSlider.css';
// import "./styles.css";
// import { useState } from 'react';
// import { Autoplay, Pagination, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";


function App() {
  
  return (
    <div className="">
     {/* <Swip/> */}
     <Profile/>
     {/* <Auto/> */}
     {/* <Page/> */}
     {/* <Page/> */}
     {/* <Add/> */}
    </div>
  );
//   const imgs=[
//     {id:0,value:"https://wallpaperaccess.com/full/2637581.jpg"},
//     {id:1,value:"https://wallpaperaccess.com/thumb/8051222.jpg"},
//     {id:2,value:"https://wallpaperaccess.com/thumb/43575.jpg"},
//     {id:3,value:"https://wallpaperaccess.com/thumb/43575.jpg"},
//     {id:4,value:"https://wallpaperaccess.com/thumb/43575.jpg"},
//   ]
//   const [wordData,setWordData]=useState(imgs[0])
//   const handleClick=(index)=>{
//     console.log(index)
//     const wordSlider=imgs[index];
//     setWordData(wordSlider)
//   }
//   return (
//   <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//     < SwiperSlide className="main">
//       <img src={wordData.value} height="300" width="500" /> 
//       <div className='flex_row'>
//         {imgs.map((data,i)=>
//         <div className="thumbnail" key={i} >
//           <img className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
//         </div>
//         )}
//       </div>
//     </ SwiperSlide>
// </Swiper>
//   );

 }

export default App;

// function ImageSlider() {
  
//   const imgs=[
//     {id:0,value:"https://wallpaperaccess.com/full/2637581.jpg"},
//     {id:1,value:"https://source.unsplash.com/user/c_v_r/1900x800"},
//     {id:2,value:"https://source.unsplash.com/user/c_v_r/100x100"},
//   ]
//   const [wordData,setWordData]=useState(imgs[0])
//   const handleClick=(index)=>{
//     console.log(index)
//     const wordSlider=imgs[index];
//     setWordData(wordSlider)
//   }
//   return (
//     <div className="main">
//       <img src={wordData.value} height="300" width="500" /> 
//       <div className='flex_row'>
//         {imgs.map((data,i)=>
//         <div className="thumbnail" key={i} >
//           <img className={wordData.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
//         </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ImageSlider;



