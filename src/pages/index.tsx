// Section Imports
import { Blocks } from '@/sections/blocks';
import { DefaultHead } from '@/sections/head';
import { Hero } from '@/sections/hero';
import { Legos } from '@/sections/legos';
import { Why } from '@/sections/why';
import { Navbar } from '@/sections/navbar';
import { Footer } from '@/sections/footer';

export default function Home() {
  return (
    <main className="main-page">
      <DefaultHead />
      <Navbar />
      <Hero />
      <Blocks />
      <Why />
      <Legos />
      <Footer />
    </main>
  )
};