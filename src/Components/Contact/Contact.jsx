import React from "react";
import Iframe from "react-iframe";

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
  LocationMap,
} from "./ContactStyles";
const Contact = () => {
  return (
    <>
      <TotalContactContainer>
        <ComuncationTextContact>WE ARE LOCATED IN</ComuncationTextContact>
        <LocationMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.7794191225935!2d-58.45686288609203!3d-34.547595967358355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb425c4b2f54f%3A0xc2635f54412c7471!2sAv.%20del%20Libertador%207100%2C%20C1429%20CABA!5e0!3m2!1ses-419!2sar!4v1686676286222!5m2!1ses-419!2sar"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></LocationMap>
        <ComuncationTextContact>
          You can communicate with us through our social Networks.
        </ComuncationTextContact>
        <ContactContainer>
          <TextContact>Contact</TextContact>
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
