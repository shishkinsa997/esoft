// import { useState } from 'react'
import React from 'react';
import Chips from "../components/Chips";

function Section() {
        function toggleSection(sectionId) {
            const section = document.getElementById(sectionId);
            const isActive = section.classList.contains('active');
            document.querySelectorAll('.section').forEach(s => {
                s.classList.remove('active');
                s.style.maxHeight = null;
            });
            if (!isActive) {
                section.classList.add('active');
            }
        }
        
return (
    <div className="container">
        <div className="buttons-container">
            <button className="button" onClick={() => toggleSection('about')}>Skills</button>
            <button className="button" onClick={() => toggleSection('contact')}>Contact</button>
        </div>
        <div id="about" className="section">
            <h2>My competencies</h2>
            <span className="container-chips">
                <Chips crossed="Genius"/>
                <Chips crossed="Billionaire"/>
                <Chips crossed="Playboy"/>
                <Chips crossed="Philanthropist"/>
            </span>
            <span className="container-chips">
            <Chips label="English"/>
            <Chips label="Python"/>
            <Chips label="Git System"/>
            <Chips label="Java Script"/>
            </span>
            <h2>Future competencies</h2>
            <div>
                <span className="container-chips">
                    <Chips label="React JS"/>
                    <Chips label="Node JS"/>
                    <Chips label="Docker"/>
                    <Chips label="PostgreSQL"/>
                    <Chips label="MySQL"/>
                </span>
                <span className="container-chips">
                    <Chips label="Data scientist"/>
                    <Chips label="AI engineer"/>
                    <Chips label="Data analyst"/>
                    <Chips label="DevOps"/>
                    <Chips label="Machine Learning"/>
                    <Chips label="Maths"/>
                </span>
            </div>
        </div>
        <div id="contact" className="section">
            <h2>Contact Me</h2>
            <div className="contact-icons">
                <div>
                    <a href="mailto:shishkinsa1997@gmail.com" > shishkinsa1997@gmail.com</a>
                </div>
                <div>
                    <a href="https://t.me/batmanpooop"> @batmanpooop</a>
                </div>
            </div>
        </div>
    </div>
)
}

export default Section
