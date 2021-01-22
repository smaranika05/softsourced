import React from "react";
import { withTranslation } from "react-i18next";

const React_de = (props) => {
  return (
    <>
      <p>
        Die Frage, was bei der Planung einer Website zu verwenden ist, ist von
        enormer Bedeutung. Abhängig von der Art der Website, die Sie erstellen
        möchten, gibt es verschiedene Möglichkeiten.
      </p>
      <p>
        WordPress ist das am häufigsten verwendete und etablierteste Content
        Management System (CMS) für die Erstellung von Websites. Aber auch
        WordPress hat seine Nachteile. Gleichzeitig ist React auf dem Vormarsch,
        was die Erstellung von Websites angeht.
      </p>
      <p>
        Sie sollten von Anfang an wissen, dass WordPress ein CMS ist und React
        nicht. React kann jedoch zur Erstellung einer Web Application verwendet
        werden, indem es mit anderen Libraries vernetzt wird, woraus dann ein
        fertiges Produkt entsteht. Lassen Sie uns einen Blick auf die Vor- und
        Nachteile von WordPress und React werfen, um Ihnen die Entscheidung zu
        erleichtern, welchen Weg Sie für Ihr nächstes Website-Projekt
        einschlagen sollten.
      </p>
      <p>Vorteile bei der Verwendung von WordPress</p>
      <ul>
        <li>
          <p>
            <b>Gleich loslegen</b>
            <br></br>Es ist einfach zu installieren, mit Ihrer WordPress Website
            können Sie im Handumdrehen starten. Einige Hosting-Provider featuren
            sogar ein One-Click-Installation-Tool in ihrem Admin Panel.
          </p>
        </li>
        <li>
          <p>
            <b>Schnelle Lernkurve bei Anfängern </b>
            <br></br>
            Wenn Sie eine einfache Website mit basalen Funktionen erstellen
            möchten, dann ist WordPress eine gute Wahl. So stehen z.B. ein
            Post-Editor zum Schreiben von Artikeln, Drag and Drop-Menüs und
            Sidebar-Tools, Authentifizierungssysteme, etc. zur Verfügung.
          </p>
        </li>
        <li>
          <p>
            <b>Benutzerfreundliches CMS </b>
            <br></br>
            Die meisten Leute schätzen die Einfachheit, mit der Dinge in
            WordPress erledigt werden können.
          </p>
        </li>
        <li>
          <p>
            <b>Zahlreiche Plugins and Themes</b>
            <br></br>
            Von der Zusendung von Webformularen an Ihre E-Mail bei jeder
            Neueinreichung bis hin zur Verwendung von Webboards oder einem
            automatischen Backup-System - alles kann mithilfe von Plugins
            erreicht werden. Selbst für diejenigen unter Ihnen, die Webdesign
            nicht als Ihr Steckenpferd ausgeben, kann eine schöne Website unter
            Verwendung bestehender Themes erfolgreich erstellt werden.
          </p>
        </li>
        <li>
          <p>
            <b>Kostengünstiges Hosting</b>
            <br></br>
            Die meisten kostengünstigen Webserver laufen mit PHP, was die Kosten
            für die Einrichtung einer neuen WordPress-Website sehr niedrig hält.
            Der Nachteil ist, dass auf diesen Servern in der Regel alte oder
            veraltete Versionen von PHP laufen, wobei Sicherheitsrisiken und
            Performancedefizite auftreten können.
            <a
              href="https://themeisle.com/blog/cheap-wordpress-hosting/)"
              alt="hostingpages"
            >
              Hier sind einige der Empfehlungen für die besten Hosting-Provider
              mit dem besten Preis-Leistungs-Verhältnis.
            </a>
          </p>
        </li>
        <li>
          <p>
            <b>SEO ist mit drin </b>
            <br></br>
            Wenn Sie eine Website bauen, die auf einer guten Search Engine
            Optimization (SEO) beruht, werden Sie bei WordPress sofort bedient.
            Es gibt eine Vielzahl von SEO-Plugins, die Ihnen helfen, Ihr Ranking
            zu verbessern und Social Sharing zu promoten. Zwar basiert React auf
            Server-Side Rendering (SSR) - das ist großartig - jedoch macht
            WordPress bei SEO-Geschichten so schnell niemand was vor. Um eine
            erfolgreiche SEO-Strategie aufzubauen, empfehle ich
            <a
              href="https://softsourced.de/blog/MARC-MUELLER/mm_10052020/"
              alt="seopages"
            >
              diesen Artikel{" "}
            </a>
            als Grundlage.
          </p>
        </li>
      </ul>
      <p>
        <b>Vorteile bei der Nutzung des React Ecosystems</b>
      </p>

      <ul>
        <li>
          <p>
            <b>Erstellung von native Apps mit React Native</b>
            <br></br>
            Sobald Sie React ausreichend verstehen, können Sie es nutzen, um
            mobile Apps sowohl in Android als auch in iOS zu erstellen. Hierfür
            sind keine zusätzlichen Dienste, Plugin oder Sonstiges notwendig.
          </p>
        </li>
        <li>
          <p>
            <b>
              Die meisten Libraries sind KOSTENLOS und werden von der Community
              unterstützt
            </b>
            <br></br>
            Während WordPress mittlerweile von bezahlten Themes und Plugins nur
            so übersät ist, ist das Erstellen mit React meist kostenlos. Es gibt
            den zusätzlichen Vorteil, dass die React-Community sehr solidarisch
            ist und ihre Plugins gegenseitig unterstützen.
          </p>
        </li>
        <li>
          <p>
            <b>
              Großartig für die Erstellung von Websites, die Daten via APIs
              empfangen{" "}
            </b>
            <br></br>
            Application Programming Interfaces (APIs) benötigen für das Senden
            von Daten eine geringe Bandbreite, wodurch die Website schnell ist.
            In Zeiten, in denen sich Web Ecosystems APIs zuwenden, ist React
            viel einfacher als WordPress zu nutzen, um empfangene Daten zu
            parsen.
          </p>
        </li>
      </ul>
      <p>
        <b>
          {" "}
          Nun zu den Nachteilen, die ich bei der Verwendung von WordPress
          festgestellt habe:
        </b>
      </p>
      <ul>
        <li>
          <p>
            <b>Das Design:</b>
            <br></br>Sie sind im Design und in der Art, wie Sie Ihre Website
            organisieren, eingeschränkt. Aus diesem Grund sehen alle WordPress
            Websites ähnlich aus. Es wird schnell teuer, wenn man wirklich etwas
            Einzigartiges schaffen möchte.
          </p>
        </li>

        <li>
          <p>
            <b>Die Sicherhei:</b>
            <br></br> WordPress kann aufgrund von Sicherheitsproblemen bei
            Plugins (wie auf{" "}
            <a
              target="_blank"
              href="https://ithemes.com/wordpress-security-issues/"
            ></a>{" "}
            und{" "}
            <a target="_blank" href="https://wpvulndb.com/statistics">
              https://wpvulndb.com/statistics
            </a>{" "}
            beschrieben) leicht gehackt werden - hier bringt es zumeist auch
            nichts, wenn Sie mehrere "Sicherheits-Plugins" auf Ihrer WordPress
            Website installiert haben.
          </p>
        </li>
        <li>
          <p>
            <b>Updates:</b>
            <br></br> WordPress-Updates stellen ein großes Problem dar. Es kommt
            zu s.g. Breaking changes, wobei eine Softwareänderung das multiple
            Versagen anderer System auslösen kann, d.h. unter Umständen
            funktionieren auf einmal bspw. einige Plugins nicht mehr. Die
            meisten Plugins werden von Hobbycodern und nicht von professionellen
            Programmierern entwickelt. Dementsprechend weisen solche Plugins
            keine professionellen, sicherheitsgeprüfte Standards auf.
          </p>
        </li>
        <li>
          <p>
            <b> Skalierung:</b>
            <br></br> WordPress läuft auf PHP, einer alten Programmiersprache.
            Es kann schwierig zu skalieren sein. Hierdurch wird die Seite
            langsamer, wenn Inhalt oder Besucherzahl wachsen. Es gibt Kniffe,
            wie man mit den Limitierungen bei PHP umgehen kann, jedoch sind
            diese nicht teilweise schwer umzusetzen bzw teuer im Hosting. Ein
            paar hilfreiche Tipps:{" "}
            <a
              target="_blank"
              href="https://stackify.com/php-performance-tuning/"
            >
              https://stackify.com/php-performance-tuning/
            </a>{" "}
            <a
              target="_blank"
              href="https://www.keycdn.com/blog/php-performance"
            >
              https://www.keycdn.com/blog/php-performance
            </a>
          </p>
        </li>
        <li>
          <p>
            <b>
              Größtes Thema - Technische Schulden (
              <a
                target="_blank"
                href="https://de.wikipedia.org/wiki/Technische_Schulden"
              >
                https://de.wikipedia.org/wiki/Technische_Schulden
              </a>
              ):{" "}
            </b>
            <br></br>(
            <a
              target="_blank"
              href="https://de.wikipedia.org/wiki/Technische_Schulden"
            >
              https://de.wikipedia.org/wiki/Technische_Schulden
            </a>
            ): Da WordPress der Hauptakteur auf dem Markt und schon sehr lange
            etabliert ist, besitzen viele ihrer Kunden Websites, die mit älteren
            Versionen von WordPress erstellt wurden. WordPress schafft es nicht,
            mit einem neuen System alle zugrunde liegenden Probleme zu beheben,
            die tief in ihrem System (und damit auf alten Websites) verwurzelt
            sind. Dieses Problem führt zur "technischen Verschuldung" - und
            diese ist bei WordPress besonders akut: Es kann zwar schnell gehen,
            ein Projekt mit WordPress zu beginnen, wobei schon das Hinzufügen
            weiterer Funktionen mit der Zeit immer langsamer und mühsamer wird.
            Die Kosten, die Ihnen im Laufe der Zeit entstehen, um altes am
            Laufen zu halten, liegt am unvollkommenem bzw. unzureichendem Code,
            der instandgehalten bzw. geupdatet werden muss. Das ist zeit- und
            ggf. kostenintensiv. Das Beheben von Fehlern und das Patchen von
            Exploits, das Hinzufügen neuer Features oder die Anstellung eines
            Entwicklers kosten Zeit und Geld.
            <p>
              Wenn Ihr Projekt größer wird, die Codebase wächst und mehr Leute
              an diesem Code arbeiten, wird es hier und da zu
              Auseinandersetzungen bzw. Verständigungsschwierigkeiten kommen.
              Stellen Sie sich vor, Sie haben eine Deadline und eine nicht
              ideale Lösung wird in den Quellcode gepatcht, um rechtzeitig
              fertig zu werden. Vielleicht fügen Sie dann noch eine
              Open-Source-Komponente hinzu, die Sie nicht vollständig verstehen,
              um eine Funktion zu handhaben, anstatt sie selbst zu
              programmieren. Oder Sie wechseln vielleicht Libraries zwischen den
              Versionen (z.B. von Backbone zu React), müssen aber immer noch
              Leute unterstützen, die die Legacy-Codebase für ihre Projekte
              verwenden.
            </p>
            <p>
              Absolut nichts von all diesen Dingen ist per se schlecht.
              Vielleicht ist gar überhaupt nichts schlecht. Jedenfalls im Moment
              nicht. Aber wenn man alles zusammenzählt, müssen die technischen
              Schulden, die sie machen, irgendwann in der Zukunft zurückgezahlt
              werden.
            </p>
            <p>
              Irgendwann muss die von Ihnen eingebautet Open-Source-Komponente
              vielleicht ersetzt (oder geforked) werden. Das wird Zeit und Geld
              kosten. In ferner Zukunft müssen Sie den gesamten Backbone-Code
              aus Ihrem Projekt entfernen und die Unterstützung von Altnutzern
              einstellen. Auch das kostet Zeit und Geld. Der Patch, den Sie
              gemacht haben, um eine Frist einzuhalten? Nun, er wird irgendwann
              rückgängig gemacht werden und eine dauerhaftere Korrektur
              benötigen. Noch einmal: Zeit und Geld. Und Sie werden neue
              Mitglieder in Ihrem Team haben, die den alten Code noch einmal
              durchgehen, um all das zu tun, wobei sie den Code und die Logik
              der früheren Entwickler verstehen müssen. Zeit. Geld. Man sollte
              nicht auf wackligen Beinen bauen, wenn etwas von Dauer sein soll.
            </p>
            <p>
              Während technische Schulden einen abstrakten Begriff darstellen
              und evtl. metaphorisch interpretiert werden, sind die Kosten für
              technische Schulden hingegen sehr real. Ihre Rückzahlung hat einen
              monetären Wert, und Sie können die Zinsen, die Sie dafür zahlen,
              in Arbeitsstunden und Lohnabrechnungen nachverfolgen. (
              <a
                href="https://distributedledgerinc.com/the-costs-and-risks-of-technical-debt/"
                target="_blank"
              >
                https://distributedledgerinc.com/the-costs-and-risks-of-technical-debt/
              </a>
              )
            </p>
          </p>
        </li>
      </ul>
      <p>
        <b>Und die Nachteile, die ich für React sehe:</b>
      </p>
      <ul>
        <li>
          <p>
            <b>Entwickler erforderlich: </b>
            <br></br>
            Im Gegensatz zu WordPress werden für das Programmieren mit React
            Entwickler benötigt, die an der Website arbeiten. Was bedeutet, dass
            Sie diese entweder einstellen oder selbst coden müssten.
          </p>
        </li>
        <li>
          <p>
            React ist kein Framework:
            <b></b>
            <br></br>
            React ist vielversprechend. Sollten Sie jedoch etwas schnell
            erledigen müssen, kann React frustrierend sein - haben Sie Kunden,
            Projekte und dringende Termine, kann React ein paar Nerven kosten,
            bedarf es doch teilweise ein wenig Forschungsarbeit. React kann
            spielerisch eingesetzt werden, ist großartig zum Experimentieren,
            aber herausfordernd, wenn man versucht, die Dinge richtig zu machen.
            Lassen Sie sich am besten darauf ein, dass es nicht den EINEN Weg
            gibt..
          </p>
        </li>
        <li>
          <p>
            Community Conventions sind noch in der Entwicklung:
            <b></b>
            <br></br>
            Wie strukturiere ich das? Wie gehen die Leute damit um? Ich will
            nicht sagen, dass Library Developers keine starke Meinung darüber
            haben, wie ihre Bibliotheken genutzt werden sollten, denn das tun
            sie ganz sicher. Das Problem ist, dass Fluktuationen auftreten und
            der Wandel so schnell vonstatten geht, dass sie oft keine Zeit
            haben, sich auf gemeinsame Conventions zu einigen. Nur diejenigen,
            die wirklich auf die monatlichen, wöchentlichen und täglichen
            Änderungen in der React-Community achten, können Ihnen sagen, wie
            Sie eine beliebige Bibliothek am besten nutzen können.
          </p>
        </li>
      </ul>
      <p>
        Der Hauptgrund, warum sich viele Leute immer noch für Wordpress
        entscheiden, ist, dass es im Vorab billiger ist. Leider neigen zu viele
        Agenturen dazu, Kunden nicht über die Auswirkungen technischer
        Verschuldung zu informieren (niedrige Anfangskosten und hohe spätere
        Servicekosten). Wenn man das Problem der technischen Verschuldung
        anerkennt, scheint es, als dass WordPress einfach nicht der Mühe wert
        ist - Nachteile überwiegen den Vorteilen.
      </p>
      <p>
        Aber ist das Problem der technischen Verschuldung eines, das jeden
        betrifft, der eine Website erstellen möchte? Sind nicht viele der
        Websites, die wir sehen, nicht von der Art, die ständige
        Aktualisierungen und Änderungen benötigen? Viele Websites müssen nicht
        ständig wachsen oder auf sich selbst aufbauen. Macht es Sinn, eine
        Website auf React zu erstellen, wenn Sie wissen, dass Sie das gleiche
        Ergebnis mit WordPress mit weit weniger Aufwand erreichen können?
      </p>

      <p>
        Wenn Sie nur eine kleine Website erstellen, die sich wahrscheinlich
        nicht verändern wird oder nur selten neue Inhalte benötigt, ist
        WordPress mit ziemlicher Sicherheit die bessere Wahl. Dies gilt
        insbesondere dann, wenn Sie keinen Zugang zu einem Entwickler haben.
        Nutzerfreundlichkeit sowie{" "}
      </p>
    </>
  );
};
export default withTranslation()(React_de);
