import MainMenuItem from '../Main-menu-item/Main-menu-item'; 

import style from './Main-menu.module.scss';

const house = {
  title: 'Коттеджи и усадьбы', items: [
    { id: 1, name: 'Аггроусадьбы', value: 3567 },
    { id: 2, name: 'Коттеджи', value: 2032 },
    { id: 3, name: 'Загородный комплекс', value: 2302 },
    { id: 4, name: 'Базы отдыха', value: 110 },
    { id: 5, name: 'Аггроусадьбы', value: 3567 },
    { id: 6, name: 'Коттеджи', value: 2032 },
    { id: 7, name: 'Загородный комплекс', value: 2302 },
    { id: 8, name: 'Базы отдыха', value: 110 },
  ], id: 111
};

const places = {
  title: 'Коттеджи и усадьбы', items: [
    { id: 1, name: 'Коттеджи и усадьбы на о. Брасласких ' },
    { id: 2, name: 'Коттеджи и усадьбы (жилье) на Нарочи' },
    { id: 3, name: 'Коттеджи и усадьбы (жилье) у воды, на берегу, на озере' },
  ]  
};

const rooms = { 
  title: 'Квартиры', items: [
    { id: 1, name: 'Квартиры в Минске', value: 3567 },
    { id: 2, name: 'Квартиры в Гомеле', value: 2032 },
    { id: 3, name: 'Квартиры в Гродно', value: 2302 },
    { id: 4, name: 'Квартиры в Могилеве', value: 110 },
    { id: 5, name: 'Квартиры в Минске', value: 110 },
    { id: 6, name: 'Квартиры в Бресте', value: 110 },
    { id: 7, name: 'Квартиры в Витебске', value: 110 },
    { id: 8, name: 'Квартиры в Витебске', value: 110 },
  ], id: 222
};

const MainMenu = () => {
  return (
    <ul className={style.root}>
      <MainMenuItem data={rooms} />
      <MainMenuItem data={house} />
      <MainMenuItem data={places} />
    </ul>
  )
}

export default MainMenu;