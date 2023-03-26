import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.css';
import { Navigation } from "swiper";
import { NavLink } from 'react-router-dom';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

function Hero() {
    // Array of image file names to display in the slider - linked from public > slider folder
    const images = ['slider-image-1.webp', 'slider-image-2.webp', 'slider-image-3.webp', 'slider-image-4.webp', 'slider-image-5.jpeg'];

    // React Router - array of pages and url paths
    const recipes = [
        { name: 'Recipes', path: '/recipes' },
    ];

    return (
        // Main container for the hero slider section
        <div className="heroSlider">
            {/* Previous arrow button */}
            <div className="swiper-button-prev swiper-arrow">
                <img src={process.env.PUBLIC_URL + '/slider/arrow-prev.svg'} alt='prev' />
            </div>
            {/* Next arrow button */}
            <div className="swiper-button-next swiper-arrow">
                <img src={process.env.PUBLIC_URL + '/slider/arrow-next.svg'} alt='next' />
            </div>
            {/* Swiper component that displays the images in the slider */}
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                    disabledClass: "swiper-button-disabled"
                }}
                modules={[Navigation]}
            >
                {/* Map over the images array and create a SwiperSlide for each image */}
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={process.env.PUBLIC_URL + '/slider/' + image} alt={'Slide ' + (index + 1)} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Overlay with text and CTA button */}
            <div className="overlayCta">
                <div className="overlayContent">
                    {/* Main text for the hero slider section */}
                    <h1 className="overlayText">Your companion for hassle-free meal planning.</h1>
                    {/* Button that links to the Recipes page */}
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