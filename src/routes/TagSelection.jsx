import SingularTag from './SingularTag'
import { Link } from 'react-router-dom'
import { useCocktailContext } from '../contexts/CocktailProvider'

function TagSelection( ) {

const { allTags, selectedCocktails, setSelectedCocktails, cocktails, mixItUpPressed, setMixItUpPressed, randomButtonPressed, setRandomButtonPressed, selectedTags } = useCocktailContext()

// Cocktail Selection Algorithm

function handleMixClick() {
  let newArr = [...selectedCocktails]
  for (let i = 0; i < selectedTags.length; i++) {
  newArr.push(cocktails.filter((el) => el.flavour_notes.includes(selectedTags[i])))
  }
  setSelectedCocktails([...new Set([].concat(...newArr))])
  setMixItUpPressed(!mixItUpPressed);
}

function handleRandomClick() {
  setRandomButtonPressed(!randomButtonPressed);

}

  return (
    <div>
    <div className="tagContainer">
      {allTags.map((el) => <SingularTag tag={el} /> )}
    </div>
    <div className="tagButtons">
    <Link to="/cocktaillist">
    <button type="button" name="mixItUp" id="mixItUp" onClick={handleMixClick}>Mix it up!</button>
    </Link>
    <Link to="/cocktaillist">
    <button type="button" name="surpriseMe" id="mixItUp" onClick={handleRandomClick}>Surprise Me!</button>
    </Link>
    </div>
    </div>
  )
}

export default TagSelection






























