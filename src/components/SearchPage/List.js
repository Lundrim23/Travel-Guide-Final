import React from 'react';
import ListItem from './ListItem';

const List = ({ list }) => (
  <div className='flex flex-row flex-wrap justify-center items-center content-between gap-y-5 gap-x-12'>
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
    </div>
);

export default List;
