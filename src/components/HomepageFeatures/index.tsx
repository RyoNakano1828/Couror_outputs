import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'iPhoneだけでOK',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        PCは不要。iPhoneとインターネット環境があれば、コードを書いて本番にデプロイできます。
      </>
    ),
  },
  {
    title: 'AIがコードを書いてくれる',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Cursor の Cloud Agent に指示を出すだけ。AIが自動でコードを書き、GitHubにプッシュしてくれます。
      </>
    ),
  },
  {
    title: 'プッシュで自動デプロイ',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        GitHubとVercelを連携すれば、プッシュするだけでサイトが自動的に更新されます。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures(): ReactNode {
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
