import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Douce & Luce</title>
      </Head>
      <div className="bg-[#fdfaf6] text-[#2f2f2f] min-h-screen font-serif">
        <header className="p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Douce & Luce Logo" className="h-16" />
          </div>
          <nav className="space-x-6 text-sm">
            <a href="#about" className="hover:underline">關於我們</a>
            <a href="#menu" className="hover:underline">甜點選單</a>
            <a href="#location" className="hover:underline">店鋪資訊</a>
          </nav>
        </header>
        <section className="text-center py-16 px-4 bg-[#fffdf9]">
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl font-bold mb-4">
            Where Sweetness Meets Light
          </motion.h2>
          <p className="max-w-xl mx-auto text-base leading-relaxed">
            在甜與光交會之地，Douce & Luce 為你呈現一場味覺與藝術交織的法義甜點饗宴。
          </p>
          <Button className="mt-6 rounded-2xl bg-[#e6d3c7] text-[#2f2f2f] hover:bg-[#dcbfb0]">立即預約</Button>
        </section>
      </div>
    </>
  );
}