import Image from "next/image";

import Button from "../components/Button";

export default function Home() {
  return (
    <main className="flex border-red min-h-screen flex-col items-center justify-between p-24">
      <div className="border-red w-3/5 h-full">
        <Button>Continue</Button>
      </div>
      <p className="text-[#4B5563] font-medium text-[16px]  text-center">
        Crafted with 💖 by Huge End Proframmers
      </p>
    </main>
  );
}
