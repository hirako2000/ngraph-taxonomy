import React from "react";
import Destination from './destination.jsx';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome to the Living Organism, and Cyber Threats insight, Commander</h1>
        <h2>Choose your destination:</h2>
        <div className="media-list">
          <Destination
            description="A 3D Graph of Threat Groups, their tools and associated state"
            href="#/world/threats?l=1"
            media="bower_fly_first.png"
            name="Threats"
          />
          <Destination
            description="A 3D Graph of Species"
            href="#/world/nature?l=1"
            media="bower_fly_first.png"
            name="Nature"
          />
        </div>
      </div>
    );
  }
}
