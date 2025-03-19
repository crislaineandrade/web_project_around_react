function EditProfile() {
    return(
        <form className="popup__form" name="formProfile" novalidate>
            <fieldset className="popup__fieldset">
              <input
                type="text"
                className="popup__name popup__input"
                id="name"
                name="name"
                placeholder="Nome"
                required
                minlength="2"
                maxlength="40"
              />
              <span className="name-error popup__input_type_error"></span>

              <input
                type="text"
                className="popup__ocupation popup__input"
                id="ocupation"
                name="ocupation"
                placeholder="Sobre mim"
                required
                minlength="2"
                maxlength="200"
              />
              <span className="ocupation-error popup__input_type_error"></span>

              <button type="submit" className="popup__save-button form__submit">
                Salvar
              </button>
            </fieldset>
          </form>
    )
}

export default EditProfile