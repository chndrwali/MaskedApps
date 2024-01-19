import React from 'react';
import Layout from '../component/Layout';
import Steps from '../component/stepsSection/Steps';
import Classification from '../component/classifySection/Classification';
import Contributors from '../component/contributorSection/Contributors';

function Home() {
  return (
    <Layout>
      <Classification />
      <Steps />
      <Contributors />
    </Layout>
  );
}

export default Home;