import { Link } from "react-router-dom";
import classNames from "classnames";

import IconUser from '../icons/User/User';
import IconHeart from '../icons/Heart/Heart';
import IconPointer from '../icons/Pointer/Pointer';
import IconMetro from '../icons/Metro/Metro';
import IconEllipse from '../icons/Ellipse/Ellipse';
import IconViber from '../icons/Viber/Viber';
import IconWhatsApp from '../icons/WhatsApp/WhatsApp';
import IconMail from '../icons/Mail/Mail';

import style from './Rent-cards.module.scss';

const RentCards = ({cards, btn_favorite}) => {
  return (
    <ul className={style.list}>
      {
        cards.map((item) => (
          <li className={style.item} key={item.id}>
            <div className={style.card}>
              <div className={style.img_bg}>
                <div className={style.status}>{item.status}</div>
                <img className={style.img} src={item.img} alt={`Квартира по адресу ${item.address}`} />
              </div>
              <div className={style.content}>
                <div className={style.body}>
                  <div className={style.row}>
                    <div className={style.prise}>
                      <span>{item.price}</span>
                      <span>{item.currency}</span>
                      <div className={style.prise__subtitle}>за сутки</div>
                    </div>
                    <ul className={style.params}>
                        { item.places && 
                          <li className={style.params__item}>
                            <IconUser className={style.params__icon} />
                            <span>{item.places}</span>
                          </li>
                        }
                        { item.rooms && 
                          <li className={style.params__item}>
                            <span>{item.rooms} комн.</span>
                          </li>
                        }
                        { item.space && 
                          <li className={style.params__item}>
                            <span>{item.space} м<sup>2</sup></span>
                          </li>
                        }
                    </ul>
                  </div>
                  <div className={style.row}>
                    <div className={style.address}>
                      <div className={style.block}>
                        <IconPointer className={style.icon_pointer} />
                        <span>{item.address}</span>
                      </div>
                      <div className={style.inline}>
                        <IconMetro className={style.icon_metro} />
                        <span>{item.stationMetro}</span>
                      </div>
                      <div className={style.inline}>
                        <IconEllipse className={style.icon_ellipse} />
                        <span>{item.district}</span>
                      </div>
                    </div>
                  </div>
                  <div className={style.row}>
                    <div className={style.desc}>{item.description}</div>
                  </div>
                </div>
                <div className={style.footer}>
                  {
                    btn_favorite &&
                    <button className={style.btn_favorite}><IconHeart className={style.icon_favorites} /></button>
                  }
                  <div className={style.wrap}>
                    <button className={style.btn_contacts}>
                      <span>Контакты</span>
                    </button>
                    <div className={style.popup}>
                      <img src={item.ownerAvatar} alt={`avatar ${item.ownerName}`} className={style.popup__image} />
                      <div className={style.popup__subtitle}>Владелец</div>
                      <div className={style.popup__name}>{item.ownerName}</div>
                      <a href={`tel:${item.ownerPhone}`} className={style.popup__tel}>{item.ownerPhone}</a>
                      <a href={`mailto:${item.ownerEmail}`} className={style.popup__mail}>{item.ownerEmail}</a>
                      <div className={style.messangers}>
                        <a href={item.ownerWhatsViber} className={classNames(style.messangers__link, style.messangers__link_viber)}><IconViber width='16px' height='16px' /></a>
                        <a href={item.ownerWhatsViber} className={classNames(style.messangers__link, style.messangers__link_whatsapp)}><IconWhatsApp width='16px' height='16px' /></a>
                        <a href={item.ownerWhatsViber} className={classNames(style.messangers__link, style.messangers__link_mail)}><IconMail width='18px' height='15px' /></a>
                      </div>
                    </div>
                  </div>
                  <Link className={style.link} to="#">Подробнее</Link>
                </div>
              </div>
            </div>
          </li>
        ))
      }
  </ul>
  )
}

export default RentCards;