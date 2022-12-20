import { Footer, Navbar } from '../components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './aboutPage.css';
import { useEffect } from 'react';

export const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* Inicio Hero */}
      <div
        className="site-cover site-cover-sm same-height overlay single-page"
        style={{ backgroundImage: `url('./src/assets/images/hero_5.jpg')` }}>
        <div className="container">
          <div className="row same-height justify-content-center">
            <div className="col-md-6">
              <div className="post-entry text-center">
                <h1 className="mb-4">Acerca de Nosotros</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fin Hero */}

      {/* Inicio seccion informacion */}
      <div className="my-7 sec-halfs py-0">
        <div className="container">
          <div className="half-content d-lg-flex align-items-stretch">
            <div
              className="img"
              style={{
                backgroundImage: `url('./src/assets/images/hero_1.jpg')`,
              }}
              data-aos="fade-right"></div>
            <div className="text">
              <h2 className="heading text-primary mb-3">
                Recursos para personas creativas
              </h2>
              <p className="mb-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                <a href="#" className="btn btn-outline-primary py-2">
                  Leer más
                </a>
              </p>
            </div>
          </div>

          <div className="half-content d-lg-flex align-items-stretch my-5">
            <div
              className="img order-md-2"
              style={{
                backgroundImage: `url('./src/assets/images/hero_2.jpg')`,
              }}
              data-aos="fade-left"></div>
            <div className="text">
              <h2 className="heading text-primary mb-3">
                Contamos con la confianza de más de 5.000 clientes
              </h2>
              <p className="mb-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                <a href="#" className="btn btn-outline-primary py-2">
                  Leer más
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fin seccion informacion */}

      {/* Inicio seccion Features */}
      <div className="section sec-features my-7">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="0">
              <div className="feature d-flex">
                <span className="bi-bag-check-fill"></span>
                <div>
                  <h3>Contruyendo tu blog</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100">
              <div className="feature d-flex">
                <span className="bi-wallet-fill"></span>
                <div>
                  <h3>Recursos e ideas</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200">
              <div className="feature d-flex">
                <span className="bi-pie-chart-fill"></span>
                <div>
                  <h3>Un Blog a tu medida</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fin seccion Features */}

      {/* Inicio seccion Team */}
      <div className=" my-7">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center" data-aos="fade-up">
              <h2 className="heading text-primary">Nuestro Equipo</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{' '}
              </p>
            </div>
            e
          </div>

          <div className="row">
            <div
              className="col-lg-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay="0">
              <img
                src="./src/assets/images/person_1.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-3"
              />
              <h5 className="text-black">James Griffin</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{' '}
              </p>
            </div>
            <div
              className="col-lg-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay="100">
              <img
                src="./src/assets/images/person_2.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-3"
              />
              <h5 className="text-black">Claire Smith</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{' '}
              </p>
            </div>
            <div
              className="col-lg-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay="200">
              <img
                src="./src/assets/images/person_3.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-3"
              />
              <h5 className="text-black">Jessica Wilson</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{' '}
              </p>
            </div>

            <div
              className="col-lg-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay="0">
              <img
                src="./src/assets/images/person_4.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-3"
              />
              <h5 className="text-black">William Anderson</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{' '}
              </p>
            </div>
            <div
              className="col-lg-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay="100">
              <img
                src="./src/assets/images/person_5.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-3"
              />
              <h5 className="text-black">Julie Harvey</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{' '}
              </p>
            </div>
            <div
              className="col-lg-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay="200">
              <img
                src="./src/assets/images/person_2.jpg"
                alt="Image"
                className="img-fluid w-50 rounded-circle mb-3"
              />
              <h5 className="text-black">Shana Clarkson</h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.{' '}
              </p>
            </div>
          </div>
          {/* Fin seccion Team */}
        </div>
      </div>

      {/* Inicio seccion bloggers profesionales */}
      <div className=" my-7">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <img
                src="./src/assets/images/img_3_sq.jpg"
                alt="Image"
                className="img-fluid rounded
					"
              />
            </div>
            <div className="col-lg-4 ps-lg-2">
              <div className="mb-5">
                <h2 className="text-black h4">
                  Plataforma de publicación para blogueros profesionales
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="d-flex mb-3 service-alt">
                <div>
                  <span className="bi-wallet-fill me-4"></span>
                </div>
                <div>
                  <h3>Contruyendo tu blog</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>

              <div className="d-flex mb-3 service-alt">
                <div>
                  <span className="bi-pie-chart-fill me-4"></span>
                </div>
                <div>
                  <h3>Recursos e ideas</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>

              <div className="d-flex mb-3 service-alt">
                <div>
                  <span className="bi-bag-check-fill me-4"></span>
                </div>
                <div>
                  <h3>Un Blog a tu medida</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fin seccion bloggers profesionales */}

      <Footer />
    </>
  );
};
