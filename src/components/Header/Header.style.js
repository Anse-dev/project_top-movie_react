import styled from "styled-components";
export const HeaderRow = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const HeaderContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const HeaderInput = styled.div`
  flex: 0 1 50%;
  width: 100%;
  form {
    display: block;
    input[type="text"] {
      padding: 0.75rem 1.2rem;
      border-radius: 0.8rem;
      border: 1px solid transparent;
      width: 100%;
      font-size: 1rem;
      font-weight: 400;
      background-color: #ddd;
    }
  }
`;
export const SiteLogo = styled.div`
  font-family: var(--font-family-moo);
  font-size: 2.5rem;
  flex: auto;
  margin: 0;
  a {
    color: white;
    text-decoration: none;
  }
`;
export const APILogo = styled.div`
  font-family: var(--font-family-moo);
  flex: auto;
  margin: 0;
  text-align: right;
  color: orange;
`;
