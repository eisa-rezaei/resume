import React, { useEffect, useState } from "react";

import { projects } from "../../../../data/data";

import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import {
  StyledHomeLastestProject,
  StyledHomeLastestProjectCt,
  StyledHomeLastestProjectSingleProject,
  StyledHomeLastestProjectSingleProjectFooter,
  StyledSingleProjectFooterInfo,
} from "./styles";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

SwiperCore.use([Pagination, EffectCoverflow, Navigation, Autoplay]);

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const [size, setSize] = useState(window.innerWidth < 600);

  const checkSize = () => {
    setSize(window.innerWidth < 600);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);

  return (
    <StyledHomeLastestProjectCt>
      <h2>My lastest Projects</h2>
      <StyledHomeLastestProject>
        <Swiper
          // spaceBetween={20}
          // a11y
          // effect
          pagination={{
            type: "bullets",
          }}
          // navigation
          // grabCursor
          centeredSlides
          // coverflowEffect={{
          //   rotate: 50,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: true,
          // }}
          loop
          autoplay={{
            delay: 2000,
          }}
          slidesPerView={size ? 1.5 : 3}
          // scrollbar={{ draggable: true }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          // onSwiper={(swiper) => console.log(swiper.activeIndex)}
          effect="coverflow"
        >
          {projects.map(({ id, name, image, platform, output, src }, index) => (
            <SwiperSlide key={id}>
              <StyledHomeLastestProjectSingleProject>
                <a
                  href={output}
                  className={activeSlide === index ? `active-slide` : null}
                >
                  <img src={image} alt={name} />
                </a>
                <StyledHomeLastestProjectSingleProjectFooter
                  className={
                    activeSlide === index ? `active-slide-footer` : null
                  }
                >
                  <StyledSingleProjectFooterInfo>
                    <p>{name}</p>
                    <p>{platform}</p>
                  </StyledSingleProjectFooterInfo>
                  <span>
                    <a href={src}>
                      <FaGithub />
                    </a>
                    <a href={output}>
                      <BiLinkExternal />
                    </a>
                  </span>
                </StyledHomeLastestProjectSingleProjectFooter>
              </StyledHomeLastestProjectSingleProject>
            </SwiperSlide>
          ))}
          <div className="pagenation"></div>
        </Swiper>
      </StyledHomeLastestProject>
    </StyledHomeLastestProjectCt>
  );
};

export default Index;
