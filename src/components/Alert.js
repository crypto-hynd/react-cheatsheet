const Alert = ({msg, type}) => {
  return(
    <div className={`notification ${type}`}>
      <button className={'delete'}/>
      {msg}
    </div>
  );
}

export default Alert;