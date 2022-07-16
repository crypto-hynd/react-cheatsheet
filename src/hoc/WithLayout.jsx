const WithLayout = (Component) => ({...props}) => {
  return(
    <>
      <nav style={{padding: 20, backgroundColor: "lightcyan"}}>Navigation</nav>
      <div style={{padding: 50}}>
        <Component {...props}/>
      </div>
    </>
  );
}

export default WithLayout;