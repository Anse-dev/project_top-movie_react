import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderRow,
  SiteLogo,
  HeaderContent,
  APILogo,
  HeaderInput,
} from "./Header.style";
import SearchBar from "../Search/index";

const Header = ({ searchHandler }) => {
  return (
    <HeaderRow>
      <HeaderContent>
        <SiteLogo>
          <Link to="/">TopMovie</Link>
        </SiteLogo>
        <HeaderInput>
          <form>
            <SearchBar setSearch={searchHandler} />
          </form>
        </HeaderInput>
      </HeaderContent>
    </HeaderRow>
  );
};
export default Header;
