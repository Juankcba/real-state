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
                    <Image src={"/assets/img/4dfa5707f08b251faeb31458055e1075-uncropped_scaled_within_1536_1152.webp"} alt="img-1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Image src={"/assets/img/79da7278d2466f3e7e976c1b4e97c3d4-uncropped_scaled_within_1536_1152.webp"} alt="img-2" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Image src={"/assets/img/4193ad6d59eaedf63e3a8fc6043476e3-uncropped_scaled_within_1536_1152.webp"} alt="img-3" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Image src={"/assets/img/7467a98cdb5ae22c232440f57ccbabf0-uncropped_scaled_within_1536_1152.webp"} alt="img-3" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Image src={"/assets/img/b858fbd6db9fd24886cce9dba4ac993f-uncropped_scaled_within_1536_1152.webp"} alt="img-3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

