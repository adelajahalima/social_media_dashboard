import React from 'react'



export default function FollowersCard(props) {
  return <>

    <article className={`bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700 relative border-t-4 ${props.borderColor}`}>
        <div 
        className='absolute h-1 w-full rounded-tl-xl rounded-tr-xl -top-1 left-0' 
        style={{ background: props.gradient }}>
        </div>

        <ul className='flex items-center justify-center text-center'>
          <li><img src={props.socialIcon} alt={props.socialIconName} className='mr-2'/></li>
          <li className='text-sm text-slate-600 font-bold dark:text-slate-400'>{props.username}</li>
        </ul>
        <h2 className='text-5xl font-bold text-slate-800 text-center my-5 dark:text-white'>{props.followersNum}<span className='text-sm block text-slate-600 font-normal uppercase tracking-widest dark:text-slate-400'>{props.status}</span></h2>
        <p className={`text-center ${props.pTextColor} flex items-center justify-center text-sm font-bold`}>
          <img src={props.upOrDownIcon} alt='' className='mr-2 w-3'/>
          {props.upOrDown}
      </p>
    </article>
        
    
  </>
  
}
