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
            href="https://www.whatsapp.com/?lang=es"
            target="_blank"
          >
            <AiOutlineWhatsApp />
          </LinksStlyedRedes>

          <LinksStlyedRedes
            href="https://www.facebook.com/ariel.garaventa/"
            target="_blank"
          >
            <AiFillFacebook />
          </LinksStlyedRedes>
          <LinksStlyedRedes
            href="https://www.instagram.com/ariel_garav_/"
            target="_blank"
          >
            <AiOutlineInstagram />
          </LinksStlyedRedes>
          <LinksStlyedRedes
            href="https://twitter.com/Arielgarav?t=-nwmYYRkZZP7rK7knXtMoA&s=08"
            target="_blank"
          >
            <AiOutlineTwitter />
          </LinksStlyedRedes>
          <LinksStlyedRedes
            href="https://www.linkedin.com/in/ariel-garaventa-349361274/"
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
