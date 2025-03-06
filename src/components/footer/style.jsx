import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 2.6rem 1.3rem;
  width: 100%;
  height: 40vh;
  margin: 0 auto;
  background: #1d231f;
  align-items: center;
  gap: 1rem;
  hr {
    width: 70%;
    /* height: .011px; */
    /* border-top: 1px solid #ccc; */
    /* margin: 1em 0; */
    padding: 0;
  }
`;
export const FooterSection = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: space-around;
`;
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 20%;
  color: #ffffff;
  gap: 1rem;

  span {
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 400;
    font-family: "EB Garamond";
  }
  p {
    font-size: 0.8rem;
    line-height: 1.5rem;
    font-weight: 300;
    font-family: "Roboto";
  }
  svg {
    margin: 0.2em;
  }
`;
export const LogoBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background: red; */

  img {
    width: 43px;
    height: 50px;
    margin: 0 0.5em;
  }
`;
export const FooterEnd = styled.div`
  font-size: 0.7rem;
  color: #ffffff;
  font-weight: 100;
  font-family: "Roboto";
`;
