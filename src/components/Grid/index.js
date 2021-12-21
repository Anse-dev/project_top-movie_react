import React from "react";
import { GridContainer, GridHeader, GridContent } from "./Grid.styles.js";

const Grid = ({ header, children, top }) => {
  return (
    <GridContainer top={top}>
      <GridHeader>
        <h1>{header}</h1>
      </GridHeader>
      <GridContent>{children}</GridContent>
    </GridContainer>
  );
};

export default Grid;
