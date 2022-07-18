const Alert = ({color, children}) => {
  return(
    <div className={`notification ${color}`}>
      <button className={'delete'}/>
      {children}
    </div>
  )
}

export default Alert;