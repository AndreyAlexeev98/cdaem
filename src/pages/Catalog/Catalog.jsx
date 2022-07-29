import Hashtags from '../../components/Section-hashtags/Section-hashtags';
import Filter from '../../components/Filter/Filter';
import CatalogList from '../../components/Catalog-list/Catalog-list';
import SectionFullWidth from '../../components/Section-fullWidth/Section-fullWidth';

import style from './Catalog.module.scss';

const Catalog = () => {
  return (
    <div>
      <Hashtags />
      <Filter />
      <div className="container">
        <CatalogList />
      </div>
      <SectionFullWidth className={style.catalog_section_full_width} title='Показать найденные квартиры на карте' subtitle='Ищите новостройки рядом с работой, парком или родственниками' />
    </div>
  )
};

export default Catalog;