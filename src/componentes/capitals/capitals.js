import React from "react";
import Capitalsnames from "./components/capitalsnames";
import { Typography } from "@material-ui/core";

export const Capitals = ({ capitalName }) => {
  return (
    <React.Fragment>
      <Typography>
        <h1 style={{ color: "#fff", fontSize: "38px" }}>Capitais</h1>
      </Typography>
      <Capitalsnames />
    </React.Fragment>
  );
};
export default Capitals;
