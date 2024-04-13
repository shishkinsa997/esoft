// import { useState } from 'react'
import React, { useEffect } from 'react';

function Name() {
  useEffect(() => {
    document.querySelectorAll('.interactive-letter').forEach(letter => {
      letter.addEventListener('mouseenter', function(e) {
        const dx = (Math.random() - 0.5) * 100;
        const dy = (Math.random() - 0.5) * 100;
        letter.style.transform = `translate(${dx}px, ${dy}px)`;
        setTimeout(() => {
          letter.style.transform = 'translate(0px, 0px)';
        }, 1500);
      });
    });
  },);

  return (
    <div className="container">
      <div className="dynamic-text">
        <span className="interactive-letter">S</span>
        <span className="interactive-letter">е</span>
        <span className="interactive-letter">r</span>
        <span className="interactive-letter">g</span>
        <span className="interactive-letter">e</span>
        <span className="interactive-letter">y</span>
        <span className="interactive-letter">&nbsp;</span>
        <span className="interactive-letter">S</span>
        <span className="interactive-letter">h</span>
        <span className="interactive-letter">i</span>
        <span className="interactive-letter">s</span>
        <span className="interactive-letter">h</span>
        <span className="interactive-letter">k</span>
        <span className="interactive-letter">i</span>
        <span className="interactive-letter">n</span>
      </div>
    </div>
  );
}

export default Name
