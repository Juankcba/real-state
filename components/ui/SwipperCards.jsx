import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image } from '@nextui-org/react';

export const SwipperCards = () => {

    return (
        <div className="swiper-container">
            <Swiper

                speed={500}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                slidesPerView={1.5}
                spaceBetween={40}
                centeredSlides={true}
                centerInsufficientSlides={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

                className="swiper-wrapper"
            >
                <SwiperSlide className="swiper-slide">
                    <Image src={"/assets/img/img-large-1.png"} alt="img-1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Image src={"/assets/img/img-large-1.png"} alt="img-2" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Image src={"/assets/img/img-large-1.png"} alt="img-3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

