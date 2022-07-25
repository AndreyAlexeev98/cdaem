import IconManyPoints from '../shared/icons/many-points/many-points';
import CardsNav from '../Cards-nav/Cards-nav';
import MainMenu from '../Main-menu/Main-menu';


import style from './Nav-section.module.scss';

const NavSection = () => {
  return (
    <div className={style.root}>
      <div className={style.block}>
        <CardsNav className={style.cards_nav} />
        <MainMenu />
      </div>
      <IconManyPoints className={style.decor}/>
    </div>
  )
}

export default NavSection;