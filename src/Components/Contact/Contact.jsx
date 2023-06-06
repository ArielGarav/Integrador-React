import React from "react";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  TotalContactContainer,
  ContactContainer,
  LinksStlyedRedes,
  TextContact,
  ComuncationTextContact,
} from "./ContactStyles";
const Contact = () => {
  return (
    <>
      <TotalContactContainer>
        <ComuncationTextContact>
          Puedes comunicarte con nosotros a través de nuestras redes Sociales
        </ComuncationTextContact>
        <ContactContainer>
          <TextContact>Contacto</TextContact>
          <LinksStlyedRedes
            href="https://www.facebook.com/Sociales.Sociales"
            target="_blank"
          >
            <AiOutlineWhatsApp />
          </LinksStlyedRedes>

          <LinksStlyedRedes
            href="https://www.facebook.com/Sociales.Sociales"
            target="_blank"
          >
            <AiFillFacebook />
          </LinksStlyedRedes>
          <LinksStlyedRedes
            href="https://www.instagram.com/sociales.sociales/"
            target="_blank"
          >
            <AiOutlineInstagram />
          </LinksStlyedRedes>
          <LinksStlyedRedes
            href="https://twitter.com/SocialesSociales"
            target="_blank"
          >
            <AiOutlineTwitter />
          </LinksStlyedRedes>
          <LinksStlyedRedes
            href="https://www.linkedin.com/company/sociales-sociales/"
            target="_blank"
          >
            <AiOutlineLinkedin />
          </LinksStlyedRedes>
        </ContactContainer>
      </TotalContactContainer>
    </>
  );
};

export default Contact;
