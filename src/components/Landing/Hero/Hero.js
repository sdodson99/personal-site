import React from 'react';
import * as styles from './Hero.module.scss';
import heroImage from '../../../images/hero.png';
import { Link } from 'gatsby';

const Hero = () => (
  <div className={styles.hero}>
    <div className="content-container text-center md:text-left md:flex justify-between items-center">
      <div className="lg:flex-1">
        <div className="text-gray-500 text-lg">Hi there! My name is</div>
        <div className={styles.name}>Sean Dodson</div>
        <div className="mt-8 font-thin text-gray-800">
          I’m a software developer, YouTuber, fitness enthusiast, problem
          solver, cat lover... juggler?... and much more!
        </div>
        <div className="mt-8 md:flex">
          <Link className="btn btn-primary w-full md:w-auto" to="/personal">
            Learn More
          </Link>
          <Link
            className="btn btn-secondary w-full mt-3 md:w-auto md:mt-0 md:ml-5"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-10 md:ml-8 flex justify-center lg:flex-1 lg:justify-end">
        <img
          className={styles.heroImage}
          src={heroImage}
          alt="Hobbies"
          height="300"
        />
      </div>
    </div>
  </div>
);

export default Hero;
