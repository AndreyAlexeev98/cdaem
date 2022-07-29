import classNames from "classnames";

import IconSettings from '../shared/icons/Settings/Settings';
import IconArrow from '../shared/icons/Arrow/Arrow';

import style from './Filter.module.scss';

const Filter = () => {
  return (
    <div className={style.root}>
      <div className="container">
        <ul className={style.list}>
          <li className={style.item}>
            <div className={style.name}>Комнаты</div>
            <select>
              <option value="1">Выберите</option>
              <option value="2">1 комнатная</option>
              <option value="3">2 компатная</option>
              <option value="4">3 компатная</option>
              <option value="5">4 компатная</option>
            </select>
          </li>
          <li className={style.item}>
            <div className={style.name}>Цена за сутки (BYN)</div>
            <input type="text" style={{width:'50px'}} placeholder='от' />
            <span className={style.decor}>-</span>
            <input type="text" style={{width:'50px'}} placeholder='До' />
          </li>
          <li className={classNames(style.item, style.item_hover)}>
            <button className={style.btn_transparent}>
              <span className={style.btn_transparent__text}>Больше опций</span>
              <IconSettings className={style.btn_transparent__icon} />
            </button>
          </li>
          <li className={style.item}>
            <button className={style.btn_color} data-name='clear'>
              <span className={style.btn_color__text}>Очистить</span>
            </button>
            <button className={style.btn_color} data-name='view'>
              <span className={style.btn_color__text}>Показать объекты</span>
              <IconArrow className={style.btn_color__icon} />
            </button>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default Filter;