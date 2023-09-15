import React from "react";
import galleryImage1 from "../images/gallery/gallery-col-three-1.jpg";
import galleryImage2 from "../images/gallery/gallery-col-three-2.jpg";
import galleryImage3 from "../images/gallery/gallery-col-three-3.jpg";
import galleryImage4 from "../images/gallery/gallery-col-three-4.jpg";
import galleryImage5 from "../images/gallery/gallery-col-three-5.jpg";
import galleryImage6 from "../images/gallery/gallery-col-three-6.jpg";
import galleryImage7 from "../images/gallery/gallery-col-three-7.jpg";
import galleryImage8 from "../images/gallery/gallery-col-three-8.jpg";
import galleryImage9 from "../images/gallery/gallery-col-three-9.jpg";

export default function Gallery() {
  return (
    <div>
      <div className="banner_area">
        <h2>Gallery Classic</h2>
        <a href="#">
          Home <span> Gallery Classic</span>
        </a>
      </div>
      <section className="grid_gallery_area">
        <div className="container">
          <div className="left_tittle">
            <h2>Gallery</h2>
            <p className="bold">
              They can turn into your instructor, your helper, your mentor
            </p>
          </div>
          <div className="grid_gallery_inner">
            <div className="row grid_gallery_item_inner imageGallery1">
              <div className="col-lg-4 col-md-6 activites restaurant">
                <div className="grid_gallery_item">
                  <img src={galleryImage1} alt="" />
                  <div className="resort_g_hover">
                    <a className="light" href={galleryImage1}>
                      <i className="icon icon-Search" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 rooms interior">
                <div className="grid_gallery_item">
                  <img src={galleryImage2} alt="" />
                  <div className="resort_g_hover">
                    <a className="light" href={galleryImage2}>
                      <i className="icon icon-Search" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 activites restaurant">
                <div className="grid_gallery_item">
                  <img src={galleryImage3} alt="" />
                  <div className="resort_g_hover">
                    <a className="light" href={galleryImage3}>
                      <i className="icon icon-Search" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 rooms event restaurant">
                <div className="grid_gallery_item">
                  <img src={galleryImage4} alt="" />
                  <div className="resort_g_hover">
                    <a className="light" href={galleryImage4}>
                      <i className="icon icon-Search" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 activites interior">
                <div className="grid_gallery_item">
                  <img src={galleryImage5} alt="" />
                  <div className="resort_g_hover">
                    <a className="light" href={galleryImage5}>
                      <i className="icon icon-Search" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 rooms event restaurant">
                <div className="grid_gallery_item">
                  <img src={galleryImage6} alt="" />
                  <div className="resort_g_hover">
                    <a className="light" href={galleryImage6}>
                      <i className="icon icon-Search" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 rooms event restaurant">
                <div className="grid_gallery_item">
                  <img src={galleryImage7} alt="" />
                  <div className="resort_g_hover">
                    <a className="light" href={galleryImage7}>
                      <i className="icon icon-Search" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 activites interior">
                <div className="grid_gallery_item">
                  <img src={galleryImage8} alt="" />
                  <div className="resort_g_hover">
                    <a className="light" href={galleryImage8}>
                      <i className="icon icon-Search" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 rooms event restaurant">
                <div className="grid_gallery_item">
                  <img src={galleryImage9} alt="" />
                  <div className="resort_g_hover">
                    <a className="light" href={galleryImage9}>
                      <i className="icon icon-Search" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
