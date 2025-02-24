import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
`;

export const HeaderHome = styled.header`
  width: 100%;

  .slick-arrow {
    display: none !important;
  }

  .slick-dots {
    bottom: 15px !important;

    button:before {
      opacity: 1 !important;
      color: #fff !important;
      font-size: 10px !important;

      &:hover {
        color: #eaeaea !important;
      }
    }

    .slick-active button:before {
      opacity: 1 !important;
      color: #fa7436 !important;
      font-size: 14px !important;
    }
  }
`;

export const HeaderContent = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LayerBackgoundImage = styled.div`
  height: 100%;
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #00000082, #00000038);
    z-index: 1;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

export const LayerHeaderContent = styled.div`
  position: absolute;
  z-index: 10;
  max-width: 500px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
  color: #fff;

  h2 {
    font-family: "EB Garamond";
    font-size: 3rem;
    span {
      color: #fa7436;
    }
  }

  p {
    font-size: 1rem;
    font-family: "Roboto";
  }

  a {
    display: flex;
    border-radius: 6px;
    background-color: #fa7436;
    color: #fff;
    text-decoration: none;
    font-family: "Roboto";
    padding: 12px 26px;
    align-items: center;
    gap: 4px;

    &:hover {
      background-color: #e96224;
    }

    svg {
      font-size: 1.6rem;
    }
  }
`;

export const ProgramsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const TitlesOfPrograms = styled.div`
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  h3 {
    font-size: 2.2rem;
  }

  span {
    font-size: 1.2rem;
    line-height: 2rem;
    color: #626262;
    font-family: "Roboto";
  }
`;

export const ProgramsCarousel = styled.div`
  width: 100%;
  margin-top: 2rem;

  .slick-arrow {
    color: #999999;
    border: 1px solid #999999 !important;
    width: 50px !important;
    height: 50px !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background-color: #fff !important;

    &:hover {
      background-color: #fa7436 !important;
      border: 1px solid #fa7436 !important;
      svg {
        fill: #fff;
      }
    }

    &.slick-next {
      right: 2rem !important;
      background-color: #fa7436 !important;
      border: 1px solid #fa7436 !important;
      svg {
        fill: #fff;
      }
    }

    &.slick-prev {
      right: 6rem !important;
      left: auto !important;
    }

    &.slick-prev:hover ~ .slick-next {
      background-color: #fff !important;
      border: 1px solid #999999 !important;
      svg {
        fill: #999999 !important;
      }
    }

    svg {
      font-size: 1rem;
      width: 22px;
      height: 22px;
      fill: #999999;
    }

    &::before {
      display: none;
    }

    &.slick-prev,
    &.slick-next {
      font-size: 0;
      line-height: 0;
      position: absolute;
      top: -1rem !important;
      display: block;
      width: 20px;
      height: 20px;
      padding: 0;
      transform: translate(0, -50%);
      cursor: pointer;
      color: transparent;
      border: none;
      outline: none;
    }
  }
`;

export const CardProgramsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;

  ._content {
    background-color: #fff;
    width: 90%;
    max-width: 260px;
    border-radius: 1rem;
    height: max-content;
    display: flex;
    padding: 0.7rem;
    flex-direction: column;
    text-decoration: none;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    gap: 0.5rem;
    padding-bottom: 1rem;

    &:hover {
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.399);
      transition: all 0.25s ease-in-out;
    }

    img {
      width: 100%;
      height: 153px;
      object-fit: cover;
      border-radius: 1rem;
    }

    span {
      font-size: 1.3rem;
      color: #000;
      font-family: "EB Garamond";
    }

    ._line_desarrow {
      font-size: 1rem;
      color: #626262;
      font-family: "Roboto";
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      ._box_arrow {
        border-radius: 50%;
        min-width: 32px;
        width: 32px;
        height: 32px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #fa7436;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);

        svg {
          color: #fa7436;
        }
      }
    }
  }
