import classNames from "classnames";

import IconPointer from '../icons/Pointer/Pointer'

import style from './Menu.module.scss'

const Menu = ( { contextClass, list } ) => {
  return (
    <ul className={ classNames(style.root , contextClass)}>
      {
        list.map((item) => (
          <li className={style.item} key={item.id}>
            <div className={style.name}>
              <span>{item.name}</span>
              {item.type === 'map' ? <IconPointer className={style.icon}/> : ''} 
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default Menu;