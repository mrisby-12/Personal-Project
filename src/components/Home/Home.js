import React, { Component } from "react";
import "./Home.css";


class Home extends Component {
  render() {
    return (
      <div>
        <div className="image-container">
          <div className="page-title">Hello World!</div>
          <div className="about">
            <i>A site designed to "Inspire" Developers and Designers </i><br />
            <hr />Visit StoryCards to vote on your favorite websites <br />Take
            a look at Resources for tips & tricks of the trade
          </div>
          <div className="gallery">
            <div className="gallery-item">
              <img
                className="gallery-image one animated"
                src="https://firebasestorage.googleapis.com/v0/b/personal-project-3598c.appspot.com/o/Home%20Images%2Fbinary-3044663__480.jpg?alt=media&token=e2779373-0c02-4190-8525-f06deaa0a95f"
                alt="Binary One Null Space Universe Planet Earth"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image two animated"
                src="https://firebasestorage.googleapis.com/v0/b/personal-project-3598c.appspot.com/o/Home%20Images%2Fwood-3157395__480two.jpg?alt=media&token=39e1af1f-7db4-478d-9bbb-689976acf4da"
                alt="Wood Aerial Background Beverage Blog Blogger"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image three animated"
                src="https://firebasestorage.googleapis.com/v0/b/personal-project-3598c.appspot.com/o/Home%20Images%2Fcity-3175057__480three.jpg?alt=media&token=8dd3f778-47b4-46d8-b7d4-10b568b2719a"
                alt="City Skyline Community Social Media Monitor"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image four animated"
                src="https://firebasestorage.googleapis.com/v0/b/personal-project-3598c.appspot.com/o/Home%20Images%2Fcreate-3026190__480four.jpg?alt=media&token=42dc9fb9-1a14-450a-9b0b-d83fd32355ca"
                alt=""
              />
            </div>
            <div className="gallery-item">
              <iframe
                title="uniqueTitle"
                id="ytplayer"
                type="text/html"
                width="480"
                height="270"
                src="https://www.youtube.com/embed/KgMpKsp23yY?autoplay=1&controls=0&disablekb=0&enablejsapi=1&fs=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&amp;start=4&iv_load_policy=3"
                frameborder="0"
                allowfullscreen
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image five animated"
                src="https://firebasestorage.googleapis.com/v0/b/personal-project-3598c.appspot.com/o/Home%20Images%2Fsmartphone-3149992__480five.jpg?alt=media&token=7396b736-bfea-4e6e-ae04-4badae5c8fa0"
                alt="Smartphone Hand Technology Computer Company"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image six animated"
                src="https://firebasestorage.googleapis.com/v0/b/personal-project-3598c.appspot.com/o/Home%20Images%2Ftime-3216282__480six.jpg?alt=media&token=9ed7e9cf-961d-4f2f-b991-443f3088a1dc"
                alt="Time Time Management Stopwatch Keyboard Computer"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image seven animated"
                src="https://firebasestorage.googleapis.com/v0/b/personal-project-3598c.appspot.com/o/Home%20Images%2Fbackground-3048816__480seven.jpg?alt=media&token=9a1d4cbc-ac4c-44be-96cb-ed4c0de142df"
                alt="Background Waters Computer Laptop Ocean Collage"
              />
            </div>
            <div className="gallery-item">
              <img
                className="gallery-image eight animated"
                src="https://firebasestorage.googleapis.com/v0/b/personal-project-3598c.appspot.com/o/Home%20Images%2Flight-2565575__480eight.jpg?alt=media&token=5f6fef10-2e74-4cd8-adc6-c54cf7fa9a8b"
                alt="bronze light bulb"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
