import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media && media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleImageClick = e => {
    const index = +e.target.dataset.index;
    this.setState({
      active: index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />

        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              alt="animal thumbnail"
              className={index === active ? "active" : ""}
              data-index={index}
              onClick={this.handleImageClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
