import React, { useEffect } from 'react';
import Header from '../src/components/Header/Header.tsx';
import Hero from './components/Hero/Hero.tsx';
import Section from './components/Sections/Section.tsx';
import { sections } from './components/Sections/data.ts';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const sectionElements = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section--visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          title={t(section.titleKey)}
          content={t(section.contentKey)}
        />
      ))}
    </div>
  );
};

export default App;
