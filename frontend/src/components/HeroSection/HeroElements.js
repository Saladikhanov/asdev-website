import styled from "styled-components";
import { BsArrowDownCircle, BsArrowDown } from "react-icons/bs";
import { Link as LinkS } from "react-scroll";

export const HeroContainer = styled.div`
  /* background: #0c0c0c;
  opacity: 0.5; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  /* add: before styles; */
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #0c0c0c;
  font-size: 80px;
  text-align: center;

  /* ANIMATION  */
  animation: fadeIn 3s;
  transform: translate(0px, 120%);
  opacity: 0;
  transition: all 0.8s ease 0s;
  /* active class  */
  transform: translate(0px, 0%);
  opacity: 1;
  

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  width: 440px;
  color: #FFF;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 35px;
  padding: 5px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowDownCircle = styled(BsArrowDownCircle)`
  margin-top: 10px;
  font-size: 30px;
`;

export const ArrowDown = styled(BsArrowDown)`
  margin-top: 10px;
  font-size: 30px;
`;
export const Button = styled(LinkS)`
  padding: 10px;
  border-radius: 50px;
  border: none;
  outline: none;
  color: #e59aff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: none;
  white-space: nowrap;
  font-size: 16px;
  cursor: pointer;
  /* transition: all 0.1s ease-in-out; */

  &:hover {
    transition: all 1s ease-in-out;
    color: #fd994e;
  }
`;
