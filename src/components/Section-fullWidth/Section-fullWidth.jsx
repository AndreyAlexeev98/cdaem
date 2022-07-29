import { Link } from 'react-router-dom';

import IconPointer from '../shared/icons/Pointer/Pointer';
import IconManyPoints from '../shared/icons/Many-points/Many-points';

import style from './Section-fullWidth.module.scss';

const SectionFullWidth = ( { className, decor, title, subtitle } ) => {
  return (
    <section className={style.root}>
      <div className={className}>
        { decor && <IconManyPoints className={style.decor}/> }
        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{subtitle}</div>
        <Link to='/' className={style.link}>
          <IconPointer className={style.link__icon} />
          <span className={style.link__text}>Открыть карту</span>
        </Link>
      </div>
    </section>
  )
}

export default SectionFullWidth;