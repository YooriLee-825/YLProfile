import React from 'react';
import ExperienceList from '../components/ExperienceList';
import ProjectList from '../components/ProjectList';
import SocialIcons from '../components/SocialIcons';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div id="home" className="bg-white min-h-screen">
      {/* 가운데 정렬 및 최대 폭 제한 */}
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row gap-8">
        {/* 왼쪽 영역: 모바일에서는 전체폭, md 이상에서는 40% + fixed */}
        <aside className="w-full md:w-[40%] bg-white bg-opacity-90 p-10 md:fixed left-0 top-0 h-auto md:h-screen shadow-xl backdrop-blur-sm flex flex-col justify-between">
          {/* 상단 프로필 영역 */}
          <div className="mt-12 mb-8 ml-40">
            <h1 className="text-3xl font-bold text-gray-900">Yoori Lee</h1>
            <h2 className="font-semibold text-gray-600 mt-1">
              Full Stack Web Developer
            </h2>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              I make the web easy, smooth, and user-friendly for everyone!
            </p>
          </div>

          {/* 네비게이션 */}
          <nav className="mb-8 ml-40">
            <ul className="space-y-2 text-gray-700">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-blue-500 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-500 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>

          {/* 소셜 아이콘 */}
          <div className="ml-40">
            <SocialIcons />
          </div>
        </aside>

        {/* 오른쪽 영역: 모바일에서는 전체폭, md 이상에서는 60% */}
        <main className="w-full md:w-[60%] ml-0 md:ml-auto p-10">
          {/* About 섹션 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I'm a developer passionate about learning new knowledge and
              continuously growing my skills. My goal is to create user-friendly
              applications with a user-first mindset, bridging the gap between
              developers and customers to enhance overall satisfaction.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              What I enjoy most is sharing my experience and knowledge with
              others. Currently, I tutor in Canada, helping students grow while
              constantly expanding my own understanding through continuous
              learning.
            </p>
            <p className=" text-gray-700 leading-relaxed mt-4">
              In the past, I gained software development experience in diverse
              environments in Korea, working as a Full Stack Developer in
              hospitals, public institutions, and research centers.
            </p>
            <p className=" text-gray-700 leading-relaxed mt-4">
              In my spare time, I enjoy running, taking walks with my dog, and
              relaxing with music and coffee.
            </p>
          </section>

          {/* Experience 섹션 */}
          <section id="experience" className="mb-16">
            <ExperienceList />
          </section>

          {/* Résumé 링크 */}
          <a
            href="/Yoori-Lee-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-semibold text-gray-800 transition-colors hover:text-gray-600 mb-16"
          >
            View Full Résumé
          </a>

          {/* Projects 섹션 */}
          <section id="projects" className="mb-16">
            <ProjectList />
          </section>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
