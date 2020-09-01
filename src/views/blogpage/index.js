import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import blogpage_en from '../../translations/blogpage/titles/en.json';
import blogpage_de from '../../translations/blogpage/titles/de.json';
import blog3s from '../../assets/img/blog1s.jpg';
import blog2s from '../../assets/img/blog2s.jpg';
import blog1s from '../../assets/img/blog3s.jpg';
import blogimg from '../../assets/img/blog/blgimg2.jpg';
import blgimg from '../../assets/img/blog/blgimg1.jpg';
import author1 from '../../assets/img/blog/author.png';
import instagram_logo from '../../assets/img/blog/instagram_logo.svg';
import facebook_logo from '../../assets/img/blog/facebook_logo.svg';
import linkedin_logo from '../../assets/img/blog/linkedin_logo.svg';
import GermanM from './G_marketingde.js';
import EnglishM from './G_marketing.js';
import GermanBlog from './MM_10052020de.js';
import EnglishBlog from './MM_10052020.js';

import './BlogPage.scss';
class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laod: false,
    
    };
    this.blog_content = {
      mm_10052020: {
        name: 'MARC MÜLLER',
        title: 'The 10 must-haves your landing page needs to convert',
        date: '17th August 2020',
        blogimage: blogimg,
        social_links: [
          [
            instagram_logo,
            'https://www.instagram.com/?url=https://softsourced.de/blog/MARC-MUELLER/mm_10052020/',
          ],
          [
            linkedin_logo,
            'http://www.linkedin.com/shareArticle?mini=true&url=https://softsourced.de/blog/MARC-MUELLER/mm_10052020/',
          ],
          [
            facebook_logo,
            'https://www.facebook.com/sharer.php?u=https://softsourced.de/blog/MARC-MUELLER/mm_10052020/',
          ],
        ],
        imgURL_aut: author1,
        englishBlog: <EnglishBlog />,
        germanBlog: <GermanBlog />
      },
      g_marketing:{
        name: "MARC MÜLLER",
        title: "WIRED",
        date: "21 August 2020",
        blogimage:blgimg,
        social_links: [[instagram_logo,'https://www.instagram.com/?url=https://softsourced.de/blog/MARC-MUELLER/g_marketing/'],[linkedin_logo,'http://www.linkedin.com/shareArticle?mini=true&url=https://softsourced.de/blog/MARC-MUELLER/g_marketing/'],[facebook_logo,'https://www.facebook.com/sharer.php?u=https://softsourced.de/blog/MARC-MUELLER/g_marketing/'],],
        imgURL_aut: author1,
        englishBlog: <EnglishM />,
        germanBlog: <GermanM />,
    }
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.i18n.addResourceBundle(
      'en',
      'blogpage_t',
      blogpage_en,
      true,
      false
    );
    this.props.i18n.addResourceBundle(
      'de',
      'blogpage_t',
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
      <div className='section blogpage_s' id='blogpage'>
        <Container>
        
          <h2 className='title'>{this.props.t(`blogpage_t:titles.${id}`)}</h2>
          
          <div className='author'>
            <div className='details'>
              <div className='img_wrapper'>
                <img src={author1} alt={this.blog_content[id].name} />
              </div>
              <div className='nd'>
                <div className='name desc'>
                  {`${this.blog_content[id].name}`}
                </div>
                <div className='date desc'>{this.blog_content[id].date}</div>
              </div>
            </div>
            <div className='author_social_links'>
              {this.blog_content[id].social_links.map((item, idx) => {
                return (
                  <a href={item[1]} target="_blank">
                    {' '}
                    <img src={item[0]} alt='social_link' />
                  </a>
                );
              })}
            </div>
            
          </div>
          
         
          
          <div className='divider' />
          <div className='blgimg'>
          <img src={blgimg} alt={this.blog_content[id].name} />
          </div>
        
          
          <div className='Blogdesc'>
            {this.props.i18n.language === 'en'
              ? this.blog_content[id].englishBlog
              : this.blog_content[id].germanBlog}
          </div>
          <a href="https://softsourced.de/#CONTACT" class="button">GET IN TOUCH</a>

        </Container>
      </div>
    );
  }
}

export default withTranslation()(BlogPage);
