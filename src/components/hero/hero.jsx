import classNames from "classnames";

import IconPointer from '../shared/icons/pointer/pointer.jsx';
import IconSettings from '../shared/icons/settings/settings.jsx';
import IconArrow from '../shared/icons/arrow/arrow.jsx';

import style from './hero.module.scss';

const MINSK_CITY = 'Минск';

const Hero = () => {
  return (
    <section className={style.root}>
      <h1 className={style.title}>Sdaem.by - у нас живут <span className={style.text_highlighted}>ваши обьявления</span></h1>
      <div className="filter">
        <ul className={style.tabs__list}>
          <li className={classNames(style.tabs__item, style.active)}><button className={style.tabs__btn}>Квартиры на сутки</button></li>
          <li className={style.tabs__item}><button className={style.tabs__btn} >Коттеджи и усадьбы</button></li>
          <li className={style.tabs__item}><button className={style.tabs__btn} >Бани и сауны</button></li>
          <li className={style.tabs__item}><button className={style.tabs__btn} >Авто напрокат</button></li>
        </ul>
        <div className={style.settings}>
            <ul className={style.settings__list}>
              <li className={style.settings__item}>
                <div className={style.settings__title}>Город</div>
              <div className={style.elem}>
                <select className="option">
                  <option value="minsk">{MINSK_CITY}</option>
                  <option value="minsk">Город 2</option>
                  <option value="minsk">Город 3</option>
                  <option value="minsk">Город 4</option>
                  <option value="minsk">Город 5</option>
                </select>
              </div>
            </li>
              <li className={style.settings__item}>
                <div className={style.settings__title}>Комнаты</div>
              <div className={style.elem}>
                <select className="option">
                  <option value="minsk">1</option>
                  <option value="minsk">2</option>
                  <option value="minsk">3</option>
                  <option value="minsk">4</option>
                  <option value="minsk">5</option>
                </select>
              </div>
            </li>
              <li className={style.settings__item}>
                <div className={style.settings__title}>Цена за сутки (BYN)</div>
              <div className={style.elem}>
                <input type="text" className={style.input} placeholder='от' />
                <span className='dash'>-</span>
                <input type="text" className={style.input} placeholder='до' />
              </div>
            </li>
              <li className={style.settings__item}>
              <div className={style.elem}>
                  <button className={style.settings__btn_transparent}>
                    <span className={style.settings__text}>Больше опций</span>
                  <IconSettings className={style.settings__icon} />
                </button>
              </div>
            </li>
              <li className={style.settings__item}>
              <div className={style.elem}>
                  <button className={style.settings__btn_transparent}>
                    <span className={style.settings__text}>На карте</span>
                  <IconPointer className={style.settings__icon} />
                </button>
              </div>
                <button className={style.settings__btn_color}>
                  <span>Показать</span> 
                  <IconArrow className={style.settings__icon} />
                </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  ) 
}

export default Hero;