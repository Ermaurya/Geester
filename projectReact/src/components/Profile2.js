import Slider from "react-slick";
import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./carousel.css";
import { data2 } from "./data2";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import './Profile2.css';
// import Page from './Page';

export default function Profile2() {

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

                                        />
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Naveen-Katiyar.webp"
                                            className=" stu-image" alt=''
                                        />
                                    </div>
                                    <div className=" d-flex justify-center">
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Kaushal-Sorathiya.webp"
                                            style={{ marginTop: "-120px" }}
                                            className=" stu-image" alt=''
                                        />
                                    </div>
                                    <div className=" d-flex justify-between">
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp"
                                            style={{ marginTop: "-160px" }}
                                            className=" stu-image" alt=''
                                        />
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Nipun-Sinha.webp"
                                            style={{ marginLeft: "-60px" }}
                                            className=" stu-image" alt=''
                                        />
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Gajendra-Malviya.webp"
                                            style={{ marginTop: "-60px" }}
                                            className=" stu-image" alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="css-swipers">

                                <div className=" d-flex mt-5">
                                    <div className=" d-flex items-center">
                                        <img src="images/swiper-left.svg" className=" cursor-ptr" alt='' />
                                    </div>
                                    <div className=" testimonials-web-card">
                                        <Slider
                                            autoplay
                                            autoplaySpeed={2000}
                                            dots
                                            initialSlide={2}
                                            infinite
                                            // prevArrow={<PreviousBtn />}
                                            // nextArrow={<NextBtn />}
                                            customPaging={(i) => {
                                                return (
                                                    <div>

                                                        <img
                                                            src={data2[i]}
                                                            alt=""
                                                            style={{
                                                                width: "80px",
                                                                height: "80px",
                                                                objectFit: "cover",
                                                                borderRadius: "50%",
                                                                border: "2px solid black"
                                                            }}
                                                        />
                                                    </div>
                                                );
                                            }}
                                            dotsClass="testimonials-web-card"
                                        >
                                            
                                            <div className="card+companylogo">
                                             {data2.map((item) => (
                                                <>
                                                <div className="cardimage">
                                                    <img
                                                        src={item.image}
                                                        className=" image" alt=''
                                                        />
                                                </div>
                                                <div className=" name">{item.name}</div>
                                                <div className="">
                                                    <img
                                                        src={item.company}
                                                        className=" company" alt=''
                                                        />
                                                </div>
                                                        </>
                                                        ))}
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
                                                       {/* {item.review} */}
                                                    </p>
                                                    <p className=" read-more">Read More</p>
                                                </div>
                                            </div>
                                            
                                            
                                    </Slider>
                                    </div>
                                             
                                    <div className=" d-flex items-center">
                                        <img src="images/swiper-right.svg" className=" cursor-ptr" alt='' />
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
                                        />
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Prakhar-Agarwal.webp"
                                            style={{ marginTop: 40 }}
                                            className=" stu-image" alt=''
                                        />
                                    </div>
                                    <div className=" d-flex justify-center">
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Karri-Devi.webp"
                                            style={{ marginTop: "-120px" }}
                                            className=" stu-image" alt=''
                                        />
                                    </div>
                                    <div className=" d-flex justify-between">
                                        <img
                                            src="https://images.geekster.in/new-testimonial/Pawan-Kumar.webp"
                                            style={{ marginTop: "-120px" }}
                                            className=" stu-image" alt=''
                                        />
                                        <img
                                            src="https://images.geekster.in/placed/Vamsi-Krishna.webp"
                                            style={{ marginTop: "-60px" }}
                                            className=" stu-image" alt=''
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
                                    <img src="https://images.geekster.in/new-testimonial/Saurabh-Garg.webp" alt='' className="image" />
                                    <img src="https://images.geekster.in/new-testimonial/Naveen-Katiyar.webp" alt='' className="image" />
                                    <img src="https://images.geekster.in/new-testimonial/Kaushal-Sorathiya.webp" alt='' className="image" />
                                    <img src="https://images.geekster.in/new-testimonial/Sai-Pranav-Tunuguntla.webp" alt='' className="image" />
                                    <img src="https://images.geekster.in/new-testimonial/Nipun-Sinha.webp" alt='' className="image" />
                                </div>
                                <div className="">
                                    <img
                                        src="https://images.geekster.in/new-testimonial/Saurabh-Garg.webp"
                                        className=" active-image" alt=''
                                    />
                                </div>
                                <div className="d-flex">
                                    <img src="https://images.geekster.in/new-testimonial/Gajendra-Malviya.webp" alt='' className="image" />
                                    <img src="https://images.geekster.in/new-testimonial/Utkarsh-singh.webp" alt='' className="image" />
                                    <img src="https://images.geekster.in/new-testimonial/Prakhar-Agarwal.webp" alt='' className="image" />
                                    <img src="https://images.geekster.in/new-testimonial/Karri-Devi.webp" alt='' className="image" />
                                    <img src="https://images.geekster.in/placed/Vamsi-Krishna.webp" alt='' className="image" />
                                </div>
                            </div>


                            <div className=" testimonials-mobile-card">
                                <div className="">
                                    <div className=" name">Saurabh Garg</div>
                                    <div className="">
                                        <img
                                            src="https://images.geekster.in/hiring-partners/publicis-sapient.webp"
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
                                            Geeksters supportive team taught me advanced Java concepts,
                                            helped me with interview preparation, and provided various
                                            reading materials. Besides this, they brought many referrals
                                            until I got placed in a reputed company.
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


