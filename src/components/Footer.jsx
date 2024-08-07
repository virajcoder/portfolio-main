import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SocialLinks from "./SocialLinks";


const StyledFooter = styled.footer`
  height: calc(var(--nav-height) + 1rem);
  background: var(--bs-primary);

  a {
    color: ${({ $mode }) => {
      if ($mode !== undefined && $mode !== null) {
        return $mode.toLowerCase() === "light"
          ? "var(--bs-light)"
          : "var(--bs-gray-dark)";
      } else {
        return "var(--bs-gray-dark)";
      }
    }};

    &:hover {
      color: ${({ $mode }) => {
        if ($mode !== undefined && $mode !== null) {
          return $mode.toLowerCase() === "light"
            ? "var(--bs-gray-dark)"
            : "var(--bs-light)";
        } else {
          return "var(--bs-gray-dark)";
        }
      }};
    }
  }
`;

const propTypes = {
  mode: PropTypes.string.isRequired,
};

const Footer = ({ mode }) => {
  return (
    <StyledFooter
      $mode={mode}
      className="d-flex align-items-center justify-content-center p-2"
    >
      <SocialLinks />
    </StyledFooter>
  );
};

Footer.propTypes = propTypes;


export default Footer;
