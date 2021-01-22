import React from "react";
import { withTranslation } from "react-i18next";
import payment2 from "./../../assets/img/blog/payment2.png";
import payment3 from "./../../assets/img/blog/payment3.png";

const Payment_de = (props) => {
  return (
    <>
      <p>
        Bitte legen Sie Ihre Sicherheitsgurte an. Schnallen Sie sich nicht zu
        fest an, wird die Fahrt doch eher ein Spaziergang. Sie werden
        kutschiert, sitzen dabei auf dem Rücksitz und schauen aus dem Fenster.
        Draußen sehen Sie die Payment Landscape, auf Deutsch Zahlungslandschaft.
        Ihr Fahrer kennt sich in der Payment Landscape bestens aus und teilt
        sein Wissen.
      </p>

      <p>
        <b>1) Payment Gateways</b>
      </p>

      <p>
        Sie betreiben eine <b>E-Commerce-Website?</b> Sie betreiben einen
        Einzelhandel? Sie befinden sich gerade in Ihrer Mittagspause und möchten
        online etwas Essen bestellen? Ja, Sie können Rechnungen bzw. Schulden in
        solchen Szenarien zwar ohne Payment Gateways begleichen - so richtig
        zeitgemäß ist das aber nicht.
      </p>
      <p>
        Ein Payment Gateway ist eine elektronische Verbindung zwischen einem
        Verkäufer und einem Käufer. Sie ermöglicht dem Käufer, dem Verkäufer
        Geld zu senden, um gekaufte Waren oder Dienstleistungen als
        Gegenleistung zu erhalten. Payment Gateways existieren sowohl offline
        als auch online: Offline-Transaktionen erfolgen in der Regel über
        Zahlungsterminals, so genannte Point of Sale (PoS)-Terminals.
        Online-Zahlungen erfolgen in der Regel über einen Checkout-Prozess, an
        dessen Ende der Kauf abgeschlossen wird.<b> Die meisten Zahlungen,</b>{" "}
        sei es im World Wide Web oder im Supermarkt um die Ecke,
        <b> werden mit Kreditkarte getätigt.</b>
      </p>
      <p>
        Einen Überblick über die von Onlinekunden bei -einkäufen verwendeten
        Zahlungsmethoden finden Sie unten in Abbildung a:
      </p>
      <p>
        <img src={payment2} alt="payment2" />
      </p>
      <p style={{ fontSize: "8px" }}>
        Abbildung a: Kreditkarten sind die bevorzugte Zahlungsart für
        Online-Einkäufe, danach folgen u.a. PayPal. Quelle:{" "}
        <a
          target="_blank"
          href="https://www.statista.com/statistics/508988/preferred-payment-methods-of-online-shoppers-worldwide/"
        >
          https://www.statista.com/statistics/508988/preferred-payment-methods-of-online-shoppers-worldwide/
        </a>
      </p>

      <p>
        <b>2) Kreditkarten</b>
      </p>
      <p>
        Sollten Sie sich fragen, warum Kreditkartenzahlungen - wir sehen sie als
        selbstverständlich an - im E-Commerce so beliebt sind? Hier sind drei
        Gründe:
      </p>
      <ul>
        <li>
          <p>
            Kreditkartenzahlungen ermöglichen eine sofortige
            Zahlungsbestätigung. Überweisungen sind besonders schwierig, wenn es
            sich um internationale Zahlungen handelt. Außerdem sind sie
            veraltet. Oder wie fühlt es sich an, jemandem Geld für einen Artikel
            zu überweisen, den Sie gerade online bestellt haben, nur um gespannt
            auf den vermeldeten Zahlungseingang und den Versand zu warten. Dies
            kann Tage, wenn nicht Wochen dauern.
          </p>
        </li>

        <li>
          <p>
            Als Kunde können Sie
            <b> jetzt kaufen, aber erst später Ihren Kauf begleichen.</b>{" "}
            Zahlungen sind einem festgelegten Zahltag (z.B. am Ende des Monats)
            fällig. Stellen Sie also sicher, dass Sie über ausreichende
            Rücklagen verfügen, sodass Sie nicht in Rückzahlungsverzug geraten.
          </p>
        </li>
        <li>
          <p>
            Hohe Sicherheitsstandards werden eingehalten. So steht z.B. am Ende
            eines Bestellvorgangs ein 3D-Secure-Verfahren zum Zahlungsabschluss.
          </p>
        </li>
      </ul>
      <p>
        Die Verwendung von Kreditkarten nimmt stetig zu, die Popularität wächst.
        Dies spiegelt sich in im Durchschnitt abnehmenden Beträgen wider, die
        mit Kreditkarte beglichen werden{" "}
        <a
          target="_blank"
          href="https://www.merchantsavvy.co.uk/uk-credit-card-statistics/"
        >
          (https://www.merchantsavvy.co.uk/uk-credit-card-statistics/).
        </a>
        Kreditkarten werden also mittlerweile immer häufiger auch für
        Alltagszahlungen von geringer Höhe benutzt.
      </p>
      <p>
        Aufgrund der wachsenden Bedeutung von Kreditkarten, möchte ich kurz
        beleuchten, wie Kreditkarten funktionieren und welche Akteure davon
        profitieren. Sie wollen bestimmt auch wissen Sie, wohin genau Ihr Geld
        fließt? Lassen Sie das uns an einem Beispiel festmachen:{" "}
      </p>
      <p>
        <b>Beispiel:</b>
      </p>
      <p>
        Fred kauft mit seiner VISA-Karte ein Fahrrad für 500 € auf Ihrer
        E-Commerce-Website.
      </p>
      <p>
        <b>Who are the players involved in the settlement process? </b>
      </p>
      <p>
        <b>Händler:</b> Sie{" "}
      </p>
      <p>
        <b>Käufer:</b> Fred
      </p>
      <p>
        <b>Credit card network (/association):</b> VISA
      </p>
      <p>
        <b>Issuing bank: </b>Fred’s bank
      </p>
      <p>
        <b>Acquiring bank:</b> Iher bank{" "}
      </p>
      <p>
        <b>Wie sieht eine typische Zahlungsabwicklung aus? </b>
      </p>
      <ul>
        <li>
          <p>
            Fred schließt den Checkout-Prozess auf Ihrer E-Commerce Website mit
            seiner VISA-Karte ab;
          </p>
        </li>
        <li>
          <p>Die Autorisierung erfolgt: Ist Freds Kreditkarte gültig?</p>
        </li>
        <li>
          <p>
            Nach erfolgreicher Autorisierung zahlt der Käufer 500 €; dies
            geschieht wie folgt (realistische, aber erfundene Zahlen): Die
            Issuing Bank sendet 500 € und darf 8,50 € behalten. 491,50 € werden
            an VISA gesendet, wovon jeweils VISA 0,50 € und die Acquiring Bank 1
            € behalten. Der Händler erhält 490 €. Die
          </p>
        </li>
        <p>
          {" "}
          <img src={payment3} alt="payment3" />
        </p>
        <p style={{ fontSize: "8px" }}>
          Figure b: Abbildung b: Wenn ein Käufer eine Ware (z. B. ein Fahrrad)
          mit einer Kreditkarte (z.B. VISA) erwirbt, erhalten sowohl die Issuing
          als auch die Acquiring Bank sowie das Credit Card Network
          Bearbeitungsgebühren. Inspired by:
          <a target="blank" href="https://www.youtube.com/watch?v=IPxQQNyCxas">
            {" "}
            https://www.youtube.com/watch?v=IPxQQNyCxas
          </a>
        </p>
      </ul>
      <p>
        <b>Jeder Akteur profitiert im Rahmen der Zahlungsabwicklung: </b>
      </p>

      <ul>
        <li>
          <p>
            Der Händler erhält Zugang zum VISA-Netzwerk und kann Zahlungen für
            Produkte bzw. Leistungen von sämtlichen VISA Card Nutzern empfangen;
          </p>
        </li>
        <li>
          <p>Die Acquiring Bank erhält eine Bearbeitungsgebühr;</p>
        </li>
        <li>
          <p>VISA erhält eine Bearbeitungsgebühr;</p>
        </li>
        <li>
          <p>
            Die Issuing Bank erhält eine Bearbeitungsgebühr und ggf. Zinsen,
            wenn z.B. der Kunde den aufgenommen Kredit mit
          </p>
        </li>
      </ul>
      <p>
        <b>3) Empfangen Sie mit Ihrem E-Business Zahlungen von Kunden </b>
      </p>

      <p>
        Stellen wir uns vor, Sie wollen ein E-Business führen (vielleicht trifft
        das gar schon zu). Natürlich möchten Sie, dass Ihre Kunden mit
        Kreditkarte oder anderen unmittelbaren Zahlungsmitteln bezahlen können.
        Sie als Verkäufer möchten schlicht das Geld von Ihren Käufern erhalten.
        Nach dem, was wir von oben wissen, müssen Sie sich, um Zahlung zu
        erhalten, “one way or the other” auf Payment Gateways verlassen. Wie
        gehen Sie mit Payment Gateways eine funktionierende Verbindung ein? Hier
        gibts zwei Möglichkeiten:
      </p>
      <ul>
        <li>
          <p>
            <b>Ihre Bank bietet Ihnen ein Payment Gateway an:</b>
            <br></br>
            Sollte Ihre Bank noch nicht auf Sie zugekommen sein, fragen Sie sie,
            ob sie Ihr Unternehmen mit einem Service und einem Online-Terminal
            auszustatten, die es Ihnen ermöglichen, Online- oder
            Kreditkartenzahlungen zu erhalten. Ihre Bank könnte daran
            interessiert sein, Sie in an deren Credit Card Networks, z. B. VISA,
            MasterCard oder AMEX, anzubinden. (Sowohl Ihre Bank als auch die
            Credit Card Networks streichen bei jeder Transaktion
            Bearbeitungsgebühren ein, wie im obigen Beispiel dargestellt.) Wenn
            Ihre Bank feststellt, dass Ihr E-Commerce rentabel ist, wird sie
            einer Zusammenarbeit mit Ihnen mehr als offen gegenüberstehen und
            Ihnen, dem lukrativen Verkäufer, ein Händlerkonto (engl.: merchant
            account) gewähren. Eine Bank bietet Ihnen jedoch keine Payment
            Gateway Lösung an, sofern die durch die Bearbeitungsgebühren
            erwarteten Einnahmen nicht den Kosten für deren Installation und
            Instandhaltung aufwiegen - Kosten-Nutzen-Abwägung at its best. In
            diesem negativen Fall bewertet Ihre Bank schlicht das Risiko, dass
            sie Geld bei Ihnen verlieren, als zu hoch… Schmerz lass nach… Gute
            Nachrichten! Sie können weiterhin Kreditkarte und andere
            unmittelbare Zahlungen erhalten.
            <b>
              {" "}
              Externe Payment-Service-Provider (PSP), also
              Zahlungsdienstleister, stehen für Sie bereit!
            </b>
          </p>
        </li>
        <li>
          <p>
            <b>Payment-Service-Provider sind Payment Aggregators</b>
            <br></br>
            (Zahlungsaggregatoren). Sie repräsentieren ein Netzwerk an Händlern.
            Sie können sich einen Payment-Service-Provider als ein
            Mega-Händlerkonto vorstellen. Dieses Mega-Händlerkonto wird
            natürlich direkt von einer Bank beherbergt und betreut. Wo Sie
            allein zuvor vielleicht als einzelner Händler von einer Bank
            abgelehnt wurden, sind Sie jetzt Teil eines Netzwerks, das von
            Banken akzeptiert wird. Banken bevorzugen vor allem Netzwerke
            gegenüber einzelnen Händlerkonten, sind Risiken doch durch den
            Durchschnitt aufgefangen. Ein Payment-Service-Provider handelt in
            Ihrem Namen als Mittelsmann zwischen Ihnen (und einem Haufen anderer
            Händlerkonten) und der Bank. Sie können Online- und Mobilezahlungen
            genauso wie Banken verarbeiten und akzeptieren. Sie können sich
            Payment-Service-Provider als Zahlungsdienstleistungsagentur
            vorstellen, die für ihre Leistungen eine Kommission verlangt, die
            sich als Bearbeitungsgebühr darstellt.
          </p>
        </li>
      </ul>
      <p>
        <b>
          Für kleine, mittelständische Unternehmen (KMUs), die mit Online-,
          Offline bzw. Kreditkartenzahlungen zu tun haben, bietet sich der
          Einsatz von Payment-Service-Provider an.{" "}
        </b>
        Wenn Sie mehr über Payment-Service-Provider erfahren möchten
        Dienstleister, bleiben Sie unserem Blog treu oder kontaktieren sie uns.
      </p>
      <p>
        Ich hoffe, Sie haben die kurze Fahrt genossen. softsourced begleitet
        E-Commerce Unternehmen auf dem Weg zum unternehmerischen Erfolg.{" "}
        <b>
          In einem anderen Blog-Artikel stelle ich Ihnen vier führende
          Payment-Service-Provider vor: PayPal, Stripe, Mollie, Square.
        </b>
      </p>
    </>
  );
};
export default withTranslation()(Payment_de);
