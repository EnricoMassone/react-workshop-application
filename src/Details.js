import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import { navigate } from "@reach/router";

class Details extends React.Component {
  state = {
    loading: true,
    name: "",
    animal: "",
    location: "",
    breed: "",
    description: "",
    media: [],
    url: "",
    showModal: false
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  };

  adoptPet = () => {
    const { url } = this.state;
    navigate(url);
  };

  componentDidMount() {
    const { id } = this.props;

    const fetchPetDetails = async () => {
      const { animal } = await pet.animal(+id);
      this.setState({
        loading: false,
        name: animal.name,
        animal: animal.type,
        breed: animal.breeds.primary,
        description: animal.description,
        media: animal.photos,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        url: animal.url
      });
    };

    fetchPetDetails().catch(console.error);
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <div className="details">
          <h1>Loading...</h1>
        </div>
      );
    }

    const {
      name,
      animal,
      location,
      breed,
      description,
      media,
      showModal
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>

        <ThemeContext.Consumer>
          {([theme]) => (
            <button
              type="button"
              style={{ backgroundColor: theme }}
              onClick={this.toggleModal}
            >
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>

        <p>{description}</p>

        {showModal ? (
          <Modal>
            <h1>Would you like to adopt {name} ?</h1>
            <div className="buttons">
              <ThemeContext.Consumer>
                {([theme]) => (
                  <React.Fragment>
                    <button
                      type="button"
                      style={{ backgroundColor: theme }}
                      onClick={this.adoptPet}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      style={{ backgroundColor: theme }}
                      onClick={this.toggleModal}
                    >
                      No
                    </button>
                  </React.Fragment>
                )}
              </ThemeContext.Consumer>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

const DetailsWithErrorHandling = props => (
  <ErrorBoundary>
    <Details {...props} />
  </ErrorBoundary>
);

export default DetailsWithErrorHandling;
