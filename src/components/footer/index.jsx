import React from "react";
import {
  BoxMail,
  ContactsLines,
  ContentMail,
  FooterContent,
  FooterEnd,
  FooterSection,
  LogoBox,
  SocialMedia,
  Wrapper,
} from "./style";
import logo from "../../assets/icons/logo.png";

function Footer() {
  return (
    <Wrapper>
      <BoxMail>
        <ContentMail>
          <br />
          dikv dfhdfh
          <br />
          .pdfhdfh
          <br />
          <p>
            dfhdfh
            <br />
          </p>
        </ContentMail>
      </BoxMail>
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
        </FooterContent>

        <FooterContent>
          <span>Work Hours & Days</span>

          <div>
            <p> Monday - Friday</p>
            <p>9am - 5pm</p>
          </div>
        </FooterContent>

        <FooterContent>
          <span>Location</span>

          <div>
            <p>Corporate Office:</p>
            <p>310, Deans Road,</p>
            <p>Colombo 01000, Sri Lanka</p>
            <br />
            <p>Reg. Office:</p>
            <p>60, Mosque Road,</p>
            <p>Beruwala 12070, Sri Lanka</p>
          </div>
        </FooterContent>

        <FooterContent>
          <span>Contact Info</span>

          <ContactsLines>
            <a href="mailto:hi@eighty4.global">hi@eighty4.global</a>
            <a href="tel:+94 7779 79601">+94 7779 79601</a>
          </ContactsLines>

          <SocialMedia>
            <a href="/">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0984 0H2.9016C1.3026 0 0 1.3026 0 2.9016V10.0984C0 11.7 1.3026 13 2.9016 13H10.0984C11.7 13 13 11.7 13 10.0984V2.9016C13 1.3026 11.7 0 10.0984 0ZM6.5 10.712C4.1782 10.712 2.288 8.8218 2.288 6.5C2.288 4.1782 4.1782 2.2906 6.5 2.2906C8.8218 2.2906 10.712 4.1782 10.712 6.5C10.712 8.8218 8.8218 10.712 6.5 10.712ZM10.8004 3.055C10.309 3.055 9.9086 2.6572 9.9086 2.1658C9.9086 1.6744 10.309 1.274 10.8004 1.274C11.2918 1.274 11.6922 1.6744 11.6922 2.1658C11.6922 2.6572 11.2918 3.055 10.8004 3.055Z"
                  fill="white"
                />
              </svg>
            </a>

            <a href="/">
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.95244 7.33792H0.341677C0.0813517 7.33792 0 7.2403 0 6.99625V5.02753C0 4.76721 0.0976221 4.68586 0.341677 4.68586H1.95244V3.25407C1.95244 2.60325 2.06633 1.98498 2.39174 1.41552C2.73342 0.829787 3.22153 0.439299 3.8398 0.211514C4.24656 0.0650812 4.65332 0 5.09262 0H6.68711C6.91489 0 7.01251 0.097622 7.01251 0.325407V2.18023C7.01251 2.40801 6.91489 2.50563 6.68711 2.50563C6.24781 2.50563 5.80851 2.50563 5.36921 2.5219C4.92991 2.5219 4.70213 2.73342 4.70213 3.18899C4.68586 3.6771 4.70213 4.14894 4.70213 4.65332H6.58949C6.84981 4.65332 6.94743 4.75094 6.94743 5.01126V6.97998C6.94743 7.2403 6.86608 7.32165 6.58949 7.32165H4.70213V12.6258C4.70213 12.9024 4.62078 13 4.32791 13H2.29412C2.05006 13 1.95244 12.9024 1.95244 12.6583V7.33792Z"
                  fill="white"
                />
              </svg>
            </a>
          </SocialMedia>
        </FooterContent>
      </FooterSection>

      <FooterEnd>
        <p>Copyright @ Eighty4 2024. All Rights Reserved.</p>
      </FooterEnd>
    </Wrapper>
  );
}

export default Footer;
