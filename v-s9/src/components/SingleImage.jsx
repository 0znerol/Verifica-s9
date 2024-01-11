import React, { Component } from "react";

export default class SingleImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: props.movie,
      key: props.chiave,
      scrollpos: props.scrollPos,
    };
  }
  componentDidUpdate() {
    console.log(this.state.scrollpos);
  }
  componentDidMount() {
    this.setState((prevState) => {
      return { scrollpos: prevState.scrollpos - 299 + this.props.scrollPos };
    });
  }

  render() {
    const selectionCheck = (pos) => {
      if (pos === this.state.chiave) {
        console.log("posizione corretta");
        return true;
      } else {
        console.log("posizione scorretta");
        return false;
      }
    };
    console.log();
    {
      selectionCheck(this.state.scrollpos) && console.log("oleeee");
    }
    return (
      <div key={this.state.chiave} className="col m-2 p-2">
        <img
          src={this.state.movie.Poster}
          className="img rounded"
          style={{ height: "399px", width: "260px" }}
        />
        {/* <p>{this.state.movie.Title}</p> */}
      </div>
    );
  }
}
