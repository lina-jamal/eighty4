import React from "react";
import {
  CardProgramsContainer,
  HeaderContent,
  HeaderHome,
  LayerBackgoundImage,
  LayerHeaderContent,
  ProgramsCarousel,
  ProgramsSection,
  TitlesOfPrograms,
  Wrapper,
} from "./style";
import { MdArrowOutward } from "react-icons/md";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const ContentHeaderComponent = () => {
  return (
    <HeaderContent>
      <LayerBackgoundImage>
        <img src="/files/header_home_s1.png" alt="" />
      </LayerBackgoundImage>

      <LayerHeaderContent>
        <h2>
          Get started your exciting <span>journey</span> with us.
        </h2>
        <p>
          Explore majestic Sri Lanka with our epic travel packages, from
          bustling cities to breathtaking beaches and landscapes!
        </p>
        <a target="_blank" href="/">
          Book Now
          <MdArrowOutward />
        </a>
      </LayerHeaderContent>
    </HeaderContent>
  );
};

const CardPrograms = ({ data }) => {
  const { cover, description, link, title } = data;

  return (
    <CardProgramsContainer>
      <Link to={link} className="_content">
        <img src={cover} alt="" />

        <span>{title}</span>

        <div className="_line_desarrow">
          <p>{description}</p>

          <div className="_box_arrow">
            <MdArrowOutward />
          </div>
        </div>
      </Link>
    </CardProgramsContainer>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <FaArrowRightLong />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <FaArrowLeftLong />
    </div>
  );
}

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 200000,
  };

  const settingsPrograms = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    speed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const programs = [
    {
      id: "1",
      title: "Sun-kissed beaches & Misty mountains",
      description: "Experience beautiful beaches & explore misty mountains.",
      link: "/",
      cover: "/files/program_1.png",
    },
    {
      id: "2",
      title: "Wilderness Odyssey and a Historic delight",
      description: "Experience beautiful beaches & explore misty mountains.",
      link: "/",
      cover: "/files/program_2.png",
    },
    {
      id: "3",
      title: "Wilderness Odyssey and a Historic delight",
      description: "Experience beautiful beaches & explore misty mountains.",
      link: "/",
      cover: "/files/program_3.png",
    },
    {
      id: "4",
      title: "Wilderness Odyssey and a Historic delight",
      description: "Experience beautiful beaches & explore misty mountains.",
      link: "/",
      cover: "/files/program_4.png",
    },
    {
      id: "5",
      title: "Sun-kissed beaches & Misty mountains",
      description: "Experience beautiful beaches & explore misty mountains.",
      link: "/",
      cover: "/files/program_5.png",
    },
    {
      id: "6",
      title: "Wilderness Odyssey and a Historic delight",
      description: "Experience beautiful beaches & explore misty mountains.",
      link: "/",
      cover: "/files/program_4.png",
    },
    {
      id: "7",
      title: "Sun-kissed beaches & Misty mountains",
      description: "Experience beautiful beaches & explore misty mountains.",
      link: "/",
      cover: "/files/program_3.png",
    },
  ];

  return (
    <Wrapper>
      <HeaderHome>
        <Slider {...settings}>
          <ContentHeaderComponent />
          <ContentHeaderComponent />
          <ContentHeaderComponent />
        </Slider>
      </HeaderHome>

      <ProgramsSection>
        <TitlesOfPrograms>
          <h3>Our Popular Tours Programs</h3>
          <span>
            Explore majestic Sri Lanka with our epic travel packages, from
            bustling cities to breathtaking beaches.
          </span>
        </TitlesOfPrograms>

        <ProgramsCarousel>
          <Slider {...settingsPrograms}>
            {programs?.map((item) => (
              <CardPrograms data={item} key={item?.id} />
            ))}
          </Slider>
        </ProgramsCarousel>
      </ProgramsSection>
    </Wrapper>
  );
}

export default HomePage;
