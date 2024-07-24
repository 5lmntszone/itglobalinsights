import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-120 bg-image">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>Igniting Innovation</span>
                <h2>
                  Welcome to the AI & Blockchain <b>Summit</b> 2024
                </h2>
                <p>
                Dive into the future with us in Geneva from 23-25 November 2024! Experience groundbreaking innovations in AI and blockchain. 
                Network with industry pioneers, engage in dynamic sessions, and immerse yourself in cutting-edge workshops.
                </p>
                <p>
                We bring together the brightest minds in AI and blockchain to spark ideas that change the world. 
                With 70+ speakers and 100+ sponsors, this is where ideas become reality.
                </p>
              
           

                <Link href="/about-us" className="btn btn-primary">
                  Read More
                  <i className="icofont-double-right"></i>
                </Link>

                <Link href="#" className="btn btn-secondary">
                  Buy Ticket
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/images/about1.jpg"
                  className="about-img1"
                  width={750}
                  height={500}
                  alt="about"
                />
                <Image
                  src="/images/about2.jpg"
                  className="about-img2"
                  alt="about"
                  width={309}
                  height={424}
                />
                <Image
                  src="/images/shapes/5.png"
                  className="shape-img"
                  alt="about"
                  width={111}
                  height={111}
                />

                <Link href="/about-us" className="btn btn-primary">
                  Explore More About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
