import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Proč zrovna "Pravěk v Ráji"?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Důvod je prostý. S partou přátel jsme se rozhodli uspořádat dogtrekking, který povede srdcem Českého ráje. Protože je to akce benefiční, vteřiny nejsou to nejdůležitější, oč tady kráčí. Čas vůbec měřit nebudeme. Celá akce je koncipovaná tak, aby přinesla nějaké penízky tam, kde je to potřeba.
        Od této akce si také slibujeme návrat ke kořenům dogtrekkingu. Znovu objevení krásy několikadenních pochodů a především bivaku v přírodě se čtyřnohým parťákem.
      </>
    ),
  },
  {
    title: '...a jak že to celé vzniklo?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
Od doby, co mám Jardu je Vyskeř v Českém ráji moje druhé doma. Krásná vesnička, jejíž dominantou je kaple Sv. Anny, která se nachází na vrcholku čedičového kopce. 

Jednou takhle v březnu byla vypsaná hasičská brigáda právě na kapličce. Poměrně nepopulární práce, vyřezávání křoví. Když jsem odpočívala a rozhlédla se do kraje, první co mi proletělo hlavou bylo...  "Tady by byl sakra krásnej trekk".. Věděla jsem ale, že po 5 letech pořádání dogtrekkingu Po stopách Toulovce v rámci MČR do toho už nechci jít. Důvodů bylo několik, ale ten hlavní byl asi ten, že se dle mého názoru dogtrekk ubírá úplně jiným směrem než byla jeho původní myšlenka. A pak jsem taky hodně přehodnotila, svoje životní priority.. Proto jsem se rozhodla udělat to jinak - neměřit čas, aby šly sportovní ambice a honba za vteřinami stranou. Myšlenka benefice přišla v podstatě hned vzápětí. 
Vyskeř je vesnice, kde se mi moc líbí hlavně kvůli soudržnosti všech obyvatel. Ať už se tu pořádá nebo děje cokoli, vždy se na tom podílí velká část vesnice. Proto jsem si byla jistá, že v tom nezůstanu sama a je to vlastně důvod, proč chci pomoci někomu místnímu.. A tady příběh začíná neuvěřitelně nabírat na obrátkách. Starosta obce, Honzík Kozák, mi dal typ na mladou holčinu na vozíčku. V té chvíli jsem o Elen nevěděla o moc víc. Přesto mi to stačilo k tomu, abych se rozhodla, že do toho půjdu.
S velkým odhodláním jsem oslovila kamarády, co nám pomáhali s Toulovcem. Vsadila jsem na ty nejlepší! Všichni, které jsem o pomoc požádala souhlasili a tak si troufám říct, že tento osvědčený dream team zvládne uspořádat boží dogtrekk! :)
Monika
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
