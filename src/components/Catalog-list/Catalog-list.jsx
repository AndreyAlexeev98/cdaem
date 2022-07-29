import { Link } from 'react-router-dom';

import Pagination from '../Pagination/Pagination';
import Share from '../Component-share/Share'
import IconList from '../shared/icons/List/List';
import IconTable from '../shared/icons/Table/Table';
import IconPointer from '../shared/icons/Pointer/Pointer';
import RentListData from "../../data/rent-cards";
import RentCards from "../shared/Rent-cards/Rent-cards"

import style from './Catalog-list.module.scss';

const CatalogList = () => {
  return (
    <div className={style.root}>
      <div className={style.head}>
        <select>
          <option value='1'>По умолчанию</option>
          <option value='1'>По возврастанию цены</option>
          <option value='1'>По убыванию</option>
        </select>
        <div className={style.controls}>
          <button className={style.btn}>
            <IconList className={style.icon}/>
            <span>Список</span>
          </button>
          <button className={style.btn}>
            <IconTable className={style.icon} />
            <span>Плитки</span>
          </button>
        </div>
        <Link className={style.link} to='/map'>
          <IconPointer className={style.link__icon} />
          <span>Показать на карте</span>
        </Link>
      </div>
      <div className={style.title}>Найдено {RentListData.length} результата</div>
      <RentCards cards={RentListData} btn_favorite={true} />
      <Share />
    </div>
  )
}

export default CatalogList;