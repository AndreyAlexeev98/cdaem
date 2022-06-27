import iconVk from '../../images/icons/socials/vk-purple.svg';
import iconFb from '../../images/icons/socials/facebook-purple.svg';
import iconViber from '../../images/icons/messengers/viber-purple.svg';
import iconTelegram from '../../images/icons/messengers/telegram-purple.svg';
import iconWhatsApp from '../../images/icons/messengers/whatsapp-purple.svg';

const ShareComponent = () => {

  const sharedElems = [
    {icon: iconVk, link: 'https://vk.com', alt:'vk', id: '1'},
    {icon: iconFb, link: 'https://fb.com', alt:'vk', id: '2'},
    {icon: iconViber, link: 'viber://add?number=#', alt:'viber', id: '3'},
    {icon: iconTelegram, link: 'https://t.me/#', alt:'telegram', id: '4'},
    {icon: iconWhatsApp, link: 'whatsapp://send?phone=#&text=#', alt:'whats app', id: '5'},
  ];

  return (
    <div className="share">
      <div className="share__title">Поделиться</div>
      <ul className="share__list">
        {
          sharedElems.map((item, i) => (
            <li className="share__item"key={item.id}><a href={item.link} target="_blank" className="share__link"><img className="share__img" src={item.icon} alt={item.alt} /></a></li>
          ))
        }
      </ul>
    </div>
  )
}

export default ShareComponent;