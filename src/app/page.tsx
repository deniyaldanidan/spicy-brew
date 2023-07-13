import BestSellers from '@/app/_components/HomeComponents/BestSellers';
import Cafes from '@/app/_components/HomeComponents/Cafes';
import Hero from '@/app/_components/HomeComponents/Hero';
import Journey from '@/app/_components/HomeComponents/Journey';
import Press from '@/app/_components/HomeComponents/Press';
import ShopCategory from '@/app/_components/HomeComponents/ShopCategory';
import Subscribe from '@/app/_components/HomeComponents/Subscribe';
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
      <Journey />
      <Subscribe />
      <Press />
    </>
  )
}