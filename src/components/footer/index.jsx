import React from "react";
import { FooterContent, FooterEnd, FooterSection, Wrapper } from "./style";

function Footer() {
  return <Wrapper>
<FooterSection>
<FooterContent>
<span>Eighty4</span>
<p>Explore majestic Sri Lanka with our epic travel packages, from bustling cities to breathtaking beaches and landscapes!</p>

    </FooterContent> <FooterContent>
<span>Hours Work</span>
<p>
Monday - Friday <br />
9am - 5pm
</p>

    </FooterContent> <FooterContent>
<span>Location</span>
<p>Corporate Office:<br /> 310, Deans Road,<br /> Colombo 01000, Sri Lanka<br /><br />
Reg. Office:<br /> 60, Mosque Road,<br /> Beruwala 12070, Sri Lanka

</p>

    </FooterContent> <FooterContent>
<span>Contact Info</span>
<p>
hi@eighty4.global <br />
+94 7779 79601


</p>

    </FooterContent>
</FooterSection>

    <FooterEnd>
      <p>Copyright @ Eighty4 2024. All Rights Reserved.</p>
    </FooterEnd>
  </Wrapper>;
}

export default Footer;
