import React from 'react'
import FollowersCard from '../reusable/FollowersCard';
import facebook from "../../images/icon-facebook.svg"
import arrowup from "../../images/icon-up.svg"
import twitter from "../../images/icon-twitter.svg"
import instagram from "../../images/icon-instagram.svg"
import youtube from "../../images/icon-youtube.svg"
import arrowdown from "../../images/icon-down.svg"

export default function Followers() {
  return (
    <section className='relative z-10 py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
      <FollowersCard
        gradient="none"
        borderColor="border-blue-500"
        socialIcon={facebook}
        socialIconName="Facebook Icon"
        username="@nathanf"
        status="Followers"
        followersNum="1987"
        pTextColor="text-emerald-500"
        upOrDownIcon={arrowup}
        upOrDown="12 today"
      />
      <FollowersCard 
        gradient="none"
        borderColor="border-blue-500"
        socialIcon={twitter}
        socialIconName="Twitter Icon"
        username="@nathanf"
        status="Followers"
        followersNum="1044"
        pTextColor="text-emerald-500"
        upOrDownIcon={arrowup}
        upOrDown="99 today"
      />
      <FollowersCard 
        gradient='linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%))'
        socialIcon={instagram}
        socialIconName="Facebook Icon"
        username="@realnathanf"
        status="Followers"
        followersNum="11k"
        pTextColor="text-emerald-500"
        upOrDownIcon={arrowup}
        upOrDown="1099 today"
      />
      <FollowersCard 
        gradient="none"
        borderColor="border-red-700"
        socialIcon={youtube}
        socialIconName="Facebook Icon"
        username="Nathan F."
        status="subscribers"
        followersNum="8239"
        pTextColor="text-rose-600"
        upOrDownIcon={arrowdown}
        upOrDown="144 today"
      />
    </section>
  )
}
