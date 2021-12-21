import React from "react";
import { Link } from "react-router-dom";

import { Image } from "./Thumb.styles";

const Thumb = ({ image, title }) => {
  return (
    <Link to={`/${title}`}>
      <Image src={image} alt={title} />
    </Link>
  );
};

export default Thumb;
