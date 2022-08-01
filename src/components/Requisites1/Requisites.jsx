import style from './Requisites.module.scss'

const Requisites = () => {
  return (
    <div className={style.root}>
      <span>ИП Шушкевич Андрей Викторович</span>
      <span>УНП 192602485 Минским горисполкомом</span>
      <span>10.02.2016</span>
      <span>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</span>
      <span>+375 29 621 48 33, sdaem@sdaem.by</span>
      <span>Режим работы: 08:00-22:00</span>
    </div>
  )
}

export default Requisites;