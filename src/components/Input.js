import {forwardRef, useEffect} from "react";

const Input = forwardRef((
  {label, color, value, type, size, placeholder, isError, onChange, ...props}, ref) => {
  useEffect(() => {
    ref.current.focus();
  }, [ref]);

  return(
    <div className={'field is-inline-block'}>
      <label className={'label is-inline'}>{label}</label>
      <input
        ref={ref}
        value={value}
        className={`input ${color} ${size} ${isError && 'is-danger'}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
});

export default Input;