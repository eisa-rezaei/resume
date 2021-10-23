import React, { useState } from "react";

import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";

import { projects } from "../../../../data/data";
import { StyledHomeLastestProject, StyledHomeLastestProjectCt } from "./styles";
import { useSizeCheckker } from "../../Hooks/SizeCheckker";
import SliceProject from "./SlideProject";

SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const isPcScreen = useSizeCheckker();

  return (
    <StyledHomeLastestProjectCt id="LastestProjects">
      <h2>My lastest Projects</h2>
      <StyledHomeLastestProject>
        <Swiper
          pagination
          centeredSlides
          loop
          autoplay={{
            delay: 2000,
          }}
          slidesPerView={isPcScreen ? 3 : 1.5}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          effect="coverflow"
        >
          {projects.map((item, index) => (
            <SwiperSlide key={item.id}>
              <SliceProject index={index} {...item} activeSlide={activeSlide} />
            </SwiperSlide>
          ))}
          <div className="pagenation"></div>
        </Swiper>
      </StyledHomeLastestProject>
    </StyledHomeLastestProjectCt>
  );
};

export default Index;
