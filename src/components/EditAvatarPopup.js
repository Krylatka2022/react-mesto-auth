import React, { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormValidation } from '../utils/useFormValidation';

function EditAvatarPopup(props) {
  const { errors, isValid, handleChange, reset } = useFormValidation();


  const ref = useRef('');

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: ref.current.value
    });
    reset()
  }

  useEffect(() => {
    ref.current.value = '';
  }, [props.isOpen]);

  const errorClassName = (name) => `popup__error ${errors[name] ? 'popup__error_visible' : ''}`

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="popup_avatar"
      title="Обновить аватар"
      textButton="Сохранить"
      isValid={isValid}>



      <input
        className="popup__input popup__input_type_avatar"
        type="url"
        placeholder="Ссылка на аватар"
        // required
        ref={ref}
        name='linkAvatar'
        onChange={handleChange}
        required
      // value={values.linkAvatar || ''} 

      />

      <span className={errorClassName('linkAvatar')} id="inputAvatarName-error">{errors['linkAvatar']}</span>

    </PopupWithForm>
  )
}
export default EditAvatarPopup;
