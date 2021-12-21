import styled from "styled-components";
export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: thumb 0.5s;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  @keyframes thumb {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
