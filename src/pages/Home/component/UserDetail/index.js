import React from "react";
import userImage from "../../../../assets/projects/user-image.png";
import {
  StyledHomeUserDetail,
  StyledHomeUserDetailSinglePart,
  StyledHomeUserDetailSinglePartDetail,
} from "./styles";

const index = () => {
  return (
    <StyledHomeUserDetail>
      <StyledHomeUserDetailSinglePart>
        <span>
          <img src={userImage} alt="eisa_rezaei" />
        </span>
        <StyledHomeUserDetailSinglePartDetail>
          <h5>BIOGRAPHY</h5>
          <p>
            I am jesus, A frontend technologies curios person who is trying
            every new library a day after release.
          </p>
        </StyledHomeUserDetailSinglePartDetail>
        <StyledHomeUserDetailSinglePartDetail>
          <h5>CONTACT</h5>
          <p>
            ARDABIL, IRAN <br />
            eisa.eisa.r.r@gmail.com <br />
            +98 930 961 3322
          </p>
        </StyledHomeUserDetailSinglePartDetail>
        <StyledHomeUserDetailSinglePartDetail>
          <h5>SERVICES</h5>
          <p>
            website Design and Develop <br />
            React web Applications <br />
            Working as a team
          </p>
        </StyledHomeUserDetailSinglePartDetail>
      </StyledHomeUserDetailSinglePart>
      <span>
        <img src={userImage} alt="eisa_rezaei" />
      </span>
      <StyledHomeUserDetailSinglePart>
        <StyledHomeUserDetailSinglePartDetail
          align="flex-end"
          psize="2rem"
          textalign="right"
        >
          <h5>years of Experience</h5>
          <p>3</p>
        </StyledHomeUserDetailSinglePartDetail>
        <StyledHomeUserDetailSinglePartDetail
          align="flex-end"
          psize="2rem"
          textalign="right"
        >
          <h5>SATISFITATION CLIENTS</h5>
          <p>100%</p>
        </StyledHomeUserDetailSinglePartDetail>
        <StyledHomeUserDetailSinglePartDetail
          align="flex-end"
          psize="2rem"
          textalign="right"
        >
          <h5>CLIENTS ON WORLDWIDE</h5>
          <p>+10</p>
        </StyledHomeUserDetailSinglePartDetail>
        <StyledHomeUserDetailSinglePartDetail
          align="flex-end"
          psize="2rem"
          textalign="right"
        >
          <h5>PROJECTS DONE </h5>
          <p>10</p>
        </StyledHomeUserDetailSinglePartDetail>
      </StyledHomeUserDetailSinglePart>
    </StyledHomeUserDetail>
  );
};

export default index;
