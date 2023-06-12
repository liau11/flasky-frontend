import './Animal.css'

// The responsibility of this component is to be a reusable UI element that displays and Animal's name, species and photo
const Animal = () => {
    return (<section className="Animal">
        <h3>Animal name: Willow</h3>
        <p>Species: cat</p>
        <img src="http://placekitten.com/g/200/300" alt="Photo of Willow">
        </img>
    </section>)
};

export default Animal;
