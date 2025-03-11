import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 2.6rem 1.3rem;
  width: 100%;
  min-height: 40vh;
  margin: 0 auto;
  background: #1d231f;
  align-items: center;
  gap: 1rem;
  position: relative;
  margin-top: 5rem;
`;

export const BoxMail = styled.div`
  position: absolute;
  width: 80%;
  max-width: 600px;
  top: 0;
  transform: translateY(-50%);
`;

export const ContentMail = styled.div`
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  border: 1px solid #dedede96;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: space-around;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 20%;
  gap: 2rem;
  min-width: 200px;
  padding-bottom: 1rem;

  span {
    font-size: 1.4rem;
    color: #ffffff;
    font-family: "EB Garamond";
  }

  p {
    font-size: 0.7rem;
    line-height: 1.2rem;
    font-weight: 400;
    color: #ffffffcc;
    font-family: "Roboto";

    &:hover {
      color: #ffffff;
    }
  }
`;

export const ContactsLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    font-family: "Roboto";
    color: #ffffff;
    font-size: 0.7rem;
    text-decoration: none;

    &:hover {
      color: #ffffff;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 0.5rem;

  a {
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #d9d9d93b;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #fa7436;
      transition: all 0.25s ease-in-out;
    }
  }
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 43px;
    height: 50px;
    margin: 0 0.5em;
  }
`;
export const FooterEnd = styled.div`
  width: 70%;
  padding: 1rem;
  border-top: 1px solid #eeeeee52;
  text-align: center;

  p {
    font-family: "Roboto";
    color: #ffffffd5;
    font-weight: 100;
    font-size: 0.7rem;
  }
`;
