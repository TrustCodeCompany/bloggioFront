export const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="widget">
              <h3 class="mb-4">About</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            {/* <!-- /.widget --> */}
            <div class="widget">
              <h3>Social</h3>
              <ul class="list-unstyled social">
                <li>
                  <a href="#">
                    <span class="icon-instagram"></span>
                  </a>
                </li>
                <li className="ms-1">
                  <a href="#">
                    <span class="icon-twitter"></span>
                  </a>
                </li>
                <li className="ms-1">
                  <a href="#">
                    <span class="icon-facebook"></span>
                  </a>
                </li>
                <li className="ms-1">
                  <a href="#">
                    <span class="icon-linkedin"></span>
                  </a>
                </li>
                <li className="ms-1">
                  <a href="#">
                    <span class="icon-pinterest"></span>
                  </a>
                </li>
                <li className="ms-1">
                  <a href="#">
                    <span class="icon-dribbble"></span>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- /.widget --> */}
          </div>
          {/* <!-- /.col-lg-4 --> */}
          <div class="col-lg-4 ps-lg-5">
            <div class="widget">
              <h3 class="mb-4">Company</h3>
              <ul class="list-unstyled float-start links">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Vision</a>
                </li>
                <li>
                  <a href="#">Mission</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
              <ul class="list-unstyled float-start links">
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Creative</a>
                </li>
              </ul>
            </div>
            {/* <!-- /.widget --> */}
          </div>
          {/* <!-- /.col-lg-4 --> */}
          <div class="col-lg-4">
            <div class="widget">
              <h3 class="mb-4">Recent Post Entry</h3>
              <div class="post-entry-footer">
                <ul>
                  <li>
                    <a href="">
                      <img
                        src="./src/assets/images/img_1_sq.jpg"
                        alt="Image placeholder"
                        class="me-4 rounded"
                      />
                      <div class="text">
                        <h4>
                          There’s a Cool New Way for Men to Wear Socks and
                          Sandals
                        </h4>
                        <div class="post-meta">
                          <span class="mr-2">March 15, 2018 </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src="./src/assets/images/img_2_sq.jpg"
                        alt="Image placeholder"
                        class="me-4 rounded"
                      />
                      <div class="text">
                        <h4>
                          There’s a Cool New Way for Men to Wear Socks and
                          Sandals
                        </h4>
                        <div class="post-meta">
                          <span class="mr-2">March 15, 2018 </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src="./src/assets/images/img_3_sq.jpg"
                        alt="Image placeholder"
                        class="me-4 rounded"
                      />
                      <div class="text">
                        <h4>
                          There’s a Cool New Way for Men to Wear Socks and
                          Sandals
                        </h4>
                        <div class="post-meta">
                          <span class="mr-2">March 15, 2018 </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- /.widget --> */}
          </div>
          {/* <!-- /.col-lg-4 --> */}
        </div>
        {/* <!-- /.row --> */}

        <div class="row mt-2">
          <div class="col-12 text-center">
            <p>Copyright &copy;. TrustCode Company</p>
          </div>
        </div>
      </div>
      {/* <!-- /.container --> */}
    </footer>
  );
};