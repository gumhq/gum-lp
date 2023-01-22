// Section Imports
import { Blocks } from '@/sections/blocks';
import { DefaultHead } from '@/sections/head';
import { Hero } from '@/sections/hero';
import { Legos } from '@/sections/legos';
import { Why } from '@/sections/why';

export default function Home() {
  return (
    <main className="main-page">
      <DefaultHead />
      <Hero />
      <Blocks />
      <Why />
      <Legos />
    </main>
  )
};