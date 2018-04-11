import React, { Component } from "react";
import "./Home.css";
import StoryCard from "../StoryCard/StoryCard";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="image-container">
          <div className="page-title animated">Hello World!</div>
          <div className="gallery">
            <div className="gallery-item">
              <img
                className="gallery-image one animated"
                src="https://cdn.pixabay.com/photo/2017/12/28/08/39/binary-3044663__480.jpg
"
                alt="Binary One Null Space Universe Planet Earth"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image two animated"
                src="https://cdn.pixabay.com/photo/2018/02/16/10/52/wood-3157395__480.jpg
"
                alt="Wood Aerial Background Beverage Blog Blogger"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image three animated"
                src="https://cdn.pixabay.com/photo/2018/02/23/09/13/city-3175057__480.jpg"
                alt="City Skyline Community Social Media Monitor"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image four animated"
                src="https://cdn.pixabay.com/photo/2017/12/18/13/59/create-3026190__480.jpg"
                alt=""
              />
            </div>
            <div className="gallery-item">
              <iframe
                id="ytplayer"
                type="text/html"
                width="480"
                height="270"
                src="https://www.youtube.com/embed/KgMpKsp23yY?autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&amp;start=4&iv_load_policy=3"
                frameborder="0"
                allowfullscreen
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image five animated"
                src="https://cdn.pixabay.com/photo/2018/02/13/06/59/smartphone-3149992__480.jpg"
                alt="Smartphone Hand Technology Computer Company"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image six animated"
                src="https://cdn.pixabay.com/photo/2018/03/11/09/25/time-3216282__480.jpg"
                alt="Time Time Management Stopwatch Keyboard Computer"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image seven animated"
                src="https://cdn.pixabay.com/photo/2017/12/29/22/10/background-3048816__480.jpg"
                alt="Background Waters Computer Laptop Ocean Collage"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image eight animated"
                src="https://cdn.pixabay.com/photo/2017/08/01/13/47/light-2565575__480.jpg"
                alt=""
              />
            </div>
          </div>
          <hr />
          <StoryCard />
        </div>
      </div>
    );
  }
}

export default Home;
