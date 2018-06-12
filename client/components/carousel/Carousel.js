import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const getWatchArray = watches => {
  //console.log('mylog: ', someProps)
  const count = 6;
  const withImages = watches.filter(watch => watch.image);
  return withImages.slice(0, count - 1);
};

const WatchCarousel = props => {
  const watches = getWatchArray(props.watches);

  return (
    <Carousel className="watch-carousel">
      {watches.map(watch => (
        <Carousel.Item key={watch.id} className="carousel-item">
          <div className="carousel-item-inner">
            <Link to={`/watches/${watch.id}`}>
              <img className="carousel-img" src={watch.image} />
            </Link>
            <div className="carousel-item-info">
              <Link to={`/watches/${watch.id}`}>
                <h3 className="carousel-title">{watch.model}</h3>
              </Link>
              <Link to={`/watches/${watch.id}`}>
                <p className="carousel-description">
                  {watch.brand} -- {watch.price}
                </p>
              </Link>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default WatchCarousel;
