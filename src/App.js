import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

import phone_gal from './images/banner/pcMobile/phone_gal.jpg';
import _1912_event_clothes_2 from './images/banner/dress/1912_event_clothes_2.jpg';
import muhan from './images/promotion/muhan.jpg';
import _2001_event_ac_1 from './images/banner/life/2001_event_ac_1.jpg';
import _1908_event_wedding from './images/promotion/1908_event_wedding.jpg';
import _2003_event_energy_2 from './images/promotion/2003_event_energy_2.jpg';
import _2003_event_air_filter from './images/banner/life/2003_event_air_filter.jpg';
import _2009_event_monitor from './images/banner/pcMobile/2009_event_monitor.jpg';
import _1904_event_air_1 from './images/banner/life/1904_event_air_1.jpg';
import _1902_event_ac_1 from './images/banner/life/1902_event_ac_1.jpg';
import notebook_banner from './images/banner/pcMobile/notebook_banner.jpg';
import _1902_event_sew_2 from './images/banner/dress/1902_event_sew_2.jpg';
import re_01 from './images/banner/kitchen/re_01.jpg';
import mail_20200424_aircare_ from './images/dm/mail_20200424_aircare_.jpg';
import mail_20190513_ac_clothes from './images/dm/mail_20190513_ac+clothes.jpg';
import mail_20190718_dv from './images/dm/mail_20190718_dv.jpg';
import poster4 from './images/poster/poster4.png';
import poster3 from './images/poster/poster3.png';

import lof_h from './images/lof/lof_h.jpg';
import lof_amazon3 from './images/lof/lof_amazon3.jpg';
import thumbnail_1 from './images/lof/thumbnail_1.jpg';
import thumbnail_2 from './images/lof/thumbnail_2.jpg';
import thumbnail_3 from './images/lof/thumbnail_3.jpg';
import collar_1 from './images/lof/collar_1.jpg';
import collar_3 from './images/lof/collar_3.jpg';
import profile from './images/profile.png';

import adaptive_banner from './images/adaptive_banner.png';
import responsive_banner from './images/responsive_banner.png';


class App extends Component {

  componentDidMount() {

    let t = document.getElementById("cursor");
    let e = document.getElementById("cursor2");
    let i = document.getElementById("cursor3");

    document
      .getElementsByTagName("body")[0]
      .addEventListener("mousemove", function (n) {
        (t.style.left = n.clientX + "px");
          (t.style.top = n.clientY + "px");
          (e.style.left = n.clientX + "px");
          (e.style.top = n.clientY + "px");
          (i.style.left = n.clientX + "px");
          (i.style.top = n.clientY + "px");
      });


    function n(t) {
      e.classList.add("hover");
      i.classList.add("hover");
    }

    function s(t) {
      e.classList.remove("hover");
      i.classList.remove("hover");
    }

    s();

    for (
      var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
      a >= 0;
      a--
    ) {
      o(r[a]);
    }

    function o(t) {
      t.addEventListener("mouseover", n);
      t.addEventListener("mouseout", s);
    }

    //About page

    $(".about-text").on("click", function () {
      $("body").addClass("about-on");
    });
    $(".about-close").on("click", function () {
      $("body").removeClass("about-on");
    });

    //Contact page

    $(".contact-text").on("click", function () {
      $("body").addClass("contact-on");
    });
    $(".contact-close").on("click", function () {
      $("body").removeClass("contact-on");
    });

    //Travel portfolio page

    $(".travel").on("click", function () {
      $("body").addClass("travel-on");
    });
    $(".travel-close").on("click", function () {
      $("body").removeClass("travel-on");
    });

    //Wildlife portfolio page

    $(".wildlife").on("click", function () {
      $("body").addClass("wildlife-on");
    });
    $(".wildlife-close").on("click", function () {
      $("body").removeClass("wildlife-on");
    });

    //Nature portfolio page

    $(".nature").on("click", function () {
      $("body").addClass("nature-on");
    });
    $(".nature-close").on("click", function () {
      $("body").removeClass("nature-on");
    });

    ////// 삼성 작업 ////////

    // 프로모션 클릭
    $("#promotion").on("click", function () {
      $(".dmBanner").hide();
      $(".poster").hide();
      $(".promotion").show();

      // 클릭버튼 표시
      $("#promotion").css('font-weight', 'bold');
      $("#promotion").css('font-size', '17px');

      // 다른버튼 css지우기
      $("#dmBanner").css('font-weight', '');
      $("#dmBanner").css('font-size', '');
      $("#poster").css('font-weight', '');
      $("#poster").css('font-size', '');

    });

    // DM배너 클릭
    $("#dmBanner").on("click", function () {
      $(".promotion").hide();
      $(".poster").hide();
      $(".dmBanner").show();

      // 클릭버튼 표시
      $("#dmBanner").css('font-weight', 'bold');
      $("#dmBanner").css('font-size', '17px');

      // 다른버튼 css지우기
      $("#promotion").css('font-weight', '');
      $("#promotion").css('font-size', '');
      $("#poster").css('font-weight', '');
      $("#poster").css('font-size', '');
    });

    // poster클릭
    $("#poster").on("click", function () {
      $(".promotion").hide();
      $(".dmBanner").hide();
      $(".poster").show();

      // 클릭버튼 표시
      $("#poster").css('font-weight', 'bold');
      $("#poster").css('font-size', '17px');

      // 다른버튼 css지우기
      $("#promotion").css('font-weight', '');
      $("#promotion").css('font-size', '');
      $("#dmBanner").css('font-weight', '');
      $("#dmBanner").css('font-size', '');
    });

    //////  Lof 작업 //////

    // harness 클릭
    $("#harness").on("click", function () {
      $(".collar").hide();
      $(".harness").show();

      // 클릭버튼 표시
      $("#harness").css('font-weight', 'bold');
      $("#harness").css('font-size', '17px');

      // 다른버튼 css지우기
      $("#collar").css('font-weight', '');
      $("#collar").css('font-size', '');
    });

    // collar 클릭
    $("#collar").on("click", function () {
      $(".collar").show();
      $(".harness").hide();

      // 클릭버튼 표시
      $("#collar").css('font-weight', 'bold');
      $("#collar").css('font-size', '17px');

      // 다른버튼 css지우기
      $("#harness").css('font-weight', '');
      $("#harness").css('font-size', '');
    });

    // 초기로딩 클릭버튼 표시
    $("#promotion").css('font-weight', 'bold');
    $("#promotion").css('font-size', '17px');

    $("#harness").css('font-weight', 'bold');
    $("#harness").css('font-size', '17px');

    // 초기 배너 숨기기
    $(".dmBanner").hide();    //  dm
    $(".poster").hide();      // poster
    $(".collar").hide();      // poster

  }

