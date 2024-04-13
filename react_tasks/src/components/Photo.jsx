// import { useState } from 'react'
import React from 'react';
import photo from '../assets/icon.png'

function Photo() {
  return (
    <div>
      <a href="../assets/icon.png" target="_blank">
        <img src={photo} className="photo" />
      </a>
    </div>
  );
}

export default Photo
