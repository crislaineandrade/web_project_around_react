export default function NewCard() {
    return (
      <form className="popup-edit__form">

            <input type="text" className="popup-edit__name popup__input" id="edit-name" placeholder="Título" required minLength="2" maxLength="30" name="name"/>
            <span className="edit-name-error popup__input_type_error"></span>

            <input type="url" className="popup-edit__link popup__input" id="link" placeholder="Link de imagem" required name="link"/>
            <span className="link-error popup__input_type_error"></span>

            <button type="submit" className="popup-edit__create-button form__submit">Criar</button>

          </form>
        
    )
}