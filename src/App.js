import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import Header from "./components/Header/Header.js";
import Loader from "./components/Loader";
import CONTACT from "./views/homepage/Contact/index";
const ProjectPage = lazy(() => import("./views/projectpage/ProjectPage"));
const Footer = lazy(() => import("./components/Footer/Footer.js"));
const BlogPage = lazy(() => import("./views/blogpage"));
const PrivacyPolicy = lazy(() => import("./views/documents/PrivacyPolicy"));
const TnC = lazy(() => import("./views/documents/TnC"));
const Imprint = lazy(() => import("./views/documents/Imprint"));
const HomePage = lazy(() => import("./views/homepage"));
const ViewBlogPage = lazy(() => import("./views/homepage/Blog/ViewBlogPage"));


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p_slide_id: 0,
    };
  }

  change_p_slide_id = (p_slide_id) => {
    this.setState({ p_slide_id });
  };
  render() {
    return (

     
      <Suspense fallback={<Loader />}>
        <Router>
        <Helmet>
                <meta charSet="utf-8" />
                <title>SOFTSOURCED - WE DESIGN. WE DEVELOP. WE DELIVER.</title>
                <link rel="canonical" href="https://softsourced.de/" />
                </Helmet>
          <Header />

          <Switch>
            <Route path="/blog/:author/:blogid" component={BlogPage} />
            <Route path="/projects/:pname" component={ProjectPage} />
            <Route path="/privacy-policy/" component={PrivacyPolicy} />
            <Route path="/terms-and-conditions/" component={TnC} />
            <Route path="/imprint/" component={Imprint} />
            <Route path="/data-protection/" component={PrivacyPolicy} />
            <Route exact path="/ViewBlogPage" component={ViewBlogPage} />
            <Route exact path="/#CONTACT" component={CONTACT} />
            <Route path="/">
             

              <HomePage
                p_slide_id={this.state.p_slide_id}
                change_p_slide_id={this.change_p_slide_id.bind(this)}
              />
            </Route>
          </Switch>

          <Footer change_p_slide_id={this.change_p_slide_id.bind(this)} />
        </Router>
      </Suspense>
    );
  }
}

export default App;
