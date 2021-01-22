import React from "react";
import { withTranslation } from "react-i18next";

const React_en = (props) => {
  return (
    <>
      <p>
        The question of what to use when planning a website is quite an
        important one, and depending on the type of website you want to build it
        comes down to a few options.
      </p>
      <p>
        WordPress is the most commonly used Content Management System (CMS) for
        making websites and has been for a while now. But it does have its
        drawbacks. In the same vein React has been coming up and is really
        making a difference when it comes to building a website.
      </p>
      <p>
        Right off the bat you should know that WordPress is a CMS and React
        isn’t. However React can be used to build a web application by
        cooperating with other libraries to make a finished product. Let’s have
        a look at the good and the bad between the two and then make a decision
        on what to pick for your next website project.
      </p>
      <p>Advantages in using WordPress:</p>
      <ul>
        <li>
          <p>
            <b>Easy to start</b>
            <br></br>It is easy to install and start your own WordPress website
            in a few minutes. Some hosting providers even have a one-click
            installation tool ready in their Direct Admin as well.
          </p>
        </li>
        <li>
          <p>
            <b>Small learning curve for beginners </b>
            <br></br>
            If you want to build a simple website with necessary functions, then
            WordPress has got it all for you right out of the box. E.g. Post
            Editor for writing articles, drag and drop menus and sidebars tools,
            Authentication system with multiple roles etc.
          </p>
        </li>
        <li>
          <p>
            <b>Top-Quality CMS </b>
            <br></br>
            Most people are happy with how easy it is to do things in WordPress.
          </p>
        </li>
        <li>
          <p>
            <b>Lots of plugins and themes </b>
            <br></br>
            From having web forms sent to your email with every submission to
            the use of Webboards or an auto backup system, all can be done with
            a simple addition of plugins. Even for those of you who aren’t
            designers at heart, you will be able to make a beautiful website
            with the use of existing themes.
          </p>
        </li>
        <li>
          <p>
            <b>Low cost hosting </b>
            <br></br>
            Most of the low cost web servers are running PHP, which does bring
            the cost of setting up a new WordPress website considerably low. The
            downside being that these servers usually run old or deprecated
            versions of PHP which are insecure and may have inadequate
            performance.
            <a
              href="https://themeisle.com/blog/cheap-wordpress-hosting/)"
              alt="hostingpages"
            >
              {" "}
              Here are some of the recommendations for the best hosting
              providers here with the best value for money{" "}
            </a>
          </p>
        </li>
        <li>
          <p>
            <b>SEO is just too good </b>
            <br></br>
            If you are building a website which relies on good Search Engine
            Optimization (SEO), using WordPress gives you good SEO right out of
            the box. There are a lot of SEO plugins to help you improve your
            ranking as well as social sharing. React does have SSR (server-side
            rendering) which is great, but SEO in WordPress is still one of the
            best. To build your SEO-strategy, you can have a look at{" "}
            <a
              href="https://softsourced.de/blog/MARC-MUELLER/mm_10052020/"
              alt="seopages"
            >
              This.{" "}
            </a>
          </p>
        </li>
      </ul>
      <p>
        <b>Advantages in using the React Ecosystem</b>
      </p>
      <ul>
        <li>
          <p>
            <b>Building native apps with React Native</b>
            <br></br>
            Once you have an understanding of React, your knowledge broadens so
            that you can use it to build mobile applications in both Android and
            iOS without an additional service, plugin, etc.
          </p>
        </li>
        <li>
          <p>
            <b>Most of the libraries are FREE and supported by the community</b>
            <br></br>
            While WordPress is now overwhelmed by paid themes and plugins,
            building on React is free most of the time. Also the added advantage
            of the React community helping and supporting each other’s plugins.
          </p>
        </li>
        <li>
          <p>
            <b>Great for building websites which receive data from APIs</b>
            <br></br>
            Application Programming Interfaces (APIs) require lower bandwidth to
            send data, thus making the website faster. Now with the new
            generation of web ecosystem turning to APIs, React is much easier to
            use to parse the received data into components, than it is with
            WordPress.
          </p>
        </li>
      </ul>
      <p>
        <b> Now, what I’ve noted as being the downsides to using WordPress:</b>
      </p>
      <ul>
        <li>
          <p>
            <b>Design:</b>
            <br></br> You are constrained in the design and the way you organize
            your website. That is why all WordPress sites look similar, and it
            quickly becomes expensive if you wish to create something unique.
          </p>
        </li>

        <li>
          <p>
            <b>Security:</b>
            <br></br> WordPress is easily hacked due to security issues in
            plugins (as outlined on{" "}
            <a
              target="_blank"
              href="https://ithemes.com/wordpress-security-issues/"
            >
              https://ithemes.com/wordpress-security-issues/
            </a>
            and{" "}
            <a target="_blank" href="https://wpvulndb.com/statistics">
              https://wpvulndb.com/statistics
            </a>{" "}
            ), and this can happen regardless of having installed several
            “Security Plugins” on the WordPress site.
          </p>
        </li>
        <li>
          <p>
            <b>Updates:</b>
            <br></br> Updates with WordPress are a big issue. There are breaking
            changes and some plugins stop working. Most of the plugins are
            developed by people in their free time and not by professional
            programmers — and do not meet a professional, secure standard.
          </p>
        </li>
        <li>
          <p>
            <b> Scaling:</b>
            <br></br> WordPress runs on PHP, an old programming language. It can
            be hard to scale, therefore, the page becomes slower when growing —
            either content on the page or the visitor number. There are tricks
            on how to deal with the performance on PHP, but it still is not made
            for many visitors and it becomes expensive in hosting. A few helpful
            tips:{" "}
            <a
              target="_blank"
              href="https://stackify.com/php-performance-tuning/"
            >
              https://stackify.com/php-performance-tuning/
            </a>{" "}
            <a
              target="_blank"
              href=" https://www.keycdn.com/blog/php-performance"
            >
              {" "}
              https://www.keycdn.com/blog/php-performance
            </a>
          </p>
        </li>
        <li>
          <p>
            <b>Biggest issue</b>
            <br></br>
            Technical Debt
            <a
              href="(https://en.wikipedia.org/wiki/Technical_debt)"
              alt="techpages"
            >
              <b>Technical Debt</b>
            </a>
            : Since WordPress is the main player on the market, many of their
            customers own websites created with older versions of WordPress.
            Therefore, they cannot come up with a new system that fixes all
            underlying issues that are deeply ingrained in their system. This
            concept is called “technical debt” — and WordPress has a tremendous
            one. The result of the technical debt is the following: it might be
            fast to start a project with WordPress, adding further features will
            get slower and slower over time. Tech debt, as it’s sometimes
            called, is essentially the cost you incur over time for having
            imperfect code. Changes and updates to the source code have a cost,
            as does adding a new member to the dev team, adding a new feature,
            or fixing bugs and patching exploits.
          </p>
          <p>
            As your project gets larger, the codebase expands and more people
            work on that code, their voices and styles will clash here and
            there. Maybe you have a deadline and a less-than-ideal solution is
            patched into the source code to finish on time. Perhaps you add in
            an open-source component you don’t fully understand to handle a
            feature instead of coding it yourself. Or you could switch libraries
            between versions (from Backbone to React, for example), but still
            need to support folks using the legacy codebase for their projects.
            Absolutely none of these things are bad. Not on their own. Maybe not
            at all. But when added together, the technical debt they incur is
            going to have to be paid back at some point in the future.
          </p>
          <p>
            At some point, that open-source component may need to be replaced
            (or forked). That will cost time and money. In the distant future,
            you’ll need to remove all of the Backbone code from your project and
            stop supporting legacy users. Again, time and money. That patch you
            did to meet a deadline? Well, it will eventually come undone and
            need a more permanent fix. Once again, time and money. And you’ll
            have new members of your team who go back through old code to do all
            this, needing to understand previous developers’ code and logic.
            Time. Money.
          </p>
          <p>
            While technical debt is an abstract term, often metaphorical, the
            cost of tech debt is very real. Paying it back has a monetary value,
            and you can track the interest you pay on it in work-hours and pay
            stubs. You can see it in the bottom line of all software
            development.{" "}
            <a
              target="_blank"
              href="https://distributedledgerinc.com/the-costs-and-risks-of-technical-debt/"
            >
              (https://distributedledgerinc.com/the-costs-and-risks-of-technical-debt/)
            </a>
          </p>
        </li>
      </ul>
      <p>
        <b>And the downsides which I see for React:</b>
      </p>
      <ul>
        <li>
          <p>
            <b>Building native apps with React Native</b>
            <br></br>
            Once you have an understanding of React, your knowledge broadens so
            that you can use it to build mobile applications in both Android and
            iOS without an additional service, plugin, etc.
          </p>
        </li>
        <li>
          <p>
            React isn’t a framework:
            <b></b>
            <br></br>
            Philosophy is great, but when you need to get something done
            quickly, the React way can be frustrating. If you have clients and
            projects and pressing deadlines and the first page of your React
            handbook no longer works, you can get frustrated. The looseness with
            which React can be employed is great for experimentation but
            challenging when you’re trying to do things the right way. Knowing
            there isn’t one right way to do things will save you some time here.
          </p>
        </li>
        <li>
          <p>
            Community conventions are still developing:
            <b></b>
            <br></br>
            How do I structure this? How do people handle that? I won’t say
            library developers don’t have strong opinions on how their libraries
            should be used because they certainly do. The problem is turnover
            and change is so rapid, these don’t have time to solidify into
            common practices. Only those really paying attention to monthly,
            weekly, daily changes in the React community could tell you the best
            way to use X library.
          </p>
        </li>
      </ul>
      <p>
        The main reason why many people still go for Wordpress is that it is
        cheaper in upfront cost, and a lot of agencies tend not to tell
        customers about the effects of technical debt (low initial cost and high
        subsequent service cost).
      </p>
      <p>
        Looking at this so far, it would seem that WordPress is just not worth
        working with since its disadvantages outweigh its advantages.
      </p>
      <p>
        f you’re just building a small website that’s unlikely to change or
        require new content WordPress is almost certainly going to be a better
        choice. This is especially true if you don’t have access to a developer.
        Its ease of use, combined with its extensibility, are the main reasons
        why it’s now powering over 18.9% of all the websites on the Internet.{" "}
      </p>
      <p>
        <a
          target="_blank"
          href="https://managewp.com/blog/14-surprising-statistics-about-wordpress-usage"
        >
          (https://managewp.com/blog/14-surprising-statistics-about-wordpress-usage)
        </a>
      </p>
      For anything that will require building on later and that needs security
      React is the way to go.
      <p>
        For anything that will require building on later and that needs security
        React is the way to go.
      </p>
    </>
  );
};
export default withTranslation()(React_en);
