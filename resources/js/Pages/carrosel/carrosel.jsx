import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';


 
import nikeLogo from '../img/nike.jpg';
import adidasLogo from '../img/adidas.jpg';
import mizunoLogo from '../img/mizuno.png';
import pumaLogo from '../img/puma.jpg';
import vansLogo from '../img/vans.jpg';
function carrosel() {
    return (
        <div className="flex justify-center items-center bg-zinc-950 mt-10 w-full py-1"> 
            <Swiper
            slidesPerView={4}
            spaceBetween={0}  
            navigation={true}  
            modules={[Navigation]}  
            className=" w-full max-w-4xl"  
            >
              <SwiperSlide>
                <img src={adidasLogo} alt="Adidas" className='w-24 h-24 rounded-full mx-auto ' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={nikeLogo} alt="Nike" className='w-24 h-24 rounded-full mx-auto' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mizunoLogo} alt="Mizuno" className='w-24 h-24 rounded-full mx-auto' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={pumaLogo} alt="Puma" className='w-24 h-24 rounded-full mx-auto' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={vansLogo} alt="Vans" className='w-24 h-24 rounded-full mx-auto' />
              </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default carrosel;
