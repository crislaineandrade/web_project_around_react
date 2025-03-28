import {useState, useEffect, useContext} from 'react'
import Popup from './components/Popup/Popup';
import NewCard from '../Main/components/Popup/components/NewCard/NewCard'  
import EditProfile from '../Main/components/Popup/components/EditProfile/EditProfile'
import EditAvatar from '../Main/components/Popup/components/EditAvatar/EditAvatar'
import Card from '../Main/components/Popup/components/Card/Card'
import api from '../../utils/api'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


const newCardPopup = {title: 'Novo Local', children: <NewCard />}
const editProfilePopup = {title: 'Editar Perfil', children: <EditProfile />}
const editAvatarPopup = {title: 'Alterar a foto do perfil', children: <EditAvatar />}

function Main() {
  const {userContext} = useContext(CurrentUserContext)
  console.log(userContext)
 
  
  const [cards, setCards] = useState([])

  useEffect(() => {
    function getCards() {
      api.getCards().then((card) => {

        console.log(card)
        setCards(card)
      })
    }
    getCards()

  }, [])


  async function handleCardLike(card) {
    const isLiked = card.isLiked
    console.log(card)


    await api.handleLikeAction(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard))
    }).catch((error) => console.error(error))
  }


  async function handleCardDelete(card) {

    await api.deleteCard(card._id).then((cardDeleted) => {
      console.log(cardDeleted)
      setCards((novo) => novo.filter((deleteCard) => deleteCard._id !== card._id))
    }).catch((error) => console.log(error))
  }



  const [popup, setPopup] = useState(null)
  
  function handleOpenPopup(popup) {
    setPopup(popup)
  }

  function handleClosePopup() {
    setPopup(null)
  }


  
  return (
    <main className="content">
      <section className="profile page-section">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={userContext.avatar}
            alt="image of a man"
          />
          <img
            className="profile__edit-icon"
            src="images/editPen.png"
            alt="icon of a pen"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
        </div>

        <div className="profile__info">
          <h1 className="profile__user">{userContext.name}</h1>

          <button type="button" className="profile__edit-button" onClick={() => handleOpenPopup(editProfilePopup)}>
            <img
              className="profile__image-edit-button"
              src="images/edit_button.png"
              alt="edit button"
            />
          </button>

          <p className="profile__paragraph">{userContext.about}</p>
        </div>

        <button type="button" className="profile__add-button" onClick={() => handleOpenPopup(newCardPopup)
        }>
          <img
            className="profile__image-add-button"
            src="images/add__button.png"
            alt="add button"
            
          />
        </button>
      </section>

      <section className="elements">

        <ul className="elements__cards" id="elementsCards">
          
          {cards.map((card) => (
            <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
          ))}

        </ul>
      </section>

    {popup && (
      <Popup onClose={handleClosePopup} title={popup.title}>
        {popup.children}
      </Popup>
    )}
    </main>
  );
}

export default Main