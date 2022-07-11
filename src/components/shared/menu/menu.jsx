import classNames from "classnames";

import IconPointer from '../icons/pointer/pointer'

import style from './menu.module.scss'

const Menu = (props) => {
  return (
    <ul className={ classNames(style.root , props.contextClass)}>
      {
        props.list.map((item) => (
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