import styled from "styled-components";

export const Banner = styled.div`
  position: relative;
  height: 800px;
  width: 100%;
  top: 0;
  display: block;
  background-image: url("${({ image }) => image}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
`;
export const BannerContent = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const HeroText = styled.div`
  position: absolute;
  font-size: 18px;
  width: 100%;
  display: block;
  max-width: 1280px;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
`;
export const HeroTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
`;
export const HeroDescr = styled.p`
  font-size: 21px;
  margin-top: 0;
`;
export const HeroButton = styled.button`
  padding: 8px 30px;
  margin: 10px 0;
  font-size: 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;
