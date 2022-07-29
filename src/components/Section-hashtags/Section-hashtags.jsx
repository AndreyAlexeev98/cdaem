import BreadCrumbs from '../shared/Bread-crumbs/Bread-crumbs';

import style from './Section-hashtags.module.scss';

const Hashtags = () => {

  const listHashtags = [ 'Недорогие', '1-комнатные', '2-комнатные', '3-комнатные', '4-комнатные', '5-комнатные', 'Заводской р.', 'Ленинский р.',  'Московский р.', 'Октябрьский р.', 'Партизанский р.', 'Первомайский р.', 'Советский р.', 'Фрунзенский р.', 'Центральный р.' ]

  return (
    <section className={style.root}>
      <div className="container">
        <BreadCrumbs />
        <div className={style.title}>Аренда квартир на сутки в Минске</div>
        <div className={style.text}>Рекомендуем посмотреть</div>
        <ul className={style.list}>
          {
            listHashtags.map((item) => (
              <li className={style.item}>
                <button className={style.btn}>{item}</button>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Hashtags;