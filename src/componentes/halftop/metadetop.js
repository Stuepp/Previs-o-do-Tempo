import React from "react";
import InputCity from "./components/InputCity";

export class MetadeTop extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{ color: "#fff", fontSize: "55px" }}>Previsão do tempo</h1>
        <InputCity handlerInput={this.handlerInput} />
        <hr
          style={{
            color: "#fff",
            WebkitBorderRadius: "30%",
            border: "1px solid"
          }}
        />
      </React.Fragment>
    );
  }

  handlerInput(value) {
    console.log(value);
  }
}

export default MetadeTop;
