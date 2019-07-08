import React from "react";
import Grid from "@material-ui/core/Grid";
import ListCapsNames from "./listcapnames1";

const caps = [
  { capital: "Rio de Janeiro", min: 18, max: 27 },
  { capital: "Salvador", min: 18, max: 27 },
  { capital: "São Paulo", min: 18, max: 27 },
  { capital: "Curitiba", min: 18, max: 27 },
  { capital: "Belo Horizonte", min: 18, max: 27 },
  { capital: "Fortaleza", min: 18, max: 27 },
  { capital: "Brasília", min: 18, max: 27 },
  { capital: "Manaus", min: 18, max: 27 },
  { capital: "Belém", min: 18, max: 27 },
  { capital: "João Pessoa", min: 18, max: 27 }
];

export const CapNames = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {caps.map((caps, index) => (
          <ListCapsNames
            key={index}
            caps={caps.capital}
            capsMin={caps.min}
            capsMax={caps.max}
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};
export default CapNames;
