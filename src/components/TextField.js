import React from 'react'

const TextField = ({ label, inputProps, onChange, value,placeholder }) => {
  return (
    <div>
      <div class="-mx-3 md:flex mb-6">
<div class="md:w-full px-3">
  <label class="block uppercase tracking-wide text-slate-500 text-xs font-bold mb-2" for="grid-email">
  {label}
  </label>
  <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-email" type="email" 
    {...inputProps}
    onChange={onChange}
    value={value}
    
  >
  </input>
  {/* <p class="text-blue-600 text-xs italic">Please fill out this field.</p> */}
</div>
</div>  
    </div>
  )
}

export default TextField