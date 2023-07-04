// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carousel.css";

// Importanto Componentes do Swiper
import { Autoplay, Pagination, Navigation } from 'swiper';

import Imagem1 from '/images/img1.jpeg'
import Imagem2 from '/images/img2.jpeg'
import Imagem3 from '/images/img3.jpeg'
import Imagem4 from '/images/img4.jpeg'
import Imagem5 from '/images/Maremotriz.jpeg'
import Imagem6 from '/images/img6.jpeg'
import Imagem7 from '/images/Solar.jpg'
import Imagem8 from '/images/Solar2.jpg'

function Carrossel() {
    return (
        <>

            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src={Imagem1} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Imagem2} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Imagem3} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Imagem4} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Imagem5} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Imagem6} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Imagem7} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Imagem8} />
                </SwiperSlide>


            </Swiper>
        </>
    )
}

export default Carrossel