const MusicComponent = ({ title, date, artis, image, populer }) => {
    return (
      <div className="music__wrapper">
        <div className="music__image">
          <img src={image} width={300} height={300} alt="pic" />
        </div>
        <div className="music__content">
          <div className="music__heading">
            <h2>Song</h2>
            <h2 className="music__title">{title}</h2>
          </div>
          <div className="music__info">
            <div className="music__detail"> 
              {artis} 
              <span className="music__titik"> . </span>
              <span className="music__date"> {date}</span>
              <span className="music__titik"> . </span>
              <span className="music__date"> {populer} Like</span>
            </div>
            

            
          </div>

        </div>

      </div>
    );
  };
  
  export default MusicComponent;