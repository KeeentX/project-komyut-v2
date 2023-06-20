import Image from 'next/image'
import Destination from "@/app/components/departure";
import Logo from "@/app/components/logo";
import Departure from "@/app/components/departure";

export default function Home() {
  return (
    <main>
        <Logo/>
        <Departure/>
    </main>
  )
}
