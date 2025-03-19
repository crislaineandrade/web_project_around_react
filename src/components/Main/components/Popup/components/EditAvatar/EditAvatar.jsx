function EditAvatar() {
    return(

      <form className="popup-edit-profile__form">
        
        <input type="url" className="popup-edit-profile__link popup__input" id="link" placeholder="Link de imagem" required name="link"/>
        <span className="link-error popup__input_type_error"></span>

        <button type="submit" className="popup-edit-profile__save-button form__submit">Salvar</button>

    </form>
    )
}

export default EditAvatar