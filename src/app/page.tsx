import BestSellers from './components/HomeComponents/BestSellers';
import Cafes from './components/HomeComponents/Cafes';
import Hero from './components/HomeComponents/Hero';
import Journey from './components/HomeComponents/Journey';
import Press from './components/HomeComponents/Press';
import ShopCategory from './components/HomeComponents/ShopCategory';
import Subscribe from './components/HomeComponents/Subscribe';
// import styles from './page.module.scss';

export const metadata = {
  title: "Spicy Brew - HomePage",
  description: "Spicy Brew - The best coffee you'll ever have"
};

export default function Home() {
  return (
    <>
      <Hero/>
      <ShopCategory />
      <BestSellers />
      <Cafes />
      <Journey />
      <Subscribe />
      <Press />
    </>
  )
}