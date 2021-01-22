import React, { Component } from "react";
import { Container } from "@material-ui/core";
import { withTranslation } from "react-i18next";
import blogpage_en from "../../translations/blogpage/titles/en.json";
import blogpage_de from "../../translations/blogpage/titles/de.json";
import blog3s from "../../assets/img/blog1s.jpg";
import blog2s from "../../assets/img/blog2s.jpg";
import blog1s from "../../assets/img/blog3s.jpg";
import blogimg from "../../assets/img/blog/blgimg2.jpg";
import blgimg from "../../assets/img/blog/blgimg1.jpg";
import author1 from "../../assets/img/blog/author.png";
import author2 from "../../assets/img/blog/author2.png";
import landing from "../../assets/img/blog/landing.jpg";
import instagram_logo from "../../assets/img/blog/instagram_logo.svg";
import facebook_logo from "../../assets/img/blog/facebook_logo.svg";
import linkedin_logo from "../../assets/img/blog/linkedin_logo.svg";
import Payment_img from "../../assets/img/blog/payment_blog.jpg";
import React_img from "../../assets/img/blog/react_blog.jpg";
import voice_img from "../../assets/img/blog/voice_blog.png";
import GermanM from "./G_marketingde.js";
import EnglishM from "./G_marketing.js";
import GermanBlog from "./MM_10052020de.js";
import EnglishBlog from "./MM_10052020.js";
import GermanVoice from "./Voice_search_de";
import EnglishVoice from "./Voice_search_en";
import ReactEn from "./React_en";
import ReactDe from "./React_de";
import PaymentEn from "./Payment_en";
import PaymentDe from "./Payment_de";
import PaymentPPen from "./Payment_Provider_en";
import PaymentPPde from "./Payment_Provider_de";
import landing1 from  "../../assets/img/blog/Payment_prov.jpg"

