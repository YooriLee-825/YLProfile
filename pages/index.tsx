import React from 'react';
import ExperienceList from '../components/ExperienceList';
import ProjectList from '../components/ProjectList';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import PhotoGallery from '../components/PhotoGallery';

const images = [
  '/images/profile/IMG_6443.png',
  '/images/profile/IMG_0842.JPG',
  '/images/profile/IMG_3813.png',
  '/images/profile/IMG_6908.JPG',
  '/images/profile/IMG_0492.JPG',
  '/images/profile/IMG_8035.png',
  '/images/profile/IMG_0827.png',
];

const Home: React.FC = () => {
  return (
    <div id="about" className="bg-white min-h-screen">
      {/* 가운데 정렬 및 최대 폭 제한 */}
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row gap-8">
        {/* 왼쪽 섹션 */}
        <aside className="w-full md:w-[40%] bg-white bg-opacity-90 p-10 md:fixed left-0 top-0 md:h-screen backdrop-blur-sm flex flex-col justify-between">
          {/* 명함 스타일 카드 - 데스크탑에서는 고정된 여백 적용 */}
          <div className="bg-white border border-gray-200 rounded-xl px-8 py-10 shadow-md w-[500px] hidden md:block card-margin">
            <div className="flex justify-between items-start">
              {/* 왼쪽 - 이름, 직책, 소셜/연락처 */}
              <div className="mr-4">
                <h1 className="text-3xl font-bold text-gray-900">Yoori Lee</h1>
                <h2 className="text-base font-semibold text-gray-600 mt-1">
                  Full Stack Web Developer
                </h2>
                <div className="flex items-center space-x-4 mt-10">
                  {/* 아이콘 컨테이너 (세로 배치) */}
                  <div className="flex flex-col items-center border border-gray-300 rounded-xl p-2">
                    <img
                      src="/icons/gmail.svg"
                      alt="Email"
                      className="w-5 h-5"
                    />
                    <img
                      src="/icons/github.svg"
                      alt="GitHub"
                      className="w-5 h-5 mt-2"
                    />
                    <img
                      src="/icons/linkedin.svg"
                      alt="LinkedIn"
                      className="w-5 h-5 mt-2"
                    />
                  </div>
                  {/* 오른쪽 - 각 아이콘에 해당하는 텍스트와 링크 */}
                  <div className="flex flex-col space-y-2">
                    <a
                      href="mailto:yoori.lee825@gmail.com"
                      className="text-sm text-gray-900 hover:text-gray-400 transition-colors"
                    >
                      yoori.lee825@gmail.com
                    </a>
                    <a
                      href="https://github.com/YooriLee-825"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-900 hover:text-gray-400 transition-colors"
                    >
                      github.com/YooriLee-825
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yoori-lee-d0825b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-900 hover:text-gray-400 transition-colors"
                    >
                      linkedin.com/in/yoori-lee-d0825b
                    </a>
                  </div>
                </div>
              </div>
              {/* 오른쪽 - 소개 문구 & 네비게이션 */}
              <div className="text-right text-gray-600 text-sm whitespace-nowrap mt-4">
                <NavBar />
              </div>
            </div>
          </div>
          {/* 모바일용 명함 카드 */}
          <div className="bg-white border border-gray-200 rounded-xl px-8 py-10 shadow-md w-full md:hidden mb-6">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900">Yoori Lee</h1>
              <h2 className="text-base font-semibold text-gray-600 mt-1">
                Full Stack Web Developer
              </h2>
              <div className="flex flex-col space-y-2 mt-6">
                <a
                  href="mailto:yoori.lee825@gmail.com"
                  className="text-sm font-bold text-gray-900 hover:text-gray-400 transition-colors"
                >
                  yoori.lee825@gmail.com
                </a>
                <a
                  href="https://github.com/YooriLee-825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-gray-900 hover:text-gray-400 transition-colors"
                >
                  github.com/YooriLee-825
                </a>
                <a
                  href="https://www.linkedin.com/in/yoori-lee-d0825b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-gray-900 hover:text-gray-400 transition-colors"
                >
                  linkedin.com/in/yoori-lee-d0825b
                </a>
              </div>
            </div>
          </div>
          {/* 하단 - 사진 영역: PhotoGallery 컴포넌트 사용 */}
          <PhotoGallery
            images={images}
            marginLeft={'calc((100vw - 1280px) / 2 - 100px)'}
          />
        </aside>
        {/* 오른쪽 메인 콘텐츠 */}
        <main className="w-full md:w-[60%] ml-0 md:ml-auto p-10 mt-10 md:mt-0">
          {/* About Me 섹션 */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 shadow-modern">
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I&apos;m a developer passionate about learning new knowledge and
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
          {/* Experience 섹션 */}
          <section id="experience" className="mb-5">
            <ExperienceList />
          </section>
          {/* Résumé 링크 */}
          <a
            href="/Yoori-Lee-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-semibold text-red-600 bg-white hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:via-orange-300 hover:to-yellow-400 rounded-full px-4 py-2 mb-16 ml-auto w-fit transition-all"
          >
            View Full Résumé
          </a>
          {/* Projects 섹션 */}
          <section id="projects" className="mb-24">
            <ProjectList />
          </section>
          <Footer />
        </main>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .card-margin {
            margin-left: calc((100vw - 1280px) / 2 - 100px);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
