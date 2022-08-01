import classNames from "classnames";
import { Link } from 'react-router-dom';

import RentCards from "../shared/Rent-cards/Rent-cards";
import IconArrow from "../shared/icons/Arrow/Arrow";
import RentListData from "../../data/rent-cards";

import style from './Section-rent.module.scss'

const SectionRent = () => {
  return (
    <section className={style.root}>
      <div className={style.decor_bg} />
      <div className={style.header}>
        <div className={style.section_title}>Квартиры на сутки</div>
        <div className={style.row}>
          <div className={style.title}>Аренда квартир в Минске</div>
          <div className={style.filter}> 
            <select className="metro">
              <option value="1">Метро</option>
              <option value="vladimirskaya">Владимирская</option>
              <option value="admiralteiskaya">Адмиралтейская</option>
            </select> 
            <select className="district">
              <option value="2">Район</option>
              <option value="vladimirskaya">Центральный</option>
              <option value="admiralteiskaya">Северо-западный</option>
            </select> 
          </div>
        </div>
      </div>
      <div className={style.body}>
        <div className='slider-cards'>
          <RentCards cards={RentListData} btn_favorite={false} />
        </div>
        <div className={style.slider_contlols}>
          <button className={style.btn}>
            <IconArrow className={classNames(style.btn_icon, style.btn_icon_left)} />
          </button>
          <button className={style.btn}>
            <IconArrow className={classNames(style.btn_icon, style.btn_right)} />
          </button>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.block}>
          <div className={style.sum}>
            {RentListData.length}
          </div>
          <div className={style.subtitle}>Предложений по Минску</div>
        </div>
        <div className={style.block}>
          <Link to='/' className={style.btn_view}>
            <span className={style.btn_view__text}>Посмотреть все</span>
            <IconArrow className={style.btn_view__icon} height='11px' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SectionRent;