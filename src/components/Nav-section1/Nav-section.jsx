import IconManyPoints from '../shared/icons/Many-points/Many-points';
import CardsNav from '../Cards-nav/Cards-nav';
import MainMenu from '../Main-menu/Main-menu';


import style from './Nav-section.module.scss';

const NavSection = () => {
  return (
    <section className={style.root}>
      <div className={style.block}>
        <CardsNav className={style.cards_nav} />
        <IconManyPoints className={style.decor}/>
      </div>
      <MainMenu />
    </section>
  )
}

export default NavSection;