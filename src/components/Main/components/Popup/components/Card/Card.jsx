
import ImagePopup from '../ImagePopup/ImagePopup';

function Card(props) {
    const {card, handleOpenPopup} = props
    const {name, link} = card
    const imageComponent = {
      title: '',
      children: <ImagePopup card={card}  />
    }
  return (
    <li className="elements__card">


      <img
        className="elements__delete-button"
        src="images/Trash.png"
        alt="image of the delete button"
      />

      <img className="elements__image" src={link} alt="image of a view" onClick={() => handleOpenPopup(imageComponent)}/>

      <div className="elements__card-content">
        <p className="elements__name-card">{name}</p>

        <button className="elements__button-image-like"></button>
      </div>
    </li>
  );
}

export default Card;
