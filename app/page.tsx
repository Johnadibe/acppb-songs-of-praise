import Head from 'next/head';
import SongBrowser from "@/components/SongBrowser";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>ACPPB Songs of Praise</title>
      </Head>

      <main>
        <SongBrowser />
      </main>
    </div>
  );
}
