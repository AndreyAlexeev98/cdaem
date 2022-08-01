import BreadCrumbs from '../shared/Bread-crumbs/Bread-crumbs';

import style from './Section-hashtags.module.scss';

const Hashtags = () => {

  const listHashtags = [ 
  { id: "1", name: "Недорогие"},
  { id: "2", name: "1-комнатные"}, 
  { id: "3", name: "2-комнатные"}, 
  { id: "4", name: "3-комнатные"}, 
  { id: "5", name: "4-комнатные"}, 
  { id: "6", name: "5-комнатные"}, 
  { id: "7", name: "Заводской р"}, 
  { id: "8", name: "Ленинский р"},  
  { id: "9", name: "Московский р"}, 
  { id: "10", name: "Октябрьский р"}, 
  { id: "11", name: "Партизанский р"}, 
  { id: "12", name: "Первомайский р"}, 
  { id: "13", name: "Советский р"}, 
  { id: "14", name: "Фрунзенский р"}, 
  { id: "15", name: "Центральный р"} ]

  return (
    <section className={style.root}>
      <div className="container">
        <BreadCrumbs />
        <div className={style.title}>Аренда квартир на сутки в Минске</div>
        <div className={style.text}>Рекомендуем посмотреть</div>
        <ul className={style.list}>
          {
            listHashtags.map((item) => (
              <li className={style.item} key={item.id}>
                <button className={style.btn}>{item.name}</button>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Hashtags;