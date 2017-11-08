import React from 'react';

const Select = ({list, label, type, handler}) => {
  return (
    <div>
      <span>{label}</span>
      <select onChange={handler}>
        {
          list.map(item => {
            return <option key={item.id} value={item.id}>{item[type]}</option>
          })
        }
      </select>
    </div>
  )
}

export default Select;