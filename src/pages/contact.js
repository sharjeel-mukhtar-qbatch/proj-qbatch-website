import React, { useEffect } from 'react'
import { Queries } from "../constants/queries";

import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import StartProject from "../components/PagesComponent/StartProject";
import Achievements from "../components/PagesComponent/Achievements";
import SuccessStories from "../components/PagesComponent/SuccessStoriesNew";
import ProblemSolving from "../components/PagesComponent/ProblumSolving";
import Breadcrumb from '../components/PagesComponent/Breadcrumb';

const ContactUs = () => {
  const crumbs = [
    { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' },
    { pathname: '/contact/', crumbLabel: 'Contact Us' }
  ];
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 500)
  }, [])

  return (
    <Layout pageTitle="Contact Us">
     <Breadcrumb crumbs={crumbs} wrapperClass="inner-page"/>
      <StartProject page="contact" />
      <Achievements page="contact" />
      <SuccessStories />
      <ProblemSolving
        className="contact-project-cost"
        text={<h2 className="text-h1 heading-break">Wondering how much your project would cost?</h2>}
      />
    </Layout>
  );
};
export const Head = () => {
  const blogQuery = Queries()
  const seoData = blogQuery.allStrapiContactUs.nodes[0]?.seo
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      pathname={seoData.slug}
      image={seoData.metaimage[0].localFile.url}
    />
  )
}

export default ContactUs;
