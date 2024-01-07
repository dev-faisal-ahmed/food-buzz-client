import { Hero } from './hero';
import { Instruction } from './instruction';
import { NewsLetter } from './news-letter';
import { PopularFoods } from './popular-foods';

export function HomePage() {
  return (
    <>
      <Hero />
      <PopularFoods />
      <Instruction />
      <NewsLetter />
    </>
  );
}
