const Card = ({image, alt, children}) => {
  return(
    <div className={'card'}>
      {
        image &&
        <div className={'card-image'}>
          <figure className={'image is-4by3'}>
            <img src={image} alt={alt}/>
          </figure>
        </div>
      }
      <div className="card-content">
        <div className="content">
          {[children]}
        </div>
      </div>
    </div>
  );
}

export default Card;