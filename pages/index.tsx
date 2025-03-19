import React from 'react';
import ExperienceList from '../components/ExperienceList';
import SocialIcons from '../components/SocialIcons';
import ProjectList from '../components/ProjectList';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex justify-center bg-[#ffebda] text-gray-900 min-h-screen">
      {/* 중앙 정렬을 위한 컨테이너 */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row">
        {/* 왼쪽 사이드바 (40%) */}
        <aside className="w-1/4 bg-gray-100 p-10 fixed left-30 top-0 h-screen flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Yoori Lee</h1>
            <h2 className="text-lg font-bold text-gray-600 mt-2">
              Full Stack Web Developer
            </h2>
            <p className="text-gray-600 mt-4">
              I make the web easy, smooth, and user-friendly for everyone!
            </p>

            {/* 네비게이션 */}
            <nav className="mt-8">
              <ul className="space-y-3 text-gray-700">
                <li>
                  <a href="#about" className="hover:text-blue-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-blue-500">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-500">
                    Projects
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* 소셜 아이콘 */}
          <SocialIcons />
        </aside>

        {/* 오른쪽 메인 콘텐츠 (60%) */}
        <main id="about" className="w-3/5 ml-auto p-10 h-screen">
          {/* 소개 섹션 */}
          <section className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
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
            <p className="text-gray-700 leading-relaxed mt-4">
              In the past, I gained software development experience in diverse
              environments in Korea, working as a Full Stack Developer in
              hospitals, public institutions, and research centers.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              In my spare time, I enjoy running, taking walks with my dog, and
              relaxing with music and coffee.
            </p>
          </section>

          {/* 경험 섹션 */}
          <ExperienceList />

          <a
            href="/Yoori-Lee-Resume.pdf" // PDF 파일의 경로
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg font-semibold text-gray-800 hover:text-gray-600 mt-10 mb-6 mx-auto"
          >
            View Full Résumé
          </a>

          {/* 프로젝트 섹션 추가 */}
          <ProjectList />
          {/* Footer 추가 */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
