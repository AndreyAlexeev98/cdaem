import { NavLink } from 'react-router-dom';

import Hero from '../../components/hero/hero';
import NavSection from '../../components/Nav-section/Nav-section';

import style from './home.module.scss';

const Home = () => {
  return (
    <div >
      <div className='container'>
        <Hero />
        <NavSection />
      </div>
      <section className='advanced'></section>
      <div className='container'>
        <h1>Home page</h1>
      </div>
      
    </div>
  )
}

export default Home;