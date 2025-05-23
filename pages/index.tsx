'use client';
import React, { useEffect, useState } from 'react';
import TopNavBar from '../components/TopNavBar';
import IntroAboutSection from '../components/IntroAboutSection/IntroAboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectList from '../components/ProjectList';
import ContactSection from '../components/ContactSection';
// import Footer from '../components/Footer';
import Head from 'next/head';

const Home: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  // Show TopNavBar only after scrolling past the first screen
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.9;
      if (window.scrollY > triggerPoint) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Meta tags for SEO and browser tab info */}
      <Head>
        <title>Yoori | Full-Stack Developer</title>
        <meta
          name="description"
          content="Yoori's portfolio and project showcase"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page background and color theme */}
      <div className="bg-[#f7f5f0] text-[#1a1a1a] transition-colors duration-300">
        {/* Show top navigation bar after scrolling */}
        {showNav && <TopNavBar />}

        {/* Intro + About section with animated business card */}
        <IntroAboutSection />

        {/* Experience timeline section */}
        <ExperienceSection />

        {/* Main content area including resume, projects, and contact */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-24">
          {/* Resume download link */}
          <section className="text-center">
            <a
              href="/Yoori-Lee-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold text-white bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 hover:opacity-90 rounded-full px-6 py-3 transition-all"
            >
              View Full Résumé
            </a>
          </section>

          {/* Projects list */}
          <ProjectList />

          {/* Contact section with form or links */}
          <ContactSection />
        </main>

        {/* Footer with credits and tech stack */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