  render() {

    return (
      <>

      {/* 메인화면 */}
        <div className="hero-section">
          <div className="about-text hover-target">profile</div>
          <div className="contact-text hover-target">contact</div>
          <div className="section-center">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <h1>Portfolio</h1>
                </div>
                <div className="col-12 text-center mb-2">
                  <div className="dancing">Design by Yoon</div>
                </div>
                <div className="col-12 text-center mt-4 mt-lg-5">
                  <p>
                    <span className="travel hover-target">Familynet <br /> Project</span>
                    <span className="wildlife hover-target">Lof Pet <br /> Project</span>
                    <span className="nature hover-target">Website <br /> Design</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* 프로필 */}

        <div className="about-section">
          <div className="about-close hover-target"></div>
          <div className="section-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <img src={profile} alt="" />
                </div>
                <div className="col-lg-8 text-center mt-4">
                  <p className="profile_word">
                    <b>Day of Birth</b> <br />
                    92.10.10
                  </p>
                  <p className="profile_word">
                    <b>Experience</b> <br />
                    2018 ~ 2020 <br />
                    삼성전자 패밀리넷 디자이너
                  </p>
                  <p className="profile_word">
                    2020 ~ 2021 <br />
                    Lof Pet Supplies 디자이너
                  </p>
                </div>
                <div className="col-12 text-center">
                  <p><span>Jieun Yoon</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* 연락처 */}
        <div className="contact-section">
          <div className="contact-close hover-target"></div>
          <div className="section-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <a href="#" className="hover-target">ramirumi@naver.com</a><br/>
                  <a href="#" className="hover-target">010-7548-4495</a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* 삼성전자 임직원몰 */}

        <div className="travel-section">
          <div className="travel-close hover-target"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h3>Familynet Project</h3>
              </div>
              <div className="col-12 mt-3 text-center">
                <p><span>삼성전자 임직원몰</span></p>
              </div>
              <div className="col-12 text-center">
                <p className="familynet">
                  <font className = "travel hover-target" id="promotion">Promotion</font> / <font className = "travel hover-target" id="dmBanner">Direct Mailing</font> / <font className = "travel hover-target" id="poster">Poster</font>
                </p>
              </div>

              <br/>
              <br/>
              <br/>

              {/* 프로모션 배너 */}
                <div className="col-md-6 col-lg-10 promotion">
                  <img src={ phone_gal } alt="" />
                </div>
                <div className="col-md-6 col-lg-10 promotion">
                  <img src={ _1912_event_clothes_2 } alt="" />
                </div>
                <div className="col-md-6 col-lg-10 promotion">
                  <img src={ muhan } alt="" />
                </div>
                <div className="col-md-6 col-lg-10 promotion">
                  <img src={ _2001_event_ac_1 } alt="" />
                </div>
                <div className="col-md-6 col-lg-10 promotion">
                  <img src={ _1908_event_wedding } alt="" />
                </div>
                <div className="col-md-6 col-lg-10 promotion">
                  <img src={ _2003_event_energy_2 } alt="" />
                </div>
                <div className="col-md-6 col-lg-10 promotion">
                  <img src={ _2003_event_air_filter } alt="" />
                </div>
                <div className="col-md-6 col-lg-10 promotion">
                  <img src={ _2009_event_monitor } alt="" />
                </div>
                <div className="col-md-6 col-lg-10 promotion">
                  <img src={ _1904_event_air_1 } alt="" />
                </div>
                <div className="col-md-6 col-lg-10 promotion">
                  <img src={_1902_event_ac_1} alt="" />
                </div>
                <div className="col-md-6 col-lg-10 promotion">
                  <img src={notebook_banner} alt="" />
                </div>
                <div className="col-md-6 col-lg-10 promotion">
                  <img src={_1902_event_sew_2} alt="" />
                </div>
                <div className="col-md-6 col-lg-10 promotion">
                  <img src={re_01} alt="" />
                </div>

              {/*  DM 배너  */}
                <div className="col-md-6 col-lg-4 dmBanner">
                  <font style = {{color: "#fff"}}>Air Care</font>
                  <img src={mail_20200424_aircare_} alt="" />
                </div>
                <div className="col-md-6 col-lg-4 dmBanner">
                  <font style = {{color: "#fff"}}>Living Care</font>
                  <img src={mail_20190513_ac_clothes} alt="" />
                </div>
                <div className="col-md-6 col-lg-4 dmBanner">
                  <font style = {{color: "#fff"}}>Clothing Care</font>
                  <img src={mail_20190718_dv} alt="" />
                </div>

              {/*  Poster  */}
              <div className="col-md-6 col-lg-12 poster">
                <img src={poster4} alt="" />
              </div>
              <div className="col-md-6 col-lg-12 poster">
                <img src={poster3} alt="" />
              </div>

            </div>
          </div>
        </div>


      {/* Lof 작업 */}

        <div className="wildlife-section">
          <div className="wildlife-close hover-target"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h3>Lof Project</h3>
              </div>
              <div className="col-12 mt-3 text-center">
                <p><span>반려동물 쇼핑몰</span></p>
              </div>
              
              <div className="col-12 text-center">
                <p className="familynet">
                  <font className = "wildlife hover-target" id="harness">Harness</font> / <font className = "wildlife hover-target" id="collar">Collar</font>
                </p>
              </div>

              {/* 하네스 */}
              <div className="col-md-6 col-lg-4 harness">
                <img src={lof_h} alt="" />
              </div>
              <div className="col-md-6 col-lg-4 harness">
                <img src={lof_amazon3} alt="" />
              </div>
              <div className="col-md-6 col-lg-4 harness">
                <img src={thumbnail_1} alt="" />
                <img src={thumbnail_2} alt="" />
                <img src={thumbnail_3} alt="" />
              </div>

              {/* collar */}
              <div className="col-md-6 col-lg-5 collar">
                <img src={collar_1} alt="" />
              </div>
              <div className="col-md-6 col-lg-5 collar">
                <img src={collar_3} alt="" />
              </div>

            </div>
          </div>
        </div>

      {/* 웹페이지 */}

        <div className="nature-section">
          <div className="nature-close hover-target"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h3>Website</h3>
              </div>
              <div className="col-12 mt-3 text-center">
                <p><span>웹사이트 구축</span></p>
              </div>

              <br />
              <br />
              <br />
              <br />

              <div className="col-md-6 col-lg-6">
                <font style = {{color: "#fff"}}>반응형 웹</font>
                <a href="#"><img className="webChoise" src={responsive_banner} alt="" /></a>
              </div>

              <div className="col-md-6 col-lg-6">
                <font style = {{color: "#fff"}}>고정형 웹</font>
                <a href="#"><img className="webChoise" src={adaptive_banner} alt="" /></a>
              </div>

              
            </div>
          </div>
        </div>

        <div className='cursor' id="cursor"></div>
        <div className='cursor2' id="cursor2"></div>
        <div className='cursor3' id="cursor3"></div>
        
      </>
    );
  }

}

export default App;
