import React from "react";
import { Link } from "react-router-dom";
import { listProduct } from "../components/Home/fetchData";
import "react-multi-carousel/lib/styles.css";
import {
  faGift,
  faMicrochip,
  faLaptop,
  faDesktop,
  faKeyboard,
  faComputerMouse,
  faHeadphones,
  faPrint,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

import SlideProduct from "../components/Home/SlideProduct";
import SideBarItem from "../components/Home/SideBarItem";

const Home = () => {
  // Multiple slide carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-4 Home">
      {/* Begin Home SideNBar */}
      <div className="Home_sidebar row mb-2">
        <div className="Home_sidebar-sidebar col-2">
          <ul>
            <SideBarItem href ="/product/laptop" name="Laptop" icon ={faLaptop}  />
            <SideBarItem href ="/product/laptop" name="Laptop Gaming" icon ={faLaptop}  />
            <SideBarItem href ="/product/laptop" name="PC GearnVN" icon ={faDesktop}  />
            <SideBarItem href ="/product/laptop" name="Main- CPU - VGA" icon ={faDesktop}  />
            <SideBarItem href ="/product/laptop" name="Case - Nguồn - Phụ kiện" icon ={faDesktop}  />
            <SideBarItem href ="/product/laptop" name="SSD- RAM- HDD" icon ={faMicrochip}  />
            <SideBarItem href ="/product/laptop" name="Apple" icon ={faApple}  />
            <SideBarItem href ="/product/laptop" name="Màn hình" icon ={faDesktop}  />
            <SideBarItem href ="/product/laptop" name="Bàn phím" icon ={faKeyboard}  />
            <SideBarItem href ="/product/laptop" name="Chuột + Lót chuột" icon ={faComputerMouse}  />
            <SideBarItem href ="/product/laptop" name="Tai nghe - Loa" icon ={faHeadphones}  />
            <SideBarItem href ="/product/laptop" name="Phần mềm + Mạng" icon ={faPrint}  />
            <SideBarItem href ="/product/laptop" name="Phụ kiện" icon ={faGamepad}  />
            <SideBarItem href ="/product/laptop" name="Thủ thuật - Giải đáp" icon ={faGift}  />
          </ul>
        </div>
        {/* Hình ảnh slide giảm giá sốc */}
        <div className=" col-10">
          <div className="row">
            <div
              id="carouselExampleIndicators"
              className="Home_sidebar-bigslide carousel slide col-8"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <Link to="products/abc">
                    <img
                      src="https://file.hstatic.net/200000722513/file/laptop_black_friday_788060f995674e7a989b01df267763a2.png"
                      class="d-block w-100"
                      alt="..."
                    />
                  </Link>
                </div>
                <div class="carousel-item">
                  <Link to="products/abc">
                    <img
                      src="https://file.hstatic.net/200000722513/file/6_20f8dbf6da254794805e8449bcff3adb.png"
                      class="d-block w-100"
                      alt="..."
                    />
                  </Link>
                </div>
                <div class="carousel-item">
                  <Link to="products/abc">
                    <img
                      src="https://file.hstatic.net/200000722513/file/gearvn-dai-tiec-rog-san-qua-toi-tuf-slider_47335ea3529147b2a278a1975f2989b0.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </Link>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div className="Home_sidebar_2slidesmall col-4">
              <div className="">
                <Link to="products/abc">
                  {" "}
                  <img src="https://file.hstatic.net/200000722513/file/right_1_-_linh_kien_may_tinh_82f376ea72ab484cbdfdfb841a843939.png" />
                </Link>
              </div>
              <div>
                <Link to="products/abc">
                  {" "}
                  <img src="https://file.hstatic.net/200000722513/file/right_2_-_asus_rog_ally_8a754b24bf2c448693b1a3d94d81ddd6.png" />
                </Link>
              </div>
            </div>
          </div>
          <div className="Home_sidebar-three_img row">
            <div className="col-4">
              <a className="Home_sidebar-three_img-item" href="/product">
                <img src="https://file.hstatic.net/200000722513/file/bottom_1_-_laptop_van_phong_460758e56b684c108572a76fe1ae2610.png" />
              </a>
            </div>
            <div className="col-4">
              <a className="Home_sidebar-three_img-item" href="/product">
                <img src="https://file.hstatic.net/200000722513/file/bottom_2_-_laptop_gaming_e0e3d09a913f4c2ea9014f1c6d6d8ecf.png" />
              </a>
            </div>
            <div className="col-4">
              <a className="Home_sidebar-three_img-item" href="/product">
                <img src="https://file.hstatic.net/200000722513/file/right_3_-_pc_gaming_4a55a103e23c4647bdf826831750e2d2.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End : Home SideBar */}
      {/* Home img slide 4 ảnh */}
      <div className="row mb-2">
        <div className="Home_img-slide col-3">
          <Link to="products/abc">
            {" "}
            <img src="https://file.hstatic.net/200000722513/file/ban-phim-co-homepage_708921960ed34559ad91e43d4fcd6051.png" />
          </Link>
        </div>
        <div className="Home_img-slide col-3">
          <Link to="products/abc">
            {" "}
            <img src="https://file.hstatic.net/200000722513/file/sub_banner_2_-_man_hinh_may_tinh_ce1ffd3f60d84b748e909ff52901eb90.png" />
          </Link>
        </div>
        <div className="Home_img-slide col-3">
          <Link to="products/abc">
            {" "}
            <img src="https://file.hstatic.net/200000722513/file/sub_banner_3_-_chuot_gaming_8f5a97d8af894c919165ed7ef0e2cd77.png" />
          </Link>
        </div>
        <div className="Home_img-slide col-3">
          <Link to="products/abc">
            {" "}
            <img src="https://file.hstatic.net/200000722513/file/sub_banner_4_-_pc_van_phong_2865fd86b8b24dfc90be4bfa33733f91.png" />
          </Link>
        </div>
      </div>
      {/* Banner 2 ảnh */}
      <div className="home-slide-2 row mb-3 mt-3">
        <div className="col 6">
          <a href="/product">
            <img src="https://file.hstatic.net/200000722513/file/promotion_left_-_pc_station_0923c7e4de174e2abb4ef1cd7970032e.png" />
          </a>
        </div>
        <div className="col 6">
          <a href="/product">
            <img src="https://file.hstatic.net/200000722513/file/promotion_right_-_ban_ghe_766cabd265b94007812be23449cc0a2c.png" />
          </a>
        </div>
      </div>
      {/* Home product */}
      {/* PC */}
        <SlideProduct name="PC Bán Chạy" namedetail1 ="PC Gaming" namedetail2 ="PC Bán chạy" namedetail3="PC Doanh nghiệp" />
      {/* Laptop */}
      <SlideProduct name="Laptop Bán Chạy" namedetail1 ="Laptop Gaming" namedetail2 ="Laptop Bán chạy" namedetail3="Laptop Doanh nghiệp" />
      {/* Banner 1 ảnh to - 2 ảnh nhỏ */}
      <div className="home-banner row mb-4 mt-2">
        <div className="home-banner-8 col-8">
          <a href="">
            <img src="https://file.hstatic.net/200000722513/file/banner_man_hinh_1580x510__1__2df9691545ea4ae7a64c5692cfcc5ec3.png" />
          </a>
        </div>
        <div className="home-banner-4 col-4">
          <div className="mb-4">
            <a href="">
              <img src="https://file.hstatic.net/200000722513/file/laptop-rtx-40-series-combo-3-banner_d5b482d4f755472c8ea8967d6f640a40.png" />
            </a>
          </div>
          <div>
            <a href="">
              <img src="https://file.hstatic.net/200000722513/file/bot_promotion_banner_small_2_2ad55c2345c64fbfb87dab4957b33914.png" />
            </a>
          </div>
        </div>
      </div>
      {/* Chuột */}
      <SlideProduct name="Chuột Bán Chạy" namedetail1 ="Chuột Gaming" namedetail2 ="Chuột Bán chạy" namedetail3="Chuột Doanh nghiệp" />
      {/* Home list product */}
      <div className="mb-4 Home_list-product row">
        <h4> Danh sách sản phẩm</h4>
        <div className="seraphia"></div>
        <div className="row">
          {listProduct.map((item) => (
            <div className="col-1">
              <a href="/product">
                <img src={item.imageUrl} />
                <div>{item.name}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
