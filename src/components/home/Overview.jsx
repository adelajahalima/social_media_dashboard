import React from 'react';
import facebook from "../../images/icon-facebook.svg"
import twitter from "../../images/icon-twitter.svg"
import instagram from "../../images/icon-instagram.svg"
import youtube from "../../images/icon-youtube.svg"
import arrowup from "../../images/icon-up.svg"
import arrowdown from "../../images/icon-down.svg"
import OverviewCard from '../reusable/OverviewCard';

export default function Overview() {
  return <>
    <h2 className=' text-slate-600 dark:text-white font-bold mb-5 text-2xl md:text-3xl'>Overview - Today</h2>
    <section className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        <OverviewCard 
            status="Pages View"
            socialIcon={facebook}
            socialIconName="Facebook icon"
            value="87"
            textColor="text-emerald-500"
            upOrDownIcon={arrowup}
            upOrDownPercent="3%"
        />  
         <OverviewCard 
            status="Likes"
            socialIcon={facebook}
            socialIconName="Facebook icon"
            value="52"
            textColor="text-rose-600"
            upOrDownIcon={arrowdown}
            upOrDownPercent="2%"
        /> 
         <OverviewCard 
            status="Likes"
            socialIcon={instagram}
            socialIconName="Instagram icon"
            value="5462"
            textColor="text-emerald-500"
            upOrDownIcon={arrowup}
            upOrDownPercent="2257%"
        /> 
         <OverviewCard 
            status="Profile View"
            socialIcon={instagram}
            socialIconName="Instagram icon"
            value="52k"
            textColor="text-emerald-500"
            upOrDownIcon={arrowup}
            upOrDownPercent="1375%"
        /> 
         <OverviewCard 
            status="Retweets"
            socialIcon={twitter}
            socialIconName="Twitter icon"
            value="117"
            textColor="text-emerald-500"
            upOrDownIcon={arrowup}
            upOrDownPercent="303%"
        /> 
         <OverviewCard 
            status="Likes"
            socialIcon={twitter}
            socialIconName="Twitter icon"
            value="507"
            textColor="text-emerald-500"
            upOrDownIcon={arrowup}
            upOrDownPercent="553%"
        /> 
         <OverviewCard 
            status="Likes"
            socialIcon={youtube}
            socialIconName="Youtube icon"
            value="107"
            textColor="text-rose-600"
            upOrDownIcon={arrowdown}
            upOrDownPercent="19%"
        /> 
         <OverviewCard 
            status="Total Views"
            socialIcon={youtube}
            socialIconName="Youtube icon"
            value="1407"
            textColor="text-rose-600"
            upOrDownIcon={arrowdown}
            upOrDownPercent="12%"
        /> 
    </section>
  </>
  
}
