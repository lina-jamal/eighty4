import styled from "styled-components";

export const Wrapper = styled.footer`
  background-color: #1D231F;
  height: 50vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;

  gap:2rem;
`;
export const FooterSection = styled.div`
display: flex;
gap:3rem;



`;
export const FooterContent = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
width: 20%;
color:#FFFFFF;
gap:1rem;

span {
   font-size: 1.4rem;
   line-height: 2rem;
   font-weight: 400;

    font-family: "EB Garamond"; 
  }
   p{

    font-size: .8rem;
   line-height: 1.5rem;
   font-weight: 300;
    font-family: "Roboto";
  } 

`;
export const FooterEnd = styled.div`
  font-size: .7rem;
color:#FFFFFF;
  
   font-weight: 300;
    font-family: "Roboto";
  
`;
