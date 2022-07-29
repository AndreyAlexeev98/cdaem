import Hero from '../../components/Hero/Hero';
import NavSection from '../../components/Nav-section/Nav-section';
import SectionRent from '../../components/Section-rent/Section-rent';
import SectionFullWidth from '../../components/Section-fullWidth/Section-fullWidth';
import SectionAdvantages from '../../components/Section-advantages/Section-advantages';
import SectionAbout from '../../components/Section-about/Section-about';

import style from './Home.module.scss';

const Home = () => {
  return (
    <div >
      <div className='container'>
        <Hero />
        <NavSection />
        <SectionRent />
      </div>
      <SectionFullWidth className={style.home_section_full_width} decor='true' title='Поиск квартир на карте' subtitle='Ищите квартиры на сутки в центре города, возле парка или в живописном районе' />
      <div className='container'>
        <SectionAdvantages />
        <SectionAbout />
      </div>
      
    </div>
  )
}

export default Home;