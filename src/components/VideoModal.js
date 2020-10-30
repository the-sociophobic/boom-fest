import React from 'react'


export default props =>
  props.show &&
    <div
      className="video-modal"
      onClick={() => props.hide()}
    >
      <div className="video-modal__container">
        <div className="video-modal__container__abs-container">
          <iframe
            title="video"
            src="https://www.youtube.com/embed/YgrfRoEcKxA?autoplay=1"
            frameborder="0"
            allow="accelerometer;
            autoplay;
            encrypted-media;
            gyroscope;
            picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
