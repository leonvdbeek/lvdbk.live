import React, { Component } from "react";
import Slide from "react-reveal";
import WorldMap from "react-svg-worldmap";

class World extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const data = [
      { country: "cn", value: "- November 2022" }, // china
      { country: "in", value: "- November 2022" }, // india
      { country: "us", value: "- November 2022" }, // united states
      { country: "id", value: "- November 2022" }, // indonesia
      { country: "pk", value: "- November 2022" }, // pakistan
      { country: "br", value: "- November 2022" }, // brazil
      { country: "ng", value: "- November 2022" }, // nigeria
      { country: "bd", value: "- November 2022" }, // bangladesh
      { country: "ru", value: "- November 2022" }, // russia
      { country: "mx", value: "- November 2022" }, // mexico
    ];

    
    const stylingFunction = ({
      countryValue,
      countryCode,
      minValue,
      maxValue,
      color,
    }) => {
      const opacityLevel = countryValue
        ? 0.1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue)
        : 0;
      return {
        fill: this.getRandomColor(),
        fillOpacity: opacityLevel,
        stroke: "black",
        strokeWidth: 1,
        strokeOpacity: 1,
        cursor: "pointer",
      };
    };

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row world align-center">
            <div className="three columns header-col">
              <h1>
                <span>Countries visited</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <WorldMap
                color="#f4f6f9"
                title=""
                size="lg"
                data={data}
                richInteraction="true"
                backgroundColor="#ffffff"
                strokeOpacity="1"
                styleFunction={stylingFunction}
              />
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default World;