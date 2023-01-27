import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFax, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer class="footer primary-color pt-3">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img
              src={require("../Assets/footer-logo.png")}
              style={{
                width: "300px",
                marginTop: "0px",
                marginLeft: "-10px",
                maxHeight: "50px",
              }}
            ></img>
            <p class="text-white">
              Bashundhara, Dhaka-1229, Bangladesh
              <br />
              <FontAwesomeIcon icon={faPhone} /> +8801777005381
              
              <br />
              <FontAwesomeIcon icon={faEnvelope} /> studentcompanion@gmail.com
            </p>
          </div>
          <div class="col-md-5 offset-lg-1">
            <div class="">
              <ul class="list-group list-group-horizontal mb-3">
                <li class="border border-2 rounded border-light me-2">
                  <a
                    href="https://www.facebook.com/NorthSouthUniversity"
                    class="btn btn-default text-white social-icon"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li class="border border-2 rounded border-light me-2">
                  <a
                    href="https://twitter.com/NorthSouthU"
                    class="btn btn-default text-white social-icon"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li class="border border-2 rounded border-light me-2">
                  <a
                    href="https://www.instagram.com/NorthSouthUniversity/"
                    class="btn btn-default text-white social-icon"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li class="border border-2 rounded border-light">
                  <a
                    href="https://www.youtube.com/NorthSouthUniversity"
                    class="btn btn-default text-white social-icon"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
            <div class="text-white">
              Developed & Maintained by NSU_Ctrl_Alt_Del
              <br /> &copy; 2022-2023 North South University. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
