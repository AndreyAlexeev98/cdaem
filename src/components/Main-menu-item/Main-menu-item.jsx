import React from 'react';

import IconArrow from '../shared/icons/arrow/arrow';

import style from './Main-menu-item.module.scss';

const maxItemsView = 4;

const MainMenuItem = (props) => {

  const refList = React.createRef();
  const refBtn = React.createRef();

  const addClass = () => {
    refList.current.classList.toggle(style.open);
    refBtn.current.classList.toggle(style.open_btn);
  }

  return (
    <li className={style.root}>
      <div className={style.title}>{props.data.title}</div>
      <ul ref={refList} className={(props.data.items.length > maxItemsView) ? style.list_long : style.list}>
        {
          props.data.items.map((item) => ( 
            <li className={style.item} key={item.id}>
              <a href="#" className={style.link}>{item.name}</a>
              <span className={style.value}>{item.value}</span>
            </li>
          ))
        }
      </ul>
      { (props.data.items.length > maxItemsView) &&
        <button onClick={addClass} ref={refBtn} className={style.more_btn}>
          <span>Еще</span>
          <IconArrow className={style.more_btn_icon} />
        </button>
      }

    </li>
  )
}

export default MainMenuItem;