import { ReactNode } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

interface SliderProps {
  children: ReactNode;
}

export function Slider({ children }: SliderProps) {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {children}
    </Swiper>
  )
}