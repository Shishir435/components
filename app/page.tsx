"use client";
import HslaPicker from "@/components/HslaPicker";
import { RecoilRoot } from "recoil";
export default function Home() {
  return (
    <main className={`h-screen w-full flex justify-center items-center`}>
      <RecoilRoot>
        <HslaPicker />
      </RecoilRoot>
    </main>
  );
}
