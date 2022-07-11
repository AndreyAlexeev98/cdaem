import IconVisa from '../../images/icons/payment/visa.png';
import IconWebpay from '../../images/icons/payment/webpay.png';
import IconVisaVer from '../../images/icons/payment/verified-by-visa.png';
import IconMastercard from '../../images/icons/payment/mastercard.png';
import IconSecurecode from '../../images/icons/payment/securecode.png';
import IconBelkart from '../../images/icons/payment/belkart.png';

import style from './payment.module.scss'

const Payment = () => {
  return (
      <ul className={style.list}>
        <li className={style.item}>
          <img src={IconVisa} className="payment__img" alt="visa" />
        </li>
        <li className={style.item}>
          <img src={IconWebpay} className="payment__img" alt="webpay" />
        </li>
        <li className={style.item}>
          <img src={IconVisaVer} className="payment__img" alt="visa vericify" />
        </li>
        <li className={style.item}>
          <img src={IconMastercard} className="payment__img" alt="mastercard" />
        </li>
        <li className={style.item}>
          <img src={IconSecurecode} className="payment__img" alt="securecode" />
        </li>
        <li className={style.item}>
          <img src={IconBelkart} className="payment__img" alt="belkart" />
        </li>
      </ul>
  )
}

export default Payment;