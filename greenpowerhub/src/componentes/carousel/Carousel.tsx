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

import Imagem1 from '/images/Energia Biomassa.png'
import Imagem2 from '/images/Energia Geotérmica.png'
import Imagem3 from '/images/Energia Hidraúlica.png'
import Imagem4 from '/images/Energia maremotriz.jpg'
import Imagem5 from '/images/Energia eolica.png'
import Imagem6 from '/images/Energia solar.jpg'

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

            </Swiper>
        </>
    )
}

export default Carrossel