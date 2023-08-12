import Hero from '@/app/_components/HomeComponents/Hero';
import ShopCategory from '@/app/_components/HomeComponents/ShopCategory';
import BestSellers from '@/app/_components/HomeComponents/BestSellers';
import Cafes from '@/app/_components/HomeComponents/Cafes';
import About from './_components/HomeComponents/About';
import Subscribe from '@/app/_components/HomeComponents/Subscribe';
import Press from '@/app/_components/HomeComponents/Press';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "Home",
  description: "Home page of the Spicy Brew Coffee App"
};

export default function Home() {
  return (
    <>
      <Hero/>
      <ShopCategory />
      <BestSellers />
      <Cafes />
      <About />
      <Subscribe />
      <Press />
    </>
  )
}