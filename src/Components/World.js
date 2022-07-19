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
      { country: "in", value: " " }, // india
      { country: "nl", value: " " },
      { country: "be", value: " " },
      { country: "de", value: " " },
      { country: "at", value: " " },
      { country: "hr", value: " " },
      { country: "cz", value: " " },
      { country: "dk", value: " " },
      { country: "gb", value: " " },
      { country: "fr", value: " " },
      { country: "hu", value: " " },
      { country: "it", value: " " },
      { country: "la", value: " " },
      { country: "lu", value: " " },
      { country: "my", value: " " },
      { country: "ma", value: " " },
      { country: "mm", value: " " },
      { country: "np", value: " " },
      { country: "no", value: " " },
      { country: "pl", value: " " },
      { country: "pt", value: " " },
      { country: "sg", value: " " },
      { country: "sk", value: " " },
      { country: "si", value: " " },
      { country: "es", value: " " },
      { country: "se", value: " " },
      { country: "ch", value: " " },
      { country: "th", value: " " },
      { country: "vn", value: " " },
      { country: "", value: " " },
      { country: "", value: " " },
      { country: "", value: " " },
      { country: "", value: " " },
      { country: "", value: " " },
      { country: "", value: " " },
      { country: "", value: " " },
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
              <p className="text-left">Travelling is something I truely love. My parents always used to travel a lot and have been able to take me and my little brother to quite a few places. Below you find a map of all the countries I have visited so far!</p>
              <p className="text-left">You can double click on the map to zoom in as well. 😉</p>
              <WorldMap
                title=""
                color="#f4f6f9"
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