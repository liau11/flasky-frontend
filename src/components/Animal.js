import './Animal.css'

// The responsibility of this component is to be a reusable UI element that displays and Animal's name, species, age, and photo (optional? default photo?)
const Animal = (props) => {
    return (<section className="Animal">
        <h3>Animal name: {props.name} </h3>
        <p>Species: {props.species}</p>
        <img src="http://placekitten.com/g/200/300" alt="Willow the cat">
        </img>
    </section>)
};

export default Animal;
