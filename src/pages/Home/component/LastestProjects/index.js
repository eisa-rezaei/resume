import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import { projects } from "../../../../data/data";
import {
  StyledHomeLastestProject,
  StyledHomeLastestProjectCt,
  StyledHomeLastestProjectSingleProject,
  StyledHomeLastestProjectSingleProjectFooter,
  StyledSingleProjectFooterInfo,
} from "./styles";

SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);

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
          pagination
          centeredSlides
          loop
          autoplay={{
            delay: 2000,
          }}
          slidesPerView={size ? 1.5 : 3}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          effect="coverflow"
        >
          {projects.map(({ id, name, image, platform, output, src }, index) => (
            <SwiperSlide key={id}>
              <StyledHomeLastestProjectSingleProject>
                <a
                  href={output}
                  className={activeSlide === index ? `active-slide` : null}
                  target="_blank"
                  rel="noreferrer"
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
                    <a href={src} target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>
                    <a href={output} target="_blank" rel="noreferrer">
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
