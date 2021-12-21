import styled from "styled-components";
export const Spinner = styled.div`
  border: 2px solid white;
  border-top: 4px solid orange;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(380deg);
    }
  }
`;
