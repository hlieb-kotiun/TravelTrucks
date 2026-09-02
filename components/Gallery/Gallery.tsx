import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Gallery.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { CamperImage } from "@/types/types";

interface GalleryProps {
  gallery: CamperImage[];
}

export default function Gallery({ gallery }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const swiperStyles = {
    "--swiper-navigation-color": "transparent",
    "--swiper-pagination-color": "transparent",
  } as React.CSSProperties;

  return (
    <div className="swiperContainer">
      <Swiper
        style={swiperStyles}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {gallery.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img src={item.original} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={32}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {gallery.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img src={item.thumb} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
