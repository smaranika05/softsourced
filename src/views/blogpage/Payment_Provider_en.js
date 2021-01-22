import React from "react";
import { withTranslation } from "react-i18next";
import table1 from "../../assets/img/blog/6i.png";
import table2 from "../../assets/img/blog/6iii.png";
import table3 from "../../assets/img/blog/6iv.png";
import table4 from "../../assets/img/blog/6ii.png";

const Payment_provider_en = (props) => {
  return (
    <>
      <p>
      You want to build up a greater customer base for your ecommerce website? Yes, you can market or  advertise your brand on other websites. But did you know that one of the most efficient ways to increase your customer base is by opening up as many gates as possible for money to flow in? It is all about accommodating your customers in the way they want to pay! Yes, you want to make sure that the process from filling a shopping cart to checking out fully convinces your customers. More importantly though, you want to avoid your customers abandoning their shopping cart just because you didn’t offer a suitable payment method. Here, I present four payment service solutions: PayPal, Stripe, Mollie, and Square. Each one of which certainly helps you seize every single one of your customers (so you can actually call them buyers).

      </p>
      <p>
       <b>1) PayPal</b>
      </p>
      <p>
      Almost everyone has used or thought of using PayPal hands down. With more than 270 million active participants and more than 100 accepted currencies in their payment network, they offer one of the most widely-used and trusted digital payment services online. PayPal convinces with a seamless user interface and the multitude of payment options available for buyers. This is good for you as a seller. Our clients have found PayPal to boost their revenues. Or would you want to miss out on an increased number of customers? On top of that, your bank account details remain undisclosed to other participants, even to those who receive a payment from you. 
      </p>
      <p>
        <b>An ordinary PayPal transaction on your ecommerce website:</b>
      </p>
      
      
          <ol>
              <p>
                  <li>Your customer proceeds to their shopping cart;</li>
              </p>
              <p>
                  <li>They then decide  to pay with PayPal;</li>
              </p>
              <p>
                  <li>Finally they  complete their order. Depending on the payment process option you feature on your store, the user experience (UX) varies.</li>
              </p>
      
        </ol>
        <p><img src={table1} alt="Payment Provider"></img></p>
        <p>Source of table above:<a href="https://www.simicart.com/blog/wp-content/webp-express/webp-images/doc-root/blog/wp-content/uploads/paypal-products-comparison-table-2048x618.png.webp"> https://www.simicart.com/blog/wp-content/webp-express/webp-images/doc-root/blog/wp-content/uploads/paypal-products-comparison-table-2048x618.png.webp
 </a></p>
    
      <p>
      To make sure your buyers experience a smooth checkout flow, PayPal by Braintree or PayPal Payments Pro are your best shots. Here, Application Programming Interfaces (APIs) render the setup of a frictionless checkout possible. Also note that PayPal Payments Standard does not come with the “pay as a guest” option.

As a seller, you will receive your funds within a matter of minutes into your PayPal account. Easy. If you request a payout into your bank account, you will be paid out a few days after the payment has been processed. The payout is free.

      </p>
      <p>
        
      <b>PayPal’s fee architecture</b>
      </p>
      <p>PayPal processes transactions through their proprietary payment gateway. To learn more about payment gateways, read my article <a href="https://softsourced.de/blog/MARC-MUELLER/payment/">here</a>. As a payment service provider, they take a share of the amount the buyer transfers to your PayPal merchant account. Below table applies to all national transactions that happen in the same currency:
</p>
<p><img src={table2} alt="Payment Provider"></img></p>
<p>
Check out <a href="https://www.paypal.com/en/webapps/mpp/ua/useragreement-full#tableOfFees1">https://www.paypal.com/en/webapps/mpp/ua/useragreement-full#tableOfFees1 </a>to learn about the fees of international, cross-currency transactions.
</p>
<p>
    <b>PayPal for Shopify</b>
</p>
<p>You know about PayPal’s pole position in Shopify’s lineup of payment providers? In a few simple steps (I recommend watching<a href="https://www.youtube.com/watch?v=2J62hbcZpyY"> https://www.youtube.com/watch?v=2J62hbcZpyY</a>), you can connect your PayPal to your shopify account. Once that is done, you are set to receive payments via the PayPal payment gateway.
</p>
<p><b>PayPal for WooCommerce
</b></p>
<p>Happy days. Almost needless to say, WooCommerce features a PayPal Checkout. Read <a href="https://woocommerce.com/woocommerce-and-paypal/"> https://woocommerce.com/woocommerce-and-paypal/</a> for more details.
</p>
<p><b>PayPal for Headless Solutions</b></p>
<p>This largely depends on the backend solution you use. Most offer an out of the box integration that allows you to set up PayPal. If they don’t you can, with some work, create, integrate and use PayPal’s API using their developers portal (<a href="https://developer.paypal.com/docs/api/overview/">https://developer.paypal.com/docs/api/overview/</a>). This is something that softsourced has done in the past and would be able to do for you.</p>
<p><b>2)Stripe</b></p>  
<p>Stripe is an intermediate between your ecommerce website and bank. It is a payment solution that allows money to be sent and accepted online between you and your customers. Stripe’s payment solution has got a nice degree of flexibility to it, making it malleable enough for developers to work out an optimal, customised setup. As such, it has a growing adoption rate in companies with a dedicated IT department. 
Stripe has gained a reputation of supporting ambitious business, no matter their size. Both, Small-Medium Enterprises (SMEs) and big companies like Twitter, Facebook and Pinterest count on Stripe’s payment solution.
</p>
<p>With Stripe, your customers stay on your site during the checkout stage, they are not redirected to a dedicated virtual checkout terminal. This creates an uninterrupted, linear payment flow.
</p>
<p>As a seller, expect the amount you earn on a given day to land onto your bank account seven business days later. The payout is free. Sellers as well as buyers benefit from the wealth of payment options available.
</p>
<p><img src={table3} alt= "Payment Providers"></img></p>
<p>Besides a wide array of payment options and high security standards, companies that we consult, especially startups, have come to appreciate Stripe’s transparent, straight-forward fee architecture.
</p>
<p><b>Stripe’s fee architecture</b></p>
<p><img src={table4} alt="payment providers"></img></p>
<p><b>Stripe for Shopify</b></p>
<p>In your Shopify admin panel, go to Settings, click ‘payment providers’, ‘Choose third-party providers’, search for ‘Stripe’ and select it from the drop-down. Set up and activate your account in a few subsequent steps. Done. You can now accept credit card payments.
</p>
<p><b>Stripe for WooCommerce
</b></p>
<p> Of course there is a plugin available that, once integrated, allows your customers to pay you.
For detailed instructions on installation, setup and configuration, navigate to <a href="https://docs.woocommerce.com/document/stripe/"> https://docs.woocommerce.com/document/stripe/</a>
</p>
<p><b>Stripe for Headless Solutions</b></p>
    <p>If there is no readily available integration for the (backend) solution you are using, you will have to work with Stripe’s API  <a href="https://stripe.com/docs/api">https://stripe.com/docs/api</a>. Feel free to consult experts, e.g. softsourced, if help is needed.
</p>
<p><b>3) Mollie</b></p>
<p>Mollie is yet another payment service provider ecommerce shop owners should definitely know about. I personally like it a lot, softsourced has successfully set up countless ecommerce platforms featuring Mollie. With roughly 150 employees and more than 60000 clients worldwide, this Dutch company has some serious momentum. Simple and highly secure API-integrations make for a solution that is customisable by developers and can also be applied by less tech-savvy people.
</p>

<p>This payment solution is definitely up to speed. It offers the most popular payment options, an uninterrupted purchase experience on the client side and - if you ask our proper customers - an outstanding feature for recurring payments.

</p>
<p><b>Mollie’s fee architecture</b></p>
<p>Mollie charges a fixed fee and a merchant rate comparable to those incurred by its competitors (PayPal, Stripe, etc.). These vary between different payment options. For a detailed overview, check out <a href="https://www.mollie.com/fr/pricing">https://www.mollie.com/fr/pricing</a>
</p>
<p><b>Mollie for Shopify</b></p>
<p>Connect to your Shopify dashboard, then go to ‘Settings’, click ‘payment providers’, ‘Choose third-party providers’, search for ‘Mollie’ and select it from the drop-down. Enter your Mollie account ID and API key to then accept credit card and other sorts of payment.</p>
<p><b>Mollie for WooCommerce</b></p>
<p>WooCommerce is another e-commerce option supported by Mollie. Just install their proprietary plugin following the documentation. You will be able to accept and receive payments from your customers.</p>
<p><b>Mollie for Headless Solutions</b></p>
<p>Same old, same old. It will most likely come down to you setting up an API-based solution <a href="https://docs.mollie.com/">https://docs.mollie.com/</a>. This is something any decent developer can do for you. softsourced has got a bunch of very good developers to their name.
</p>
<p><b>Square</b></p>
<p>Square is one of the most interesting projects in the payment landscape. This American payment processor allows merchants to receive payments in the most straightforward ways possible, e.g. via sharable pay links that bring your customer to a dedicated checkout page. Not only for developers, Square comes with a decent level of flexibility and an easy-to-integrate API. Square supports one-off and recurring payments. It also offers their proprietary Point of Sale (PoS) for offline stores, restaurants and other merchants. On top of that, Square offers a free, intuitive site builder for ecommerce websites, be it for food delivery apps or other retail stores.
</p>
    
<p><b>Square’s fee architecture</b></p>
<p>Square charges 2.9 % +  0.30 € per online store stale, no matter the type or size of your business.</p>
<p><b>Square for Shopify
</b></p>
<p>Yikes! Here’s the deal: Shopify does not integrate with Square.
Lucky you! There is Zapier (<a href="https://zapier.com/apps/shopify/integrations/square">https://zapier.com/apps/shopify/integrations/square</a>) linking Shopify and Square. And of course there is softsourced for a clean and accurate installation.</p>
<p><b>Square for WooCommerce</b></p>    
<p>WooCommerce is partnered up and integrates with Square. For a documentation to achieve the integration, this is a good starting point: <a href="https://squareup.com/help/us/en/article/3853-square-s-transactions-api-faqs">https://squareup.com/help/us/en/article/3853-square-s-transactions-api-faqs</a>
</p>
<p><b>Square for Headless Solutions</b></p>
<p><a href="https://developer.squareup.com/us/en">https://developer.squareup.com/us/en</a>. API, API, API. If you can’t get it rolling yourself, my team is there for you.
</p>
<p>
PayPal, Stripe, Mollie, Square. All four of them are different, yet well trusted, established and expert actors in the payment landscape. Also, they only represent a portion of players. softsourced has successfully set up countless ecommerce websites, thereby managing the integration of payment solutions (shopify, woocommerce, headless).
</p>
    
    </>
  );
};
export default withTranslation()(Payment_provider_en);
