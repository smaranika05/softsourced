import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import blog_en from "../../../translations/homepage/blog/en.json";
import blog_de from "../../../translations/homepage/blog/de.json";
import { Container } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import Hanush from "../../../assets/img/blog/author2.png";
import blog4 from "../../../assets/img/blog/payment_blog.jpg";
import blog5 from "../../../assets/img/blog/react_blog.jpg";
import landing1 from "./../../../assets/img/blog/Payment_prov.jpg";
import "./Blog.scss";
import blog3s from "../../../assets/img/blog1s.jpg";
import blog2s from "../../../assets/img/blog2s.jpg";
import blog1s from "../../../assets/img/blog3s.jpg";

import blog3sw from "../../../assets/img/blog1s.webp";
import blog2sw from "../../../assets/img/blog2s.webp";
import blog1sw from "../../../assets/img/blog3s.webp";
import author1 from "../../../assets/img/blog/author.png";

//import view from "./ViewBlogPage";

// import { Button } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
//import { Link } from "react-router";

class Blog extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        load: false,
      };
    }
  }

  componentDidMount() {
    this.props.i18n.addResourceBundle("en", "blog", blog_en, true, false);
    this.props.i18n.addResourceBundle("de", "blog", blog_de, true, false);
    this.setState({ load: true });
  }

  render() {
    if (!this.state.load) {
      return <div>Loading...</div>;
    }
    const imgUrl = {
      payment_provider: {
        imgURL_art: [landing1,landing1],
        imgURL_aut: author1,
      },
      payment: {
        imgURL_art: [blog4,blog4],
        imgURL_aut: author1,
      },
    };
    // const content = {
    //     bid: ["mm_10052020","g_marketing"],
    //     author: [["MARC","MUELLER"],["MARC","MUELLER"]],
    //     pdate: ["10th May 2020","21st August 2020"],
    //     titles: ["The 10 must-haves your landing page needs to convert","TECHCRUNCH"],
    //     desc: ["Paid search, Search Engine Advertising (SEA) are great – but have you spent enough time and money on your SEO-strategy?",
    //         "The COVID-19 pandemic has already triggered a number of layoffs across industries, from travel companies to scooter startups..."

    //              ],
    //     imgURL_art: [[blog1s,blog1sw],[blog2s,blog2sw]],
    //     imgURL_aut: [author1,author1]
    // }

    const { t } = this.props;
    const blog_articles =
      blog_en &&
      blog_en.blogitems.map((blogPost, idx) => {
        console.log("blogPost", blogPost, idx);
        let name = blogPost.author[0] + "-" + blogPost.author[1];

        return (
          <>
            <a href={`/blog/${name}/${blogPost.bId}/`} key={blogPost.bId}>
              <div className="blog_article" key={blogPost.bId}>
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
      <div className="section blog_s">
        <Container>
          <div>
            <h2 className="title"> {t("blog:title")}</h2>
            <p className="desc c_desc">{t("blog:desc")}</p>
          </div>
          <div className="blog_articles">{blog_articles}</div>
          <div class="blog_article">
            <a href="/ViewBlogPage"> View all blogs</a>
          </div>
        </Container>
      </div>
    );
  }
}

export default withTranslation()(Blog);
