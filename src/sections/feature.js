/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Smart',
    title: 'Smart Quizzes',
    text:
      'We provide smart quizzess from time to time to help pupil remember the concepts.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Performance',
    title: 'Fast Performance',
    text:
      'We put extra efforst to make our streams faster to get you an uninterrupted experience.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Content',
    title: 'To the Point Content',
    text:
      'Short and consize videos dedicated to each topic, for quick and easy grasping',
  },
  // {
  //   id: 4,
  //   imgSrc: Setting,
  //   altText: 'Customization',
  //   title: 'Unlimited Customization',
  //   text:
  //     'Nam hendrerit lectus ac augue tristique, ac blandit mi volutpat. Nulla pharetra libero sed consequat dictum.',
  // },
  // {
  //   id: 5,
  //   imgSrc: Design,
  //   altText: 'Productivity',
  //   title: 'Boost Productivity',
  //   text:
  //     'Nam hendrerit lectus ac augue tristique, ac blandit mi volutpat. Nulla pharetra libero sed consequat dictum.',
  // },
  // {
  //   id: 6,
  //   imgSrc: Chat,
  //   altText: 'Support',
  //   title: 'Customer Support',
  //   text:
  //     'Nam hendrerit lectus ac augue tristique, ac blandit mi volutpat. Nulla pharetra libero sed consequat dictum.',
  // },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Meet exciting feature of app"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