`;

export const ToursSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ToursCards = styled.div`
  justify-content: space-evenly;
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export const CardTour = styled.div`
  position: relative;
  height: 300px;
  max-width: 400px;
  border-radius: 6px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const LayerCardTour = styled.div`
  background: linear-gradient(to bottom, #0000009b, #00000067);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  padding: 3rem;
  gap: 1rem;

  &:hover {
    background: linear-gradient(to bottom, #00000053, #00000037);
  }

  span {
    font-size: 2rem;
  }

  p {
    font-size: 1.3rem;
  }

  a {
    background-color: #71c563;
    color: #fff;
    text-decoration: none;
    font-family: "Roboto";
    border-radius: 6px;
    padding: 10px 16px;

    &.active {
      background-color: #fa7436;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const ServicesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ContentServices = styled.div`
  display: flex;
`;

export const CenterServices = styled.div`
  padding: 2rem;
  min-width: 250px;
  min-height: 400px;

  .inside {
    width: 100%;
    height: 100%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    padding: 2px;
    padding-bottom: 0;
    background: linear-gradient(to bottom, #fa7436, #c2b4ae);
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      background-color: #fff;
      width: 100%;
      height: 5px;
      left: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      border: 8px solid #fff;
    }
  }
`;

export const RightServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  text-align: start;
`;

export const LeftServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  text-align: end;
`;

export const CardService = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: #000;
    font-family: "Roboto";
    font-size: 1rem;
  }

  p {
    font-family: "Roboto";
    color: #b5b5b5;
    font-size: 0.9rem;
    text-align: start;
  }
`;

export const AirTicketsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  position: relative;
`;
export const LayerAirTicketsBackgoundImage = styled.div`
 height: 100%;
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #00000082, #00000038);
    z-index: 1;
  }
img {
    width: 100%;
    object-fit: cover;
    height: 100%;
`;
export const LayerAirTicketsContent = styled.div`
 

  position: absolute;
  padding:2rem;
  z-index: 10;
  max-width: 500px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
  color: #fff;

  h2 {
    font-family: "EB Garamond";
    font-size: 3rem;
    
 
  }
  span {
      color: #fa7436;
    }
  p {
 
    font-size: 2.8rem;
    font-family: "EB Garamond";
  }

  a {
    display: flex;
    border-radius: 6px;
    background-color: #fa7436;
    color: #fff;
    text-decoration: none;
    font-family: "Roboto";
    padding: 12px 26px;
    align-items: center;
    gap: 4px;

    &:hover {
      background-color: #e96224;
    }

`;

export const WhyUsSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
`;

export const LeftSideWhyUs = styled.div`
  position: relative;
  z-index: 10;
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 2rem;
    font-weight: 700;
  }

  span {
    font-family: "Roboto";
    color: #626262;
    line-height: 2rem;
    font-size: 1rem;
  }

  img {
    border-radius: 1.2rem;
  }
`;

export const RightSideWhyus = styled.div`
  position: relative;
  z-index: 10;
  width: 40%;
  display: grid;
  gap: 1rem;
  padding-top: 5rem;
  grid-template-columns: repeat(2, 1fr);
`;

export const CardOverview = styled.div`
  min-width: 48%;
  min-height: 40%;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 2rem;
  gap: 0.5rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
  }

  span {
    font-size: 1.6rem;
    font-weight: 700;
  }

  p {
    color: #b5b5b5;
    font-family: "Roboto";
    line-height: 1.6rem;
  }
`;

export const WhyusMountain = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    opacity: 0.1;
    transform: translateX(-25%) scale(1.8);
  }
`;
export const NewsAndBlogsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const BlosCards = styled.div`
  justify-content: space-evenly;
  display: flex;
  width: 100%;
  gap: 1rem;
`;
export const CardBlog = styled.div`
  position: relative;
  height: 300px;
  max-width: 400px;
  border-radius: 6px;
  overflow: hidden;
  padding: 2rem;
  background: #882121;
  /* flex-direction: column; */

  img {
    width: 100%;
    height: 100%;
  }
`;

export const LayerCardBlogs = styled.div`
  background: linear-gradient(to bottom, #0000009b, #00000067);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  padding: 3rem;
  gap: 1rem;

  &:hover {
    background: linear-gradient(to bottom, #00000053, #00000037);
  }

  h3 {
    font-size: 2.2rem;
    font-family: "EB Garamond";
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
    font-family: "Roboto";
  }
  p {
    font-size: 1rem;
    font-family: "Roboto";
    color: #b5b5b5;
  }

  a {
    /* background-color: #71c563; */
    color: #6a6a6a;
    text-decoration: none;
    font-family: "Roboto";
    padding: 10px 16px;

    &:hover {
      opacity: 0.9;
    }
  }
`;
