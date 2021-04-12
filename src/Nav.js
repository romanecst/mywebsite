import React from "react";
import { Link } from "react-router-dom";
import CV from './assets/CV2021.pdf';

export default function(){
    return (
    <ul>
      <li><Link to='/about'>ABOUT</Link> • <Link to='/projects'> PROJECTS </Link> • <a href={CV} target='blank'> CV </a> • <a href='https://github.com/romanecst' target='blank'> GITHUB</a></li>
    </ul>
    );
}