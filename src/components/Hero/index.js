import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Hero() {
    const images = ['slider-image-1.webp', 'slider-image-2.webp', 'slider-image-3.webp', 'slider-image-4.webp', 'slider-image-5.jpeg'];

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={process.env.PUBLIC_URL + '/slider/' + image} alt={'Slide ' + (index + 1)} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Hero;