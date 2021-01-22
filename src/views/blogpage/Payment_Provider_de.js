import React from "react";
import { withTranslation } from "react-i18next";
import table1 from "../../assets/img/blog/6i.png";
import table2 from "../../assets/img/blog/6iii.png";
import table3 from "../../assets/img/blog/6iv.png";
import table4 from "../../assets/img/blog/6ii.png";

const Payment_provider_de = (props) => {
  return (
    <>
      <p>
      Sie möchten Ihren Kundenstamm auf Ihrer E-Commerce-Website ausbauen? Natürlich können Sie für Ihren E-Commerce auf anderen Werbung machen. Wussten Sie jedoch, dass eine der effizientesten Möglichkeiten zur Steigerung Ihres Kundenstamms darin liegt liegt, so viele Tore wie möglich zu öffnen, durch die Geld einfließen kann? Es geht darum, die Bedürfnisse Ihre Kunden zu decken, d.h. sie mit der Zahlungsmethode bezahlen lassen, mit der sie bezahlen möchten! Als E-Commerce-Inhaber wollen Sie sicherstellen, dass der Prozess vom Befüllen eines Einkaufswagens bis zum Auschecken desselben Ihre Kunden voll überzeugt. Noch wichtiger ist es zu vermeiden, dass Kunden ihren Einkaufswagen verlassen, nur weil Sie keine geeignete Zahlungsmethode angeboten haben. 
Hier präsentiere ich vier Zahlungsdienstleister (Payment Service Solutions): PayPal, Stripe, Mollie und Square. Jeder der vier hilft Ihnen sicherlich dabei, jeden einzelnen Ihrer Kunden zufriedenzustellen (sodass Sie sie tatsächlich als Käufer bezeichnen können).
</p>
      <p>
       <b>1) PayPal</b>
      </p>
      <p>
       
Fast jeder von uns hat PayPal genutzt oder zumindest mit dem Gedanken gespielt, es zu nutzen. Mit mehr als 270 Millionen aktiven Teilnehmern und mehr als 100 akzeptierten Währungen in ihrem Payment Network bietet PayPal einen der am weitesten verbreiteten und zuverlässigsten digitalen Zahlungsdienste online an. PayPal überzeugt mit einer nahtlosen Benutzeroberfläche und einer Vielzahl von Zahlungsmöglichkeiten für Käufer. Das ist gut für Sie als Verkäufer. Auch softsourced-Kunden nutzen PayPal, um ihre Einnahmen zu steigern - man verzichtet nur ungern freiwillig auf eine größere Anzahl an Kunden. Darüber hinaus bleiben bei PayPal Bankkontodaten anderer Teilnehmer verschlossen, auch denen, die eine Zahlung von Ihnen erhalten.
 </p>
      <p>
        <b>Eine normale PayPal-Transaktion auf Ihrer E-Commerce-Website läuft so ab:</b>
      </p>
      
      
          <ol>
              <p>
                  <li>YIhr Kunde fährt zum Warenkorb fort.  </li>
              </p>
              <p>
                  <li>Ihr Kunde entscheidet sich, mit PayPal zu bezahlen;  </li>
              </p>
              <p>
                  <li>Ihr Kunde schließt die Bestellung ab. Abhängig von dem von Ihnen ausgewählten PayPal-Produkt, die Sie in Ihrem E-Commerce anbieten, variiert die Nutzererfahrung (User Experience, UX).</li>
              </p>
      
        </ol>
        <p><img src={table1} alt="Payment Provider"></img></p>
        <p>Quelle der Tabelle: <a href="https://www.simicart.com/blog/wp-content/webp-express/webp-images/doc-root/blog/wp-content/uploads/paypal-products-comparison-table-2048x618.png.webp"> https://www.simicart.com/blog/wp-content/webp-express/webp-images/doc-root/blog/wp-content/uploads/paypal-products-comparison-table-2048x618.png.webp
 </a></p>
    
      <p>
      Um sicherzustellen, dass Ihre Käufer einen reibungslosen Bestell-Checkout durchgehen, sind PayPal by Braintree oder PayPal Payments Pro empfehlenswert. Hierbei ermöglichen Application Programming Interfaces (APIs) die Einrichtung eines reibungslosen Bestell-Checkout. Seien Sie sich gewiss, dass PayPal Payments Standard nicht mit der "Als Gast bezahlen"-Option ausgestattet ist.

      </p>
      <p>Als Verkäufer erhalten Sie Ihr Geld innerhalb weniger Minuten auf Ihr PayPal-Konto. Leben leicht gemacht. Wenn Sie eine Auszahlung auf Ihr Bankkonto beantragen, werden Sie einige Tage nach Zahlungsbearbeitung ausgezahlt. Die Auszahlung ist kostenlos.
</p>
      <p>
        
      <b>PayPal - Gebühren</b>
      </p>
      <p>PayPal verarbeitet Transaktionen über sein eigenes Payment Gateway. Um mehr über Payment Gateways zu erfahren, lesen Sie bitte meinen <a href="https://softsourced.de/blog/MARC-MUELLER/payment/">Artikel </a>. Als Zahlungsdienstleister behält PayPal einen Teil des Betrags, den der Käufer auf Ihr PayPal-Händlerkonto überweist, ein, sozusagen eine Kommission. Die folgende Tabelle gilt für alle nationalen Transaktionen, die in derselben Währung stattfinden:</p>
<p><img src={table2} alt="Payment Provider"></img></p>
<p>
Unter <a href="https://www.paypal.com/en/webapps/mpp/ua/useragreement-full#tableOfFees1">https://www.paypal.com/en/webapps/mpp/ua/useragreement-full#tableOfFees1 </a>erfahren Sie mehr über die Gebühren für internationale Transaktionen für verschiedene Währungen.

</p>
<p>
    <b>PayPal für Shopify</b>
</p>
<p>PayPal hat die Pole Position inne auf der auf Shopify verfügbaren Zahlungsdienstleistern. In wenigen einfachen Schritten (ich empfehle <a href="https://www.youtube.com/watch?v=2J62hbcZpyY"> https://www.youtube.com/watch?v=2J62hbcZpyY</a>),  können Sie PayPal mit Ihrem Shopify-Konto verbinden. Sobald das erledigt ist, werden Sie setzen Zahlungen über PayPal’s Payment Gateway empfangen.

</p>
<p><b>PayPal für WooCommerce
</b></p>
<p>Selbstverständlich bietet WooCommerce PayPal als Zahlungsdienstleister, um sämtlichen Käufern eine reibungslose Kaufabwicklung zu ermöglichen. Weitere Informationen finden Sie unter <a href="https://woocommerce.com/woocommerce-and-paypal/"> https://woocommerce.com/woocommerce-and-paypal/</a>.
</p>
<p><b>PayPal für Headless Solutions</b></p>
<p>Dies hängt weitgehend von der verwendeten Backend-Lösung ab. Die meisten bieten eine out of the box Integration, mit der Sie PayPal einrichten können. Wenn dies nicht der Fall ist, können Sie mit etwas Arbeit die PayPal-API über das Entwicklerportal (<a href="https://developer.paypal.com/docs/api/overview/">https://developer.paypal.com/docs/api/overview/</a>). kreieren, integrieren und verwenden. Dies ist etwas, was softsourced in der Vergangenheit getan hat und für Sie tun könnte.</p>
<p><b>2)Stripe</b></p>  
<p> 
Stripe ist eine Vermittler zwischen Ihrer E-Commerce-Website und Ihrer Bank. Es ist ein Zahlungsdienstleister, mit dem Geld online zwischen Ihnen und Ihren Kunden gesendet und empfangen werden kann. Die Zahlungslösung von Stripe verfügt über ein angenehmes Maß an Flexibilität, sodass Entwickler sie so formbar gestalten können, dass sie ein optimales, individuelles Setup ausarbeiten können. Als solches erlebt es eine wachsende Akzeptanzrate in Unternehmen mit einer eigenen IT-Abteilung.
</p>
<p>Stripe hat sich den Ruf erarbeitet, ehrgeizige Unternehmen, ganz unabhängig von deren Größe, zu unterstützen. Sowohl kleine und mittlere Unternehmen (KMU) als auch große Unternehmen wie Twitter, Facebook und Pinterest setzen auf die Zahlungslösung von Stripe.</p>
<p>Mit Stripe bleiben Ihre Kunden während des Bestellt-Checkouts auf Ihrer Website und werden nicht an ein dediziertes virtuelles Checkout-Terminal weitergeleitet. Dies schafft einen ununterbrochenen, linearen Zahlungsfluss.
</p>
<p>Sie können als Verkäufer davon ausgehen, dass der Betrag, den Sie an einem bestimmten Tag verdienen, sieben Werktage später auf Ihrem Bankkonto landet. Die Auszahlung ist kostenlos. Sowohl Verkäufer als auch Käufer profitieren von den zahlreichen Zahlungsmöglichkeiten.
</p>
<p><img src={table3} alt= "Payment Providers"></img></p>
<p>Neben einer Vielzahl von Zahlungsmethoden und hohen Sicherheitsstandards schätzen Unternehmen, die wir konsultieren, insbesondere Startups, die transparente, unkomplizierte Gebührenstruktur von Stripe.</p>
<p><b>Stripe - Gebühren</b></p>
<p><img src={table4} alt="payment providers"></img></p>
<p><b>Stripe für Shopify</b></p>
<p>Gehen Sie in Ihrem Shopify-Dashboard zu "Einstellungen", klicken Sie auf "Zahlungsanbieter", "Drittanbieter auswählen", suchen Sie nach "Stripe" und wählen Sie es aus der Dropdown-Liste aus. Richten Sie Ihr Konto in wenigen Schritten ein und aktivieren Sie es. Erledigt. Sie können jetzt Kreditkartenzahlungen akzeptieren.</p>
<p><b>Stripe für WooCommerce
</b></p>
<p> Natürlich gibt es ein Plugin, mit dem Ihre Kunden Sie bezahlen können, sobald es integriert ist. Ausführliche Anweisungen zur Installation, Einrichtung und Konfiguration finden Sie unter  <a href="https://docs.woocommerce.com/document/stripe/"> https://docs.woocommerce.com/document/stripe/</a>
</p>
<p><b>Stripe für Headless Solutions</b></p>
    <p>Wenn für die von Ihnen verwendete (Backend-) Lösung keine sofortige Integration verfügbar ist, verfahren Sie mit der Stripe-API <a href="https://stripe.com/docs/api">https://stripe.com/docs/api</a>.  Hier stehen Experten, ggf. von softsourced, für Sie bereit.
</p>
<p><b>3) Mollie</b></p>
<p>Mollie ist ein weiterer Zahlungsdienstleister, über den E-Commerce-Websiten-Betreiber auf jeden Fall Bescheid wissen sollten. Ich persönlich mag Mollie sehr, softsourced hat schon unzählige E-Commerce-Plattformen mit Mollie erfolgreich eingerichtet. Mit rund 150 Mitarbeitern und mehr als 60000 Kunden weltweit ist das niederländische Unternehmen ein Schwergewicht. Einfache und hochsichere API-Integrationen schaffen eine Lösung, die von Entwicklern angepasst, und auch von weniger technisch versierten Personen angewendet werden kann.
</p>

<p>Mollie ist immer auf dem neuesten Stand und bietet die gängigsten Zahlungsmethoden, ein hervorragendes Kauferlebnis auf Kundenseite und - wenn Sie unsere Kunden fragen - eine tolles Feature für wiederkehrende Zahlungen.
</p>
<p><b>Mollie - Gebühren</b></p>
<p>Mollie berechnet eine feste Gebühr und eine variable Kommission, die mit denen der Konkurrenten (PayPal, Stripe usw.) vergleichbar sind und von der gewählten Zahlungsoption abhängt. Eine detaillierte Übersicht finden Sie unter</p>
<p><b>Mollie für Shopify</b></p>
<p>Stellen Sie die Verbindung zu Ihrem Shopify-Dashboard her, gehen Sie zu "Einstellungen", klicken Sie auf "Zahlungsanbieter", "Drittanbieter auswählen", suchen Sie nach "Mollie" und wählen Sie es aus der Dropdown-Liste aus. Geben Sie Ihre Mollie-Konto-ID und Ihren API-Key ein, um Kreditkarten und andere Zahlungsarten zu akzeptieren.
</p>
<p><b>Mollie für WooCommerce</b></p>
<p>WooCommerce ist eine weitere E-Commerce-Plattform, die von Mollie unterstützt wird. Installieren Sie einfach das entsprechend Plugin gemäß der Dokumentation. Dann können Sie Zahlungen von Ihren Kunden akzeptieren und empfangen.</p>
<p><b>Mollie für Headless Solutions</b></p>
<p>Es wird höchstwahrscheinlich auf eine API-basierte Lösung hinauslaufen. Mehr dazu hier:  <a href="https://docs.mollie.com/">https://docs.mollie.com/</a>. Gute Entwickler, wie Sie sie bei uns finden, lösen das im Handumdrehen.
</p>
<p><b>Square</b></p>
<p>Square ist eines der interessantesten Projekte in der Zahlungslandschaft. Mit dem amerikanischen Zahlungsabwickler können Händler Zahlungen auf möglichst einfache Weise erhalten, z. B. über gemeinsam nutzbare Zahlungslinks, die Ihre Kunden zu einer speziellen Checkout-Seite führen. Square bietet nicht nur Entwicklern ein angemessenes Maß an Flexibilität und eine einfach zu integrierende API. Zudem unterstützt Square einmalige und wiederkehrende Zahlungen. Es bietet auch seinen eigenen Point of Sale (PoS) für Offline-Geschäfte, Restaurants und andere Händler an. Darüber hinaus bietet Square einen kostenlosen, intuitiven Site Builder für E-Commerce-Websites, sei es für Apps für die Zustellung von Lebensmitteln oder für andere Einzelhandelsgeschäfte.
</p>
    
<p><b>Square - Gebühren</b></p>
<p>Square berechnet 2,9% + 0,30 € pro Online-Shop-Verkauf, unabhängig von Art oder Größe Ihres Unternehmens.
</p>
<p><b>Square für Shopify
</b></p>
<p>Rums! Shopify lässt sich nicht in Square integrieren.
Glück gehabt Es gibt Zapier (<a href="https://zapier.com/apps/shopify/integrations/square">https://zapier.com/apps/shopify/integrations/square</a>)  das Shopify und Square koppeln kann. Und natürlich gibt es softsourced, falls Sie eine schnelle, saubere Einrichtung benötigen.
</p>
<p><b>Square für WooCommerce</b></p>    
<p>WooCommerce und Square pflegen eine Partnerschaft, Square ist in WooCommerce integriert. Für eine Dokumentation zur Integration empfehle ich als Startpunkt: <a href="https://squareup.com/help/us/en/article/3853-square-s-transactions-api-faqs">https://squareup.com/help/us/en/article/3853-square-s-transactions-api-faqs</a>
</p>
<p><b>Square für Headless Solutions
</b></p>
<p><a href="https://developer.squareup.com/us/en">https://developer.squareup.com/us/en</a>.API, API, API. Wenn Sie selbst nicht mehr weiter wissen, wenden Sie sich sehr gerne an mein wundervolles Team.
</p>
<p>
PayPal, Stripe, Mollie, Square. Alle vier sind unterschiedliche, jedoch zuverlässige und etablierte Akteure in der Zahlungslandschaft. softsourced hat unzählige E-Commerce-Websiten erfolgreich für und mit unseren Kunden eingerichtet und dabei jeweils die Integration von Zahlungslösungen (shopify, woocommerce, headless) erfolgreich umgesetzt.
</p>
    
    </>
  );
};
export default withTranslation()(Payment_provider_de);
