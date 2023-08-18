import React, { useEffect, useRef } from "react";

import { VerifiedWrapper } from "./VerifiedStyles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import VerifiedComponent from "../../Components/VerifiedComponent/VerifiedComponent";

function Verified() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <VerifiedWrapper>
      <VerifiedComponent />
    </VerifiedWrapper>
  );
}

export default Verified;
