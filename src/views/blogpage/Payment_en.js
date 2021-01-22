import React from "react";
import { withTranslation } from "react-i18next";
import payment2 from "./../../assets/img/blog/payment2.png";
import payment3 from "./../../assets/img/blog/payment3.png";

const Payment_en = (props) => {
  return (
    <>
      <p>
        Please fasten your seatbelts. Not too tight though, let me take you on a
        smooth ride. Imagine yourself in a car strolling on the country road,
        sitting in the back seat. What you see outside is the payment landscape,
        one that the driver knows like the back of his hand. He shares some of
        what he knows about it.{" "}
      </p>

      <p>
        <b>1)The role of payment gateways </b>
      </p>

      <p>
        You run an <b>e-commerce website</b>? You run a brick and mortar store?
        You are on your lunch break and you want to order some food online?
        Don’t get me wrong, financial settlements in such scenarios might be
        possible, but a pain without payment gateways. You better embrace their
        existence.
      </p>
      <p>
        A payment gateway is an electronic bridge between a seller and a buyer.
        It allows for the buyer to send money to the seller in order to receive
        purchased goods or services in return. Payment gateways exist both
        offline and online: Offline transactions usually involve payment
        terminals, so-called Point of Sale (PoS) terminals. Online payments
        normally require customers to go through a checkout process to complete
        a purchase.<b>Most payments</b> , be it in the world wide web or in the
        supermarket around the corner,<b> are made through credit cards</b>
      </p>
      <p>
        Find an overview of payment methods of online shoppers around the globe
        below in figure a:
      </p>
      <p>
        <img src={payment2} alt="payment2" />
      </p>
      <p style={{ fontSize: "8px" }}>
        Figure a: Credit and debit cards are the preferred payment methods
        people use for online shopping, followed by electronic payment methods
        such as PayPal. Source:{" "}
        <a
          target="_blank"
          href="https://www.statista.com/statistics/508988/preferred-payment-methods-of-online-shoppers-worldwide/"
        >
          https://www.statista.com/statistics/508988/preferred-payment-methods-of-online-shoppers-worldwide/
        </a>
      </p>

      <p>
        <b>2)Credit Cards</b>
      </p>
      <p>
        If you are asking yourself why credit card payments - we take their
        existence for granted - are so popular in e-commerce? Here are three
        reasons:{" "}
      </p>
      <ul>
        <li>
          <p>
            Credit card payments allow for{" "}
            <b>instantaneous payment confirmation.</b> Money transfers, e.g.
            international wire transfers, are out of date. Or do you like the
            idea of sending someone money for an item you just ordered online
            only for you to wait for it to be dispatched after the payment has
            been received. This can take days, if not weeks.
          </p>
        </li>

        <li>
          <p>
            As a customer, you can<b> buy now but pay later.</b> You will be
            charged at payday when repayments are due. You want to make sure to
            spend in moderation.
          </p>
        </li>
        <li>
          <p>
            What you find most often today is a <b>serious security layer </b>
            before you can finalise a purchase in a checkout process, e.g. 3D
            secure.
          </p>
        </li>
      </ul>
      <p>
        There is a growing popularity of <b>credit card use,</b> also reflected
        in shrinking average credit card transaction values{""}
        <a
          target="_blank"
          href="https://www.merchantsavvy.co.uk/uk credit-card-statistics/"
        >
          (https://www.merchantsavvy.co.uk/uk credit-card-statistics/).
        </a>
      </p>
      <p>
        This makes me want to want to shed light on the mechanisms of credit
        <b> cards settlements</b> and how players involved benefit. After all,
        don’t we all want to know where our money goes? This is best explained
        in an example.
      </p>
      <p>
        <b>Examples</b>
      </p>
      <p>
        Fred buys a bike for 500 € on your ecommerce website with his VISA Card.{" "}
      </p>
      <p>
        <b>Who are the players involved in the settlement process? </b>
      </p>
      <p>
        <b>Merchant:</b> you{" "}
      </p>
      <p>
        <b>Buyer:</b> Fred
      </p>
      <p>
        <b>Credit card network (/association):</b> VISA
      </p>
      <p>
        <b>Issuing bank: </b>Fred’s bank
      </p>
      <p>
        <b>Acquiring bank:</b> Your bank{" "}
      </p>
      <p>
        <b>What does a typical settlement process look like? </b>
      </p>
      <ul>
        <li>
          <p>
            Fred completes the checkout process on your ecommerce website with
            his VISA card;
          </p>
        </li>
        <li>
          <p>
            Authorization takes place: Is Fred’s credit card valid to buy the
            bike?
          </p>
        </li>
        <li>
          <p>
            Upon successful authorization, the buyer pays 500 €, that happens as
            follows (realistic yet made up figures): The issuing bank sends 500
            € and gets to keep 8.50 €. 491.50 € are sent to VISA, they keep 0.50
            € and the acquiring bank keeps 1 €. The retailer ends up with 490 €.
            Check out figure b.
          </p>
        </li>
        <p>
          {" "}
          <img src={payment3} alt="payment3" />
        </p>
        <p style={{ fontSize: "8px" }}>
          Figure b: When a buyer purchases a good (e.g. a bike) using a credit
          card (e.g. VISA), both the issuing and acquiring bank as well as the
          credit card association get a cut of the total transaction amount.
          Inspired by:{" "}
          <a target="_blank" href="https://www.youtube.com/watch?v=IPxQQNyCxas">
            https://www.youtube.com/watch?v=IPxQQNyCxas
          </a>
        </p>
      </ul>
      <p>
        <b>How every player benefits: </b>
      </p>

      <ul>
        <li>
          <p>
            The merchant is granted access to the VISA network and can sell
            products to a wide range of their customers;
          </p>
        </li>
        <li>
          <p>
            The acquiring bank gets their cut of the total transaction amount;
          </p>
        </li>
        <li>
          <p>VISA gets their cut of the total transaction amount;</p>
        </li>
        <li>
          <p>
            The issuing bank makes gets the interchange fee and potentially some
            interest fees on top;
          </p>
        </li>
      </ul>
      <p>
        <b>3) Receiving payments from customers with your e-business </b>
      </p>
      <p>
        Let’s imagine (or maybe this actually applies?!) you run or want to run
        an e business. Of course, you would want your customers to be able to
        pay via credit card or other immediate means of payment. You, as a
        seller, want to receive money from your buyers. From what we know from
        above, one way or the other you need to rely on payment gateways to
        bring the money from the buyer to you. So how do you and payment
        gateways get into a working relationship? There are two ways you can get
        together:
      </p>
      <ul>
        <li>
          <p>
            <b>A bank can offer a payment gateway to you:</b>
            <br></br>
            If your bank has not approached you already, ask them if they want
            to provide your business with a service and online terminal that
            allow you to receive direct or credit card payments online. Your
            bank might be interested to plug you onto their portfolio of card
            associations they work with, e.g. VISA, MasterCard or AMEX. (Both
            your bank, and the credit card association, will take fees from each
            transaction as illustrated in the example above.) If they see your
            e-commerce is profitable, they are happy to collaborate. They will
            provide you, the lucrative seller, with a proper merchant account.
            However, a bank won’t offer you their payment gateway solution if
            they don’t see the revenues generated through transaction fees
            outweighing the costs of them implementing and maintaining their
            solution in your e-commerce. The bank simply assesses the risk of
            them losing money on you as too high. Harsh. Good news! You will
            still be able to receive credit card and direct payments.
            <b> External payment service providers are your best shot! </b>
          </p>
        </li>
        <li>
          <p>
            <b>Payment service providers are payment aggregators.</b>
            <br></br>
            They represent a network of merchants, so one can imagine a payment
            service provider as a mega merchant account. As such, a mega
            merchant account is of course directly tied to a bank. Where you
            alone might have been rejected by any bank before, you are now part
            of a network that is accepted by banks. Banks prefer networks to
            individual merchant accounts, mainly because of risk mitigation -
            the beauty in average. The payment service provider acts on your
            behalf as a middleman between you (and a bunch of other merchant
            accounts) and the bank. They can process and accept online and
            mobile transactions just like banks. For the sake of simplicity,
            think of payment service providers as your agency. For their
            services, they ask for agency fees on top of transaction fees.
          </p>
        </li>
      </ul>
      <p>
        <b>
          If you are running a small-medium sized enterprise (SME) that deals
          with online and offline direct or credit card payments, a payment
          service provider is usually what you want to go for.
        </b>{" "}
        If you want to know more about payment service providers, stay tuned or
        reach out.{" "}
      </p>
      <p>
        I hope you have enjoyed the short ride. softsourced accompanies e
        commerce businesses on their road to entrepreneurial success.
        <b>
          {" "}
          I will analyse a selection of payment service providers (PayPal,
          Stripe, Square, Mollie, etc.){" "}
        </b>
      </p>
    </>
  );
};
export default withTranslation()(Payment_en);
