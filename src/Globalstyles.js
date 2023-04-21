import { motion } from "framer-motion";
import styled from "styled-components";
export const Herosection = styled.div`
  height: 100%;
  background-position: center;
  background-size: cover;
  display: flex;dex"
  object-fit: cover;
  color: white;
  flex-direction: column;
  @media screen and (max-width: 968px) {
    height: 100vh;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`;
export const Heroimg = styled(motion.img)`
  object-fit: fill;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
`;
export const Navbar = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled(motion.img)`
  margin-left: 20px;
  margin-top: 8px;
  width: 10%;
  height: 6vh;
`;
export const Items = styled(motion.img)`
  margin-right: 10px;
  width: 100%;
  height: 4vh;
`;
export const Row = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const Links = styled(motion.h3)`
  margin: auto 20px;
  font-size: 18px;
  text-decoration: underline ${({ color }) => (color ? "#406343" : "none")} 4px;
  cursor: pointer;
`;
export const Monkeyimg = styled(motion.img)`
  margin-top: 28%;
  margin-right: 15%;
  cursor: pointer;

  width: 20%;
  height: 26vh;
`;
export const Watchimg = styled(motion.img)`
  margin-top: 28.5%;
  margin-right: 10%;
  width: 20%;
  height: 26vh;
  cursor: pointer;
`;
export const Textdiv = styled(motion.div)`
  margin-top: 25%;
  width: 22%;
`;
export const Headline = styled(motion.h1)`
  font-size: 22px;
  font-weight: bold;
  color: white;
`;
export const Info = styled(motion.h1)`
  font-size: 15px;
  font-weight: 400;
  color: #b3b3b3;
`;
export const Line = styled(motion.img)`
  margin-top: 13%;
  margin-right: 0%;

  height: 60vh;
  width: 4%;
`;
