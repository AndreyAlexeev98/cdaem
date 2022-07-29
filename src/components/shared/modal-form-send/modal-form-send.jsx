import {useEffect, useMemo} from 'react';
import { createPortal } from 'react-dom';

import style from './Modal-form-send.module.scss'

const modalRootElement = document.querySelector('#modal');

const ModalFormSend = (props) => {

  const {open, onClose} = props;
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if(open) {
      modalRootElement.appendChild(element);
  
      return () => {
        modalRootElement.removeChild(element);
      };
    }
  });

  if(open) {
    return createPortal (
      <div className={style.modal} onClick={onClose}>
        <div className={style.modal__card} onClick={e => e.stopPropagation()}>
          <div className={style.modal__title}>Ваше письмо отправлено!</div>
          <div className={style.modal__text}>{props.children}</div>
          <button onClick={onClose} className={style.modal__btn}>Закрыть окно</button>
        </div>
      </div>,
      element
    )
  };
  return null;
}

export default ModalFormSend