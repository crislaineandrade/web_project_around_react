import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    function getCards() {
      api.getCards().then((card) => {
        setCards(card);
      });
    }

    getCards();
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .handleLikeAction(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((novo) =>
          novo.filter((deleteCard) => deleteCard._id !== card._id)
        );
      })
      .catch((error) => console.log(error));
  }

  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    function getUserInfo() {
      api.getUserInfo().then((userInfo) => {
        setCurrentUser(userInfo);
      });
    }
    getUserInfo();
  }, []);

  const handleUpdateUser = (data) => {
    api
      .editProfile(data.name, data.about)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.log(error));
  };

  function handleUpdateAvatar(data) {
    api.editAvatar(data).then((userAvatar) => {
      setCurrentUser(userAvatar);
      handleClosePopup();
    });
  }

  function handleAddPlaceSubmit(data) {
    api
      .addNewCard(data.nameCard, data.linkCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((error) => console.log("Erro ao adcionar cartão", error));
  }

  return (
    <>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          handleUpdateUser,
          handleUpdateAvatar,
          handleAddPlaceSubmit,
        }}
      >
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
