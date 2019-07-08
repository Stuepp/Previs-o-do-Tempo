import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import Halftop from "../componentes/halftop/metadetop";
import Capitals from "../componentes/capitals/capitals";

export const App = classes => {
  return (
      <div id={1} style={{
        background: "linear-gradient(#FF8500, #FFBA00)",
        marginTop: -38,
        width: "100%",
        height: "100vh"
      }}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Halftop />
          <Capitals />
        </Container>
      </div>
  );
};


export default (App);
