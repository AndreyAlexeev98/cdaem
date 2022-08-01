import { Link } from "react-router-dom";
import classNames from "classnames";

import logo from '../../../images/icons/logo.svg';

import style from './Main-logo.module.scss'

const IconMainLogo = ( {name, contextClass, width = '134px', height='19px'} ) => {
  return (
    <Link to='/' className={classNames(style.root, contextClass)}>
      <img src={logo} 
        width={width}
        height={height} 
        className={style.img} 
        alt="logo" 
      />
      {
        name !== undefined && name !== '' &&
        <span className={style.desc}>{name}</span>
      }
          
    </Link>
  )
}

export default IconMainLogo;