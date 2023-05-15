import BestSellers from './components/HomeComponents/BestSellers';
import Hero from './components/HomeComponents/Hero';
import Journey from './components/HomeComponents/Journey';
import ShopCategory from './components/HomeComponents/ShopCategory';
import styles from './page.module.scss';

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
      {/* <Subscribe /> */}
      <Journey />
      {/* <Cafes /> */}
      {/* <Press /> */}
    </>
  )
}