import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa';

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';


const Footer = () => {
    return (
     <FooterContainer>
         <FooterWrap>
             <SocialMedia>
                 <SocialMediaWrap>
                     <SocialLogo to="/">Sushi House</SocialLogo>
                     <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener nofreferrer">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener nofreferrer">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener nofreferrer">
                            <FaTwitter />
                        </SocialIconLink>
                        

                     </SocialIcons>
                 </SocialMediaWrap>
             </SocialMedia>
         </FooterWrap>
     </FooterContainer>
    )
}

export default Footer
