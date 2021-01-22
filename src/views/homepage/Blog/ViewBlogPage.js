import React, { Component, lazy } from "react";
import { withTranslation } from "react-i18next";

import Header from "../../../components/Header/Header.js";
import Loader from "../../../components/Loader";

import blog_en from "../../../translations/homepage/viewblog/en.json";
import blog_de from "../../../translations/homepage/viewblog/de.json";
import { Container } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";

import blog2s from "../../../assets/img/blog2s.jpg";
import blog1s from "../../../assets/img/blog3s.jpg";

import blog3 from "../../../assets/img/blog/voice_blog.png";

import blog2sw from "../../../assets/img/blog2s.webp";
import blog1sw from "../../../assets/img/blog3s.webp";
import author1 from "../../../assets/img/blog/author.png";
import Hanush from "../../../assets/img/blog/author2.png";
import blog4 from "../../../assets/img/blog/payment_blog.jpg";
import blog5 from "../../../assets/img/blog/react_blog.jpg";
import landing1 from "../../../assets/img/blog/Payment_prov.jpg";

import "./ViewBlogPage.scss";

const ProjectPage = lazy(() => import("../../projectpage/ProjectPage"));
const Footer = lazy(() => import("../../../components/Footer/Footer.js"));
const BlogPage = lazy(() => import("../../blogpage"));
const PrivacyPolicy = lazy(() => import("../../documents/PrivacyPolicy"));
const TnC = lazy(() => import("../../documents/TnC"));
const Imprint = lazy(() => import("../../documents/Imprint"));
const HomePage = lazy(() => import(".."));

// import { Button } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

class ViewBlogPage extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        load: false,
        p_slide_id: 0,
      };
    }
  }
  // change_p_slide_id = (p_slide_id) => {
  //   this.setState({ p_slide_id });
  // };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.i18n.addResourceBundle("en", "blog", blog_en, true, false);
    this.props.i18n.addResourceBundle("de", "blog", blog_de, true, false);
    this.setState({ load: true });
    //window.scrollTo(0, 0);
  }

  render() {
    if (!this.state.load) {
      return <div>Loading...</div>;
    }
    const imgUrl = {
      payment_provider:{
        imgURL_art:[landing1],
        imgURL_aut:author1,

      },
      payment: {
        imgURL_art: [blog4, blog4],
        imgURL_aut: author1,
      },
      react: {
        imgURL_art: [blog5, blog5],
        imgURL_aut: Hanush,
      },
      voice_search: {
        imgURL_art: [blog3, blog3],
        imgURL_aut: author1,
      },
      g_marketing: {
        imgURL_art: [blog2s, blog2sw],
        imgURL_aut: author1,
      },
      mm_10052020: {
        imgURL_art: [blog1s, blog1sw],
        imgURL_aut: author1,
      },
    };

    const { t } = this.props;
    const blog_articles =
      blog_en &&
      blog_en.blogitems.map((blogPost, idx) => {
        console.log("blogPost", blogPost, idx);
        let name = blogPost.author[0] + "-" + blogPost.author[1];

        return (
          <>
            <a href={`/blog/${name}/${blogPost.bId}/`} key={blogPost.bId}>
              <div className="view_blog_article" key={blogPost.bId}>
                <div className="img_wrapper">
                  <picture>
                    <source
                      srcSet={imgUrl[blogPost.bId].imgURL_art[1]}
                      type="image/webp"
                    />
                    <img
                      src={imgUrl[blogPost.bId].imgURL_art[0]}
                      alt="blog image"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="content_wrapper">
                  <div className="title">
                    {t(`blog:blogitems:${idx}:blogtitle`)}
                  </div>
                  <div className="desc">
                    {t(`blog:blogitems:${idx}:blogdesc`)}
                  </div>
                  <div className="author">
                    <div className="author_img_wrapper">
                      <img
                        src={imgUrl[blogPost.bId].imgURL_aut}
                        alt={blogPost.author[0]}
                        loading="lazy"
                      />
                    </div>
                    <div className="author_nd">
                      <div className="author_name desc">
                        {`${blogPost.author[0]} ${blogPost.author[1]}`}
                      </div>
                      <div className="author_date desc">{blogPost.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </>
        );
      });

    return (
      <div>
        {/* <Header></Header> */}
        <div className="section view_blog_s">
          <Container>
            <div className="view_blog_article">
              <h2 className="title"> {t("blog:title")}</h2>
              {/* <p className="desc c_desc">{t("blog:desc")}</p> */}
            </div>
            <div className="view_blog_articles">{blog_articles}</div>
          </Container>
        </div>
      </div>
    );
  }
}

export default withTranslation()(ViewBlogPage);
