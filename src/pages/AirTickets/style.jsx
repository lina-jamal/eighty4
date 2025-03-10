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
  /* flex-direction: column; */
  align-items: center;

  gap: 1rem;
`;
export const ContactOfAirTicket = styled.div`
  width: 50%;
  /* max-width: 500px; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  gap: 2rem;

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
  /* width: 50%; */
  width: 500px;
  height: 300px;
`;
export const AirTicketBackground = styled.div`
  //   position: absolute;
  //   /* z-index: 1; */
  //   /* top: 0; */
  //   right: 0;
  //   /* width: 100%;
  //   height: 100%; */

  //   img {
  //     width: max-content;
  //     /* height: 100%; */
  //     opacity: 0.1;
  //     transform: translateX(-25%) translateY(20%) scale(1.8);
  //   }
`;
export const AirTicketContactUs = styled.div`
  display: flex;
  gap: 2rem;
  /* justify-content: center; */
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
  color:#FFFFFF;

  /* justify-content: center; */

  h2{
    font-size: 2rem;
    font-family: "EB Garamond ";

  }
  p{
    font-family: "Roboto";
    font-size: 1rem;
    line-height: 1.6rem;
font-weight:300px;
  }
  span{
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
  background-color:
 #FFFFFF;
`