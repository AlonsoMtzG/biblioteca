import { Nav } from '@/components/Nav';
import { HomeBook } from '@/pages/Home';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Nav />
      <HomeBook />
    </div>
  );
}
