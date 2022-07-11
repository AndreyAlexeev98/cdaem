import { Link } from "react-router-dom";

import style from './confirm.module.scss';

const Confirm = () => {
  return (
    <div className={style.confirm}>
      <div className={style.confirm__title}>Подтвердите регистрацию</div>
      <div className={style.confirm__text}>Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.</div>
      <Link to='/login/' className={style.confirm__btn}>Понятно</Link>
    </div>
  )
}

export default Confirm;