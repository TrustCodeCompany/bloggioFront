import React from 'react';
import { Navbar } from '../components';

export const BlogPage = () => {
  return (
    <>
      <Navbar />

      {/* <!-- Start retroy layout blog posts --> */}
      <section className="section bg-light">
        <div className="container">
          <div className="row align-items-stretch retro-layout">
            <div className="col-md-4">
              <a href="single.html" className="h-entry mb-30 v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: `url('./src/assets/images/img_2_horizontal.jpg')`,
                  }}></div>

                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>AI can now kill those annoying cookie pop-ups</h2>
                </div>
              </a>
              <a href="single.html" className="h-entry v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: `url('./src/assets/images/img_5_horizontal.jpg')`,
                  }}></div>

                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Don’t assume your user data in the cloud is safe</h2>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="single.html" className="h-entry img-5 h-100 gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: `url('./src/assets/images/img_1_vertical.jpg')`,
                  }}></div>

                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Why is my internet so slow?</h2>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="single.html" className="h-entry mb-30 v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: `url('./src/assets/images/img_3_horizontal.jpg')`,
                  }}></div>

                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Startup vs corporate: What job suits you best?</h2>
                </div>
              </a>
              <a href="single.html" className="h-entry v-height gradient">
                <div
                  className="featured-img"
                  style={{
                    backgroundImage: `url('./src/assets/images/img_4_horizontal.jpg')`,
                  }}></div>

                <div className="text">
                  <span className="date">Apr. 14th, 2022</span>
                  <h2>Thought you loved Python? Wait until you meet Rust</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End retroy layout blog posts --> */}

      {/* <!-- Start posts-entry --> */}
      <section className="section posts-entry">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-6">
              <h2 className="posts-entry-title">Business</h2>
            </div>
            <div className="col-sm-6 text-sm-end">
              <a href="category.html" className="read-more">
                View All
              </a>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-9">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="blog-entry">
                    <a href="single.html" className="img-link">
                      <img
                        src="./src/assets/images/img_1_sq.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <span className="date">Apr. 14th, 2022</span>
                    <h2>
                      <a href="single.html">
                        Thought you loved Python? Wait until you meet Rust
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde, nobis ea quis inventore vel voluptas.
                    </p>
                    <p>
                      <a
                        href="single.html"
                        className="btn btn-sm btn-outline-primary">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="blog-entry">
                    <a href="single.html" className="img-link">
                      <img
                        src="./src/assets/images/img_2_sq.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <span className="date">Apr. 14th, 2022</span>
                    <h2>
                      <a href="single.html">
                        Startup vs corporate: What job suits you best?
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde, nobis ea quis inventore vel voluptas.
                    </p>
                    <p>
                      <a
                        href="single.html"
                        className="btn btn-sm btn-outline-primary">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <ul className="list-unstyled blog-entry-sm">
                <li>
                  <span className="date">Apr. 14th, 2022</span>
                  <h3>
                    <a href="single.html">
                      Don’t assume your user data in the cloud is safe
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, nobis ea quis inventore vel voluptas.
                  </p>
                  <p>
                    <a href="#" className="read-more">
                      Continue Reading
                    </a>
                  </p>
                </li>

                <li>
                  <span className="date">Apr. 14th, 2022</span>
                  <h3>
                    <a href="single.html">
                      Meta unveils fees on metaverse sales
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, nobis ea quis inventore vel voluptas.
                  </p>
                  <p>
                    <a href="#" className="read-more">
                      Continue Reading
                    </a>
                  </p>
                </li>

                <li>
                  <span className="date">Apr. 14th, 2022</span>
                  <h3>
                    <a href="single.html">
                      UK sees highest inflation in 30 years
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, nobis ea quis inventore vel voluptas.
                  </p>
                  <p>
                    <a href="#" className="read-more">
                      Continue Reading
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End posts-entry --> */}
    </>
  );
};
