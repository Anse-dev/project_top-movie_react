import styled from "styled-components";
export const WrapperButton = styled.button`
  display: block;
  width: 150px;
  min-width: 100px;
  margin: 20px auto;
  padding: 0.5rem 1.75rem;
  font-size: 1rem;
  background-color: orange;
  border: 1px solid orange;
  border-radius: 1.5rem;
  color: #4e4e4e;
  font-weight: bold;
  transition: ease 0.3s color;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
