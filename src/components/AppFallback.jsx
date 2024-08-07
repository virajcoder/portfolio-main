import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { getPreferredTheme, setTheme } from "../utils";


const propTypes = { error: PropTypes.object.isRequired };

const AppFallback = ({ error }) => {
  React.useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  return (
    <main className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <Container className="text-center">
        <p>Something went wrong:</p>
        <pre
          className="text-wrap"
          style={{ color: "red" }}
        >{`${error.name}: ${error.message}`}</pre>
      </Container>
    </main>
  );
};

AppFallback.propTypes = propTypes;


export default AppFallback;
