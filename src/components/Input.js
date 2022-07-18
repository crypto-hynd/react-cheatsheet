const Input = (
  {label, color, value, type, size, placeholder, isError, onChange, ...props}
) => {
  return(
    <div className={'field is-inline-block'}>
      <label className={'label is-inline'}>{label}</label>
      <input
        value={value}
        className={`input ${color} ${size} ${isError && 'is-danger'}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default Input;