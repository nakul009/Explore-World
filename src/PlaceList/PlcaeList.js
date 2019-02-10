import React, { Component } from "react";
import Places from "../Place/Place";
import "./PlaceList.scss";
import { tourData } from "../tourData";

export default class PlacesList extends Component {
  state = {
    tours: tourData
  };

  deleteTour = id => {
    const sortedTours = this.state.tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map(item => {
          return (
            <Places key={item.id} tour={item} removeTours={this.deleteTour} />
          );
        })}
      </section>
    );
  }
}
