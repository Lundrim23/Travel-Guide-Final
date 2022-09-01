import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const CheckboxElement = ({ changeChecked, element }) => {
  const { checked, label, id } = element;
  return (
    <div>
      <FormControlLabel 
      className='!m-0 !p-0 flex flex-row-reverse justify-between w-full'
        control={
          <Checkbox
            color='default'
            size='small'
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
        }
        label={<span className='text-sm'>{label}</span>}
      />
    </div>
  );
};

export default CheckboxElement;
