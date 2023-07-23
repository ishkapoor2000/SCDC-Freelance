import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Test.css";
import movie from "./FB1.mp4";
export default class Testimonials extends Component {
  handleVideoEnded = (event) => {
    // Restart the video when it finishes playing
    event.target.currentTime = 0;
    event.target.play();
  };
  render() {
    return (
      <>
  <div className="header_car">
    What our customer are saying
  </div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        stopOnHover={false}
      >
        <div className="carousel_scdc">
          <div className="video_sec">
            <video width="280" height="180" controls autoplay  onEnded={this.handleVideoEnded}>
              <source src={movie} type="video/mp4" />
            </video>
          </div>
          <div className="content_sec">

              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
          
          </div>
        </div>
        <div className="carousel_scdc">
          <div className="video_sec">
            <video width="280" height="180" controls autoplay  onEnded={this.handleVideoEnded}>
              <source src={movie} type="video/mp4" />
            </video>
          </div>
          <div className="content_sec">

              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
          
          </div>
        </div>
        <div className="carousel_scdc">
          <div className="video_sec">
            <video width="280" height="180" controls autoplay  onEnded={this.handleVideoEnded}>
              <source src= {movie} type="video/mp4" />
            </video>
          </div>
          <div className="content_sec">

              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
          
          </div>
        </div>
      </Carousel>
      </>
    );
  }
}
