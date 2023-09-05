import React from 'react';

const ListItem = ({
  item: { coverSrc, title, description, serviceTime, rating },
}) => (
  <div className='listItem-wrap mb-2'>
    <img src={coverSrc} alt='' className='h-48 object-cover w-80 rounded-2xl'/>
    <header className='flex justify-between items-center my-4'>
      <h4>{title}</h4>
      <span className='text-xs p-2 bg-slate-200 rounded-xl'>{rating}/5</span>
    </header>
    <p className='text-xs font-semibold text-slate-500'>{description}</p>
  </div>
);

export default ListItem;
