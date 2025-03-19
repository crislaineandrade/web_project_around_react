function ImagePopup(props) {
  const { card } = props;
  console.log(card);
  return (
    <div className="popup-image__container">
        <img
          className="popup-image__img"
          src={card.link}
          alt="Imagem ampliada"
        />
        <p className="popup-image__subtitle">{card.name}</p>
      </div>
  );
}

export default ImagePopup;


