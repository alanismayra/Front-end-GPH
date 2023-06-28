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

import Imagem1 from '/images/energiasolar.png'
import Imagem2 from '/images/energia geotermica.jpg'
import Imagem3 from '/images/energia hidraulica.png'
import Imagem4 from '/images/energia maremotriz.jpg'

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
                    <img  src={Imagem3} />
                </SwiperSlide>

               
                <SwiperSlide>
                    <img src={Imagem4} />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel