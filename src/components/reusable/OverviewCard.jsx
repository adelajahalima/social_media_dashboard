import React from 'react'

export default function OverviewCard(props) {
  return (
    <>
        <article className='bg-slate-200 dark:bg-slate-800 p-5 rounded shadow shadow-slate-50 dark:shadow-slate-700'>
            <ul className='flex items-center justify-between mb-5'>
                <li className='text-slate-600 font-bold dark:text-slate-400'>{props.status}</li>
                <li><img src={props.socialIcon} alt={props.socialIconName}/></li>
            </ul>
            <ul className='flex items-center justify-between'>
                <li className='font-bold text-slate-800 text-3xl dark:text-white'>{props.value}</li>
                <li className={`flex items-center ${props.textColor} font-bold text-sm`}>
                <img src={props.upOrDownIcon} alt='' className='w-3 mr-2'/>
                {props.upOrDownPercent}
                </li>
            </ul>
        </article>
    </>
  )
}
