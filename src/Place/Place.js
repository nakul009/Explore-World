import React, { Component } from "react";
import "./Place.scss";

export default class Tours extends Component {
  state = {
    showInfo: false
  };
  showinfo = () => {
    console.log(this.state.showInfo);
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTours } = this.props;
    return (
      <article className="tours">
        <div className="img-container">
          <img src={img} alt={name} />
          <span className="close-btn" onClick={() => removeTours(id)}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.showinfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo ? <p>{info}</p> : null}
        </div>
      </article>
    );
  }
}
