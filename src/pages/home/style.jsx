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
