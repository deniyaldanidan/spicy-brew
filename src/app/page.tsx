import BestSellers from '@/app/_components/HomeComponents/BestSellers';
import Cafes from '@/app/_components/HomeComponents/Cafes';
import Hero from '@/app/_components/HomeComponents/Hero';
import Journey from '@/app/_components/HomeComponents/Journey';
import Press from '@/app/_components/HomeComponents/Press';
import ShopCategory from '@/app/_components/HomeComponents/ShopCategory';
import Subscribe from '@/app/_components/HomeComponents/Subscribe';

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