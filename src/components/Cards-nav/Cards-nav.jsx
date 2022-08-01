import PictureRooms from '../../images/pictures/rooms.png';
import PictureHouses from '../../images/pictures/houses.png';
import PictureBaths from '../../images/pictures/baths.png';
import PictureCars from '../../images/pictures/cars.png';
import IconArrow from '../shared/icons/Arrow/Arrow';

import style from './Cards-nav.module.scss';

const CardsNav = () => {
  return (
    <>
      <ul className={style.list}>
        <li className={style.item}>
          <img className={style.picture} src={PictureRooms} alt="Квартиры" />
          <div className={style.wrapper}>
            <div>
              <div className={style.title}>Снять квартиру</div>
              <div className={style.description}>Квартиры на сутки</div>
              <ul className={style.buttons}>
                <li><button className={style.text_btn}>Минск</button></li>
                <li><button className={style.text_btn}>Витебск</button></li>
                <li><button className={style.text_btn}>Гродно</button></li>
                <li><button className={style.text_btn}>Гомель</button></li>
                <li><button className={style.text_btn}>Брест</button></li>
                <li><button className={style.text_btn}>Могилев</button></li>
              </ul>
            </div>
          </div>
        </li>
        <li className={style.item}>
        <img className={style.picture} src={PictureHouses} alt="Дома" />
        <div className={style.wrapper}>
          <div>
            <div className={style.title}>Снять квартиру</div>
            <div className={style.description}>Квартиры на сутки</div>
          </div>
          <button className={style.btn}>
            <IconArrow className={style.btn_icon} />
          </button>
        </div>

        </li>
        <li className={style.item}>
          <img className={style.picture} src={PictureBaths} alt="Бани" />
          <div className={style.wrapper}>
            <div>
              <div className={style.title}>Попариться в бане с друзьями</div>
              <div className={style.description}>Бани и сауны</div>
            </div>
            <button className={style.btn}>
              <IconArrow className={style.btn_icon} />
            </button>
          </div>
        </li>
        <li className={style.item}>
        <img className={style.picture} src={PictureCars} alt="Автомобили" />
        <div className={style.wrapper}>
          <div>
            <div className={style.title}>Если срочно нужна машина</div>
            <div className={style.description}>Авто на прокат</div>
          </div>
          <button className={style.btn}>
            <IconArrow className={style.btn_icon} />
          </button>
        </div>
        </li>
      </ul>
    </>
    
  )
}

export default CardsNav;