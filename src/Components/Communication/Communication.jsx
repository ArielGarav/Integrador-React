import React from "react";
import { FaUsers } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";

import {
  ContainerTotal,
  SectionAbout,
  Text,
  Title,
  SectionContact,
  Line,
  CommunicationLinks,
} from "./CommunicationStyles";

const Communication = () => {
  return (
    <>
      <ContainerTotal>
        <Line />
        <SectionAbout>
          <FaUsers fontSize="26px" />
          <Title>About us</Title>
          <Text>
            It is a store of Shoes Oriented to all kinds of people, our store
            seeks to meet the expectations of each customer. Founded in 2016 by
            Ariel Garaventa
          </Text>
          <CommunicationLinks to={"About"}>
            Learn more about us
          </CommunicationLinks>
        </SectionAbout>
        <Line />
        <SectionContact>
          <LuPhoneCall fontSize="26px" />
          <Title>Contact</Title>
          <Text>To contact us, please use the following link</Text>
          <CommunicationLinks to={"Contact"}>Click Here</CommunicationLinks>
        </SectionContact>
      </ContainerTotal>
    </>
  );
};

export default Communication;
