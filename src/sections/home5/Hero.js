import React from "react";
import Link from "next/link";
// import Custom from "../../assets/css/home-5/hero.css"

import imgM from "../../assets/image/home-5/png/heroImageCoffee.png";
// import imgYS from "../../assets/image/home-5/png/monkeyHandImage.png";

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container position-static">
        <div className="row align-items-center justify-content-center position-static">
          {/* Hero Image */}
          <div className="col-xl-6 col-lg-6 col-md-7 col-xs-8 position-static">
            <div className="">
              <img
                className="col-xl-16 col-lg-14 col-md-12"
                src={imgM}
                alt=""
                data-aos="fade-up"
                data-aos-delay={500}
              />
              <div className="img-1">
                {/* <img
                  className="w-100"
                  src={imgYS}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={750}
                /> */}
              </div>
            </div>
          </div>
          {/* End Hero Image */}
          {/* Hero Content */}
          <div className="col-lg-6 col-md-9 col-sm-11">
            <div
              className="mt-8 mt-lg-0 pr-md-11 pr-lg-0 pr-xl-10"
              data-aos="fade-left"
              data-aos-delay={750}
            >
              <h1 className="font-size-13 mb-8 pr-sm-18 pr-md-8 pr-lg-0 line-height-84">
                The Monkey Paw Blend.
              </h1>
              <p className="font-size-7 mb-0 pr-sm-10 pr-md-10 pr-lg-0 pr-xl-18">
              Crenshaw Coffee Co. has created a unique taste for Monkey Paw Production. This is a Limited Edition Specialty Coffee Blend. For a limited time you can purchase our specialty coffee "The MonkeyPaw Blend". 
              </p>
              <br />
              <p>
              A versatile and full bodied blend with a flavor profile of burnt caramel, 62% cocoa, and cranberry orange scone.
              </p>
              <div className="mt-10">
                <Link href="/#">
                  <a className="btn btn-dark-green btn-3 rounded-5">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* End Hero Content */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
