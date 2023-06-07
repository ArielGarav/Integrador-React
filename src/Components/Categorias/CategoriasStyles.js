import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoriasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  user-select: none;
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 0.5rem;
  border-radius: 15px;
  cursor: pointer;

  h2 {
    font-size: 1rem;
  }

  :first-child {
    img {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }
`;

export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  border-radius: 15px;
`;
