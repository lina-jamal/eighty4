import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  margin-top: 100px;
`;

export const AirTicketSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
  gap: 1rem;
`;

export const ContactOfAirTicket = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;

  h3 {
    font-size: 2.2rem;
    font-family: "EB Garamond ";
    line-height: 2rem;
  }

  span {
    font-size: 2rem;
    line-height: 2rem;
    color: #fa7436;
    font-family: "EB Garamond ";
  }

  p {
    font-family: "Roboto";
    color: #959595;
    font-size: 1.1rem;
    line-height: 2rem;
  }
`;
export const ImageOfAirTicket = styled.div`
  display: flex;
  width: 500px;
  min-height: 500px;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    position: absolute;

    &._plane {
      z-index: 10;
    }
    &._bg {
      z-index: 1;
    }
    &._borders {
      z-index: 0;
    }
  }
`;

export const AirTicketContactUs = styled.div`
  display: flex;
  gap: 2rem;
  align-items: end;
  background-color: #1d231f;

  svg {
    max-height: 150px;
  }
`;
export const AirTicketContactUsContant = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 60%;
  color: #ffffff;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-family: "EB Garamond ";
  }

  p {
    font-family: "Roboto";
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 300px;
  }
  span {
    font-size: 2rem;
    font-family: "EB Garamond ";
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
  }
`;
export const AirTicketLetsTalk = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  /* width: 60%; */

  h3 {
    font-size: 2rem;
    font-family: "EB Garamond ";
  }
  p {
    font-family: "Roboto";
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 300px;
  }
`;
