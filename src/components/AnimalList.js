import './AnimalList.css';
import Animal from './Animal';

const AnimalList = () => {
    const firstAnimal = {
        name: "Violet",
        species: "pit mix"
    };

    const secondAnimal = {
        name: "Cocoa",
        species: "cat"
    }

    const animals = [firstAnimal, secondAnimal]

    return (<section className="AnimalList">
        <h2>Animal List</h2>
        <ul className="AnimalList_list">
            {animals.map(creature => (
                <li>
                    <Animal name={creature.name} species={creature.species} />
                </li>
            ))
            }
        </ul>

    </section>)
};

export default AnimalList;