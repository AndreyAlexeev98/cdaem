import NewsLink from "../News-link/News-link";
import NewsListData from '../../data/news-list.js';
import picture from '../../images/pictures/about.png';
import IconManyPoints from '../shared/icons/Many-points/Many-points';

import style from "./Section-about.module.scss";

const SectionAbout = () => {
  return (
    <section className={style.root}>
      <div className={style.info}>
        <div className={style.subtitle}>ЧТО ТАКОЕ SDAEM.BY</div>
        <div className={style.title}>Квартира на сутки в Минске</div>
        <div>
          <div className={style.img_wrap}>
            <img className={style.img} src={picture} alt="Квартира в минске" />
            <IconManyPoints className={style.decor_icon} />
          </div>
          <div className={style.description}>
            <p className={style.paragraph}><b>Нужна квартира на сутки в Минске?</b> На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает более <strong>500 квартир</strong>. Благодаря удобной навигации вы быстро найдете подходящий вариант.</p>
            <p className={style.paragraph}>В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP с джакузи.</p>
            <p className={style.paragraph}>Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.</p>
          </div>
        </div>
      </div>
      <aside className={style.nav}>
        <NewsLink news={NewsListData}  />
      </aside>
    </section>
  )
}

export default SectionAbout;