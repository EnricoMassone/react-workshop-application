import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  state = {
    loading: true,
    name: "",
    animal: "",
    location: "",
    breed: "",
    description: "",
    media: []
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
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`
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

    const { name, animal, location, breed, description } = this.state;

    return (
      <div className="details">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <button type="button">Adopt {name}</button>
        <p>{description}</p>
      </div>
    );
  }
}

export default Details;
