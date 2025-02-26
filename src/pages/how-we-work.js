import React, { lazy } from 'react';

import Layout from "../components/Layout/layout";
import { technologythrivesData, projectDiscoveryData } from '../constants';
import BannerImage from "../../static/team-work.svg";
import { Queries } from '../constants/queries';
import { replaceUnderscoreWithAt } from '../constants/Utils';
import SEO from '../components/Seo';

const Banner = lazy(() => import('../components/PagesComponent/PageBanner'));
const TechnologyThrives = lazy(() => import('../components/PagesComponent/MultiplePlatformSolutions'));
const Slider = lazy(() => import('../components/UiComponent/Slider'));
const ProvenProcess = lazy(() => import('../components/PagesComponent/ProvenProcess'));
const QuotationSection = lazy(() => import('../components/PagesComponent/QuotationSection'));
const SuccessStories = lazy(() => import('../components/PagesComponent/SuccessStoriesNew'));
const StartProject = lazy(() => import('../components/PagesComponent/StartProject'));

const Index = () => {
  const scrollToStartProject = () => {
    const element = document.getElementById('start-project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <Layout>
      <Banner
        subheading="How we work"
        heading="We Listen,We Understand, We Deliver."
        paragraph="From our culture and mindset to our projects and clients, everything we do is driven by a single goal: to make your website, technology, and business work better."
        buttonText="Let’s Get Started"
        imgSrc={BannerImage}
        wrapperClass="cto-wrapper we-work-wrapper"
        customCrumbs={[
          { pathname: '/how-we-work/', crumbLabel: 'How We Work', crumbSeparator: '>' },
        ]}
      />
      <TechnologyThrives
        data={technologythrivesData}
        heading="Technology Thrives on Customization."
        paragraph="One-size-fits-all is a bogus approach. We meticulously tailor technology solutions to your unique business needs. This starts with a mindful workshop to understand your vision, goals, and existing infrastructure. Then, we leverage proven, industry-grade practices and tools to build a bespoke solution for your company."
        col1={6}
        col2={6}
        wrapperClass="technology-thrives"
        isSubText={true}
      />
      <Slider
        heading="Why Does A Project Discovery Phase Matter?"
        paragraph={<>
          The discovery phase takes time and collaboration. But it's the cornerstone of a <span>successful, efficient project.</span>
        </>}
        subParagraph={<>Without a blueprint, you might waste materials, encounter unexpected challenges, and end up with a structure that doesn't meet your needs. The discovery phase acts as your <span>detailed blueprint</span>, ensuring:</>}
        maxWidth="697px"
        data={projectDiscoveryData}
        className="our-secret-slider we-work-slider"
      />
      <ProvenProcess />
      <QuotationSection onRedirect={scrollToStartProject} />
      <SuccessStories />
      <StartProject id="start-project" />
    </Layout>
  )
};

export const Head = () => {
  const saasDevData = Queries()
  const seoData = saasDevData?.allStrapiHowWeWork?.nodes[0]?.seo
  // const schemaData = saasDevData?.allStrapiHealthcare?.nodes[0]?.schema;
  // const transformedObject = replaceUnderscoreWithAt(schemaData);

  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      image={seoData.metaimage[0]?.localFile?.url}
      pathname={`${seoData.slug}`}
    >
      {/* {transformedObject
        .filter((x) => x.visibilityIn)
        .map((data, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(data.childStrapiComponentSchemaSchemaStructureddataJsonnode)}
          </script>
        ))} */}
    </SEO>
  )
};

export default Index;
