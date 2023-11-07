import { Nav } from '@/components/Nav';
import { HomeBook } from '@/pages/Home';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Nav />
      <HomeBook />
    </div>
  );
}
