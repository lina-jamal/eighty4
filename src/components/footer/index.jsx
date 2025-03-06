import React from "react";
import { FooterContent, FooterEnd, FooterSection, LogoBox, Wrapper } from "./style";
import logo from "../../assets/icons/logo.png";

function Footer() {
  return (
    <Wrapper>
      <FooterSection>
        <FooterContent>
        <LogoBox>
        <img src={logo} alt="logo-Eighty4" />
          <span>Eighty4</span>
          </LogoBox>
          <p>
            Explore majestic Sri Lanka with our epic travel packages, from
            bustling cities to breathtaking beaches and landscapes!
          </p>
        </FooterContent>{" "}
        <FooterContent>
          <span>Hours Work</span>
          <p>
            Monday - Friday <br />
            9am - 5pm
          </p>
        </FooterContent>{" "}
        <FooterContent>
          <span>Location</span>
          <p>
            Corporate Office:
            <br /> 310, Deans Road,
            <br /> Colombo 01000, Sri Lanka
            <br />
            <br />
            Reg. Office:
            <br /> 60, Mosque Road,
            <br /> Beruwala 12070, Sri Lanka
          </p>
        </FooterContent>{" "}
        <FooterContent>
          <span>Contact Info</span>
          <p>
            hi@eighty4.global <br />
            +94 7779 79601 <br />
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#D9D9D9" fill-opacity="0.24"/>
<path d="M14.4999 13.1158C13.1843 13.1158 12.1157 14.1844 12.1157 15.5C12.1157 16.8156 13.1843 17.8868 14.4999 17.8868C15.8155 17.8868 16.8867 16.8156 16.8867 15.5C16.8867 14.1844 15.8155 13.1158 14.4999 13.1158Z" fill="white"/>
<path d="M18.0984 9H10.9016C9.3026 9 8 10.3026 8 11.9016V19.0984C8 20.7 9.3026 22 10.9016 22H18.0984C19.7 22 21 20.7 21 19.0984V11.9016C21 10.3026 19.7 9 18.0984 9ZM14.5 19.712C12.1782 19.712 10.288 17.8218 10.288 15.5C10.288 13.1782 12.1782 11.2906 14.5 11.2906C16.8218 11.2906 18.712 13.1782 18.712 15.5C18.712 17.8218 16.8218 19.712 14.5 19.712ZM18.8004 12.055C18.309 12.055 17.9086 11.6572 17.9086 11.1658C17.9086 10.6744 18.309 10.274 18.8004 10.274C19.2918 10.274 19.6922 10.6744 19.6922 11.1658C19.6922 11.6572 19.2918 12.055 18.8004 12.055Z" fill="white"/>
</svg>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#D9D9D9" fill-opacity="0.24"/>
<path d="M12.9524 16.3379H11.3417C11.0814 16.3379 11 16.2403 11 15.9962V14.0275C11 13.7672 11.0976 13.6859 11.3417 13.6859H12.9524V12.2541C12.9524 11.6033 13.0663 10.985 13.3917 10.4155C13.7334 9.82979 14.2215 9.4393 14.8398 9.21151C15.2466 9.06508 15.6533 9 16.0926 9H17.6871C17.9149 9 18.0125 9.09762 18.0125 9.32541V11.1802C18.0125 11.408 17.9149 11.5056 17.6871 11.5056C17.2478 11.5056 16.8085 11.5056 16.3692 11.5219C15.9299 11.5219 15.7021 11.7334 15.7021 12.189C15.6859 12.6771 15.7021 13.1489 15.7021 13.6533H17.5895C17.8498 13.6533 17.9474 13.7509 17.9474 14.0113V15.98C17.9474 16.2403 17.8661 16.3217 17.5895 16.3217H15.7021V21.6258C15.7021 21.9024 15.6208 22 15.3279 22H13.2941C13.0501 22 12.9524 21.9024 12.9524 21.6583V16.3379Z" fill="white"/>
</svg>


          </p>
        </FooterContent>
      

      </FooterSection>
      <hr/>
      <FooterEnd>
     

        <p>Copyright @ Eighty4 2024. All Rights Reserved.</p>
      </FooterEnd>
    </Wrapper>
  );
}

export default Footer;
