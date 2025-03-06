import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Yoori Lee | Portfolio</title>
        <meta name="description" content="Portfolio of Yoori Lee" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="font-sans bg-gray-100 text-gray-900">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section
          id="hero"
          className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
            Hello, I'm Yoori Lee
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            I build elegant web applications with React, Next.js, and Tailwind
            CSS.
          </p>
          <a
            href="#projects"
            className="bg-white text-blue-500 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition-all"
          >
            View My Work
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6 text-blue-600">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in full-stack development with expertise in React,
              TypeScript, Java, and database systems. I am passionate about
              creating efficient, scalable applications and continuously
              improving my skills.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
              Projects
            </h2>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Project Card Example */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow hover:scale-105">
                <img
                  src="/path/to/project-image.jpg"
                  alt="Project One"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Project One</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of project one goes here.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    View Details
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow hover:scale-105">
                <img
                  src="/path/to/project-image.jpg"
                  alt="Project Two"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Project Two</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of project two goes here.
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6 text-blue-600">Contact</h2>
            <p className="text-lg text-gray-700 mb-8">
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>
            <a
              href="mailto:yoori.lee825@gmail.com"
              className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6">
          <div className="max-w-7xl mx-auto px-6 text-center">
            &copy; {new Date().getFullYear()} Yoori Lee. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
