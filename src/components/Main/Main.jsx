import {useState} from 'react'
import Popup from './components/Popup/Popup';
import NewCard from '../Main/components/Popup/components/NewCard/NewCard'  
import EditProfile from '../Main/components/Popup/components/EditProfile/EditProfile'
import EditAvatar from '../Main/components/Popup/components/EditAvatar/EditAvatar'
import Card from '../Main/components/Popup/components/Card/Card'


const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
]
console.log(cards)


function Main() {
  const [popup, setPopup] = useState(null)
  const newCardPopup = {title: 'Novo Local', children: <NewCard />}
  const editProfilePopup = {title: 'Editar Perfil', children: <EditProfile />}
  const editAvatarPopup = {title: 'Alterar a foto do perfil', children: <EditAvatar />}
  
  

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
            src="images/avatar.jpg"
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
          <h1 className="profile__user">Jacques Cousteau</h1>

          <button type="button" className="profile__edit-button" onClick={() => handleOpenPopup(editProfilePopup)}>
            <img
              className="profile__image-edit-button"
              src="images/edit_button.png"
              alt="edit button"
            />
          </button>

          <p className="profile__paragraph">Explorador</p>
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
            <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup}  />
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