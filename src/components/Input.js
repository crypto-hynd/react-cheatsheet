import {forwardRef, useEffect} from "react";

const Input = forwardRef((
  {label, color, type, size, placeholder, isError, onChange, ...rest}, ref) => {

  return(
    <div className={'field is-inline-block'}>
      <label className={'label is-inline'}>{label}</label>
      <input
        ref={ref}
        className={`input ${color} ${size} ${isError && 'is-danger'}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
});

export default Input;