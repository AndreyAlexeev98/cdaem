import { Link } from "react-router-dom";
import classNames from "classnames";

import iconClients from '../../images/icons/clients.svg'; 
import iconAdsGoUp from '../../images/icons/ads-go-up.svg';
import IconArrow from "../shared/icons/Arrow/Arrow";
import IconManyPoints from '../shared/icons/Many-points/Many-points'

import style from "./Section.advantages.module.scss";

const SectionAdvantages = () => {
  return (
    <div className={style.root}>
      <ul className={style.list}>
        <li className={style.item}>
          <div className={style.head}>
            <div className={style.img_bg}>
              <img className={style.img} src={iconClients} alt="Привлечение клиентов" />
            </div>
            <div className={style.title}>Начните привлекать клиентов бесплатно!</div>
          </div>
          <div className={style.description}>Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно <strong>бесплатно создавать и публиковать</strong> объявления на сайте.</div>
          <Link to='/' className={style.link}><span>+ Разместить обьявления</span></Link>
        </li>
        <li className={style.item}>
          <div className={style.head}>
            <div className={style.img_bg}>
              <img className={style.img} src={iconAdsGoUp} alt="Поднятие вверх" />
            </div>
            <div className={style.title}>Поднимайте объявления</div>
          </div>
          <div className={style.description}>Вы в любое время можете <span className={style.bold}>поднимать</span> объявления <span className={style.bold}>вверх первой страницы</span>  каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.</div>
          <Link to='/' className={style.link}><span>Узнать стоимость услуги</span><IconArrow className={style.icon} /> </Link>
        </li>
        <li className={classNames(style.item, style.item_gold )}>
          <div className={style.title_gold}>Приоритет Gold</div>
          <div className={style.description_gold}>
            <p className={style.p}>Приоритетное размещение <span className={style.bold}>Gold </span>позволяет закрепить ваше объявление в верхней части каталога!</p>
            <p className={style.p}>Gold объявления <span className={style.bold}>перемещаются каждые 5 мин</span> на 1 позицию, что делает размещение одинаковым для всех.</p>
          </div>
          <Link to='/' className={classNames(style.link, style.link_gold)}><span>Еще о тарифе Gold</span><IconArrow className={style.icon} /></Link>
          <div className={style.decor}>
            <div className={style.decor__elem_big} />
            <div className={style.decor__elem_small} />
          </div>
        </li>
      </ul>
      <div className={style.decor_wrap}>
        <IconManyPoints className={style.decor_dots}/>
      </div>
      
    </div>

  )
}

export default SectionAdvantages;