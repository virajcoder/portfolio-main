import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";


const StyledDiv = styled.div`
  position: fixed;
  bottom: calc(var(--min-footer-height) + 1.5rem);
  right: 1.5rem;
  visibility: hidden;
  z-index: 2;

  .link-icons {
    color: ${({ theme }) => (theme.name === "light" ? "#45413C" : "#F5F2E8")};
  }

  &.show-up {
    visibility: visible;
  }
`;

const propTypes = { home: PropTypes.string };

const BackToTop = ({ home = "Home" }) => {
  const [scrollYNum, setScrollYNum] = React.useState(null);
  const up = React.useRef(null);

  React.useEffect(() => {
    const updateScrollY = () => {
      setScrollYNum(window.scrollY);
      if (scrollYNum > 500) {
        up.current.classList.add("show-up");
      } else {
        up.current.classList.remove("show-up");
      }
    };
    window.addEventListener("scroll", updateScrollY);

    return () => window.removeEventListener("scroll", updateScrollY);
  }, [scrollYNum]);

  return (
    <StyledDiv ref={up}>
      <Link to={home} className="link-icons">
        <Icon icon="fa6-solid:circle-chevron-up" />
      </Link>
    </StyledDiv>
  );
};

BackToTop.propTypes = propTypes;


export default BackToTop;
