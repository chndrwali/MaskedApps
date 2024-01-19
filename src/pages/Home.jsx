import React from 'react';
import Layout from '../component/Layout';
import Featured from '../component/featuredSection/Featured';
import Steps from '../component/stepsSection/Steps';
import Classification from '../component/classifySection/Classification';
import Contributors from '../component/contributorSection/Contributors';

function Home() {
  return (
    <Layout>
      <Classification />
      <Steps />
      <Featured />
      <Contributors />
    </Layout>
  );
}

export default Home;