import "./BlogPage.scss";
class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laod: false,
    };
    this.blog_content = {
      payment: {
        name: "MARC MÜLLER",
        title: "WIRED",
        date: "11th September 2020",
        blogimage: Payment_img,
        social_links: [
          [
            instagram_logo,
            "https://www.instagram.com/?url=https://softsourced.de/blog/MARC-MUELLER/g_marketing/",
          ],
          [
            linkedin_logo,
            "http://www.linkedin.com/shareArticle?mini=true&url=https://softsourced.de/blog/MARC-MUELLER/g_marketing/",
          ],
          [
            facebook_logo,
            "https://www.facebook.com/sharer.php?u=https://softsourced.de/blog/MARC-MUELLER/g_marketing/",
          ],
        ],
        imgURL_aut: author1,
        englishBlog: <PaymentEn />,
        germanBlog: <PaymentDe />,
      },
      react: {
        name: "HANUSH PILLAI",
        title: "WIRED",
        date: "4th September 2020",
        blogimage: React_img,
        social_links: [
          [
            instagram_logo,
            "https://www.instagram.com/?url=https://softsourced.de/blog/MARC-MUELLER/g_marketing/",
          ],
          [
            linkedin_logo,
            "http://www.linkedin.com/shareArticle?mini=true&url=https://softsourced.de/blog/MARC-MUELLER/g_marketing/",
          ],
          [
            facebook_logo,
            "https://www.facebook.com/sharer.php?u=https://softsourced.de/blog/MARC-MUELLER/g_marketing/",
          ],
        ],
        imgURL_aut: author2,
        englishBlog: <ReactEn />,
        germanBlog: <ReactDe />,
      },
      voice_search: {
        name: "MARC MÜLLER",
        title: "WIRED",
        date: "28th August 2020",
        blogimage: voice_img,
        social_links: [
          [
            instagram_logo,
            "https://www.instagram.com/?url=https://softsourced.de/blog/MARC-MUELLER/g_marketing/",
          ],
          [
            linkedin_logo,
            "http://www.linkedin.com/shareArticle?mini=true&url=https://softsourced.de/blog/MARC-MUELLER/g_marketing/",
          ],
          [
            facebook_logo,
            "https://www.facebook.com/sharer.php?u=https://softsourced.de/blog/MARC-MUELLER/g_marketing/",
          ],
        ],
        imgURL_aut: author1,
        englishBlog: <EnglishVoice />,
        germanBlog: <GermanVoice />,
      },
      g_marketing: {
        name: "MARC MÜLLER",
        title: "WIRED",
        date: "21st August 2020",
        blogimage: blgimg,
        social_links: [
          [
            instagram_logo,
            "https://www.instagram.com/?url=https://softsourced.de/blog/MARC-MUELLER/g_marketing/",
          ],
          [
            linkedin_logo,
            "http://www.linkedin.com/shareArticle?mini=true&url=https://softsourced.de/blog/MARC-MUELLER/g_marketing/",
          ],
          [
            facebook_logo,
            "https://www.facebook.com/sharer.php?u=https://softsourced.de/blog/MARC-MUELLER/g_marketing/",
          ],
        ],
        imgURL_aut: author1,
        englishBlog: <EnglishM />,
        germanBlog: <GermanM />,
      },
      mm_10052020: {
        name: "MARC MÜLLER",
        title: "The 10 must-haves your landing page needs to convert",
        date: "17th August 2020",
        blogimage: landing,
        social_links: [
          [
            instagram_logo,
            "https://www.instagram.com/?url=https://softsourced.de/blog/MARC-MUELLER/mm_10052020/",
          ],
          [
            linkedin_logo,
            "http://www.linkedin.com/shareArticle?mini=true&url=https://softsourced.de/blog/MARC-MUELLER/mm_10052020/",
          ],
          [
            facebook_logo,
            "https://www.facebook.com/sharer.php?u=https://softsourced.de/blog/MARC-MUELLER/mm_10052020/",
          ],
        ],
        imgURL_aut: author1,
        englishBlog: <EnglishBlog />,
        germanBlog: <GermanBlog />,
      },
      payment_provider: {
        name: "MARC MÜLLER",
        title: "The 10 must-haves your landing page needs to convert",
        date: "18th September 2020",
        blogimage: landing1,
        social_links: [
          [
            instagram_logo,
            "https://www.instagram.com/?url=https://softsourced.de/blog/MARC-MUELLER/mm_10052020/",
          ],
          [
            linkedin_logo,
            "http://www.linkedin.com/shareArticle?mini=true&url=https://softsourced.de/blog/MARC-MUELLER/mm_10052020/",
          ],
          [
            facebook_logo,
            "https://www.facebook.com/sharer.php?u=https://softsourced.de/blog/MARC-MUELLER/mm_10052020/",
          ],
        ],
        imgURL_aut: author1,
        englishBlog: <PaymentPPen/>,
        germanBlog: <PaymentPPde/>,
      },
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.i18n.addResourceBundle(
      "en",
      "blogpage_t",
      blogpage_en,
      true,
      false
    );
    this.props.i18n.addResourceBundle(
      "de",
      "blogpage_t",
      blogpage_de,
      true,
      false
    );
    this.setState({ load: true });
  }

  render() {
    if (!this.state.load) {
      return <div>Loading...</div>;
    }

    let id = this.props.match.params.blogid;
    return (
      <div className="section blogpage_s" id="blogpage">
        <Container>
          <h2 className="title">{this.props.t(`blogpage_t:titles.${id}`)}</h2>

          <div className="author">
            <div className="details">
              <div className="img_wrapper">
                <img
                  src={this.blog_content[id].imgURL_aut}
                  alt={this.blog_content[id].name}
                />
              </div>
              <div className="nd">
                <div className="name desc">
                  {`${this.blog_content[id].name}`}
                </div>
                <div className="date desc">{this.blog_content[id].date}</div>
              </div>
            </div>
            <div className="author_social_links">
              {this.blog_content[id].social_links.map((item, idx) => {
                return (
                  <a href={item[1]} target="_blank">
                    {" "}
                    <img src={item[0]} alt="social_link" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="divider" />
          <div className="blgimg">
            <img
              src={this.blog_content[id].blogimage}
              alt={this.blog_content[id].name}
            />
          </div>

          <div className="Blogdesc">
            {this.props.i18n.language === "en"
              ? this.blog_content[id].englishBlog
              : this.blog_content[id].germanBlog}
          </div>

          <div className="wrapper">
            <a href="/#CONTACT" class="button">
              GET IN TOUCH
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

export default withTranslation()(BlogPage);
