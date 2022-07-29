import React from 'react';

import IconArrow from '../shared/icons/Arrow/Arrow';

import style from './Main-menu-item.module.scss';

const maxItemsView = 4;

const MainMenuItem = ( { data } ) => {

  const refList = React.createRef();
  const refBtn = React.createRef();

  const addClass = () => {
    refList.current.classList.toggle(style.open);
    refBtn.current.classList.toggle(style.open_btn);
  }

  return (
    <li className={style.root}>
      <div className={style.title}>{data.title}</div>
      <ul ref={refList} className={(data.items.length > maxItemsView) ? style.list_long : style.list}>
        {
          data.items.map((item) => ( 
            <li className={style.item} key={item.id}>
              <a href="#" className={style.link}>{item.name}</a>
              <span className={style.value}>{item.value}</span>
            </li>
          ))
        }
      </ul>
      { (data.items.length > maxItemsView) &&
        <button onClick={addClass} ref={refBtn} className={style.more_btn}>
          <span>Еще</span>
          <IconArrow className={style.more_btn_icon} />
        </button>
      }
    </li>
  )
}

export default MainMenuItem;