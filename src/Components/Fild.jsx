import React from 'react';

const Fild = ({ inputLabel, type, placeholder, name, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{inputLabel}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} onChange={onChange}>
      </input>
    </div>
  );
};

export default Fild;
