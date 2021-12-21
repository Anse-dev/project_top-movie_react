import styled from "styled-components";
export const GridContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-top: ${({ top }) => top}px;
`;
export const GridHeader = styled.div`
  font-family: var(--font-family-moo);
  text-align: left;
  font-weight: 400;
`;
export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;
