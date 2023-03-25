import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.css';
import { Navigation } from "swiper";
import { NavLink } from 'react-router-dom';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

function Hero() {
    const images = ['slider-image-1.webp', 'slider-image-2.webp', 'slider-image-3.webp', 'slider-image-4.webp', 'slider-image-5.jpeg'];
    const recipes = [
        { name: 'Recipes', path: '/recipes' },
    ];

    return (
        <div className="heroSlider">
            <div className="swiper-button-prev swiper-arrow">
                <img src={process.env.PUBLIC_URL + '/slider/arrow-prev.svg'} alt='prev' />
            </div>
            <div className="swiper-button-next swiper-arrow">
                <img src={process.env.PUBLIC_URL + '/slider/arrow-next.svg'} alt='next' />
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                    disabledClass: "swiper-button-disabled"
                }}
                modules={[Navigation]}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={process.env.PUBLIC_URL + '/slider/' + image} alt={'Slide ' + (index + 1)} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="overlayCta">
                <div className="overlayContent">
                <h1>Your companion for hassle-free meal planning.</h1>
                <NavLink to={recipes[0].path}>
                    <ButtonUnstyled>
                        Browse recipes
                    </ButtonUnstyled>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Hero;