import React from 'react'
import Header from "../components/home/Header";
import Followers from "../components/home/Followers";
import Overview from "../components/home/Overview";

export default function Home() {
  return (
    <>
        <section className="px-8 py-8 dark:bg-slate-900 h-full sm:px-36">
            <div className=" bg-slate-100 dark:bg-slate-800 h-52 w-full absolute top-0 left-0 rounded-b-3xl" style={{zIndex: 0,}}></div>
            <Header />
            <Followers />
            <Overview />
      </section>
    </>
  )
}
