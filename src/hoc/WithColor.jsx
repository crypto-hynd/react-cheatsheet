const WithColor = (Component, style) => ({...props}) => {
  return(
    <div style={style}>
      <Component {...props}/>
    </div>
  );
};

export default WithColor;