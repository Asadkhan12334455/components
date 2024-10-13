// Hero.tsx
import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.h1}>Welcome to My Amazing Website!</h1>
      <p className={styles.p}>
        Discover a world of possibilities and creativity. Whether you're looking for inspiration, 
        resources, or just a place to explore, you've come to the right spot! Join us on this exciting journey.
        <br /><br />
        At our website, we believe in the power of innovation and imagination. Our team is dedicated to bringing you
        the latest trends, insightful articles, and resources that empower you to think outside the box. With a
        community of like-minded individuals, you’ll find the support and encouragement needed to pursue your passions. 
        From tutorials and guides to inspiring stories, our content is crafted to ignite your creativity and 
        help you unleash your full potential. So dive in, explore our features, and take the first step 
        towards transforming your ideas into reality!
        <br /><br />
        We are committed to providing a user-friendly experience, ensuring that navigating our site is 
        seamless and enjoyable. Don't hesitate to reach out through our contact page if you have any questions or feedback. 
        Together, let's create something amazing!
      </p>
      <button className={styles.btn}>Get Started</button>
    </div>
  );
}

export default Hero;
