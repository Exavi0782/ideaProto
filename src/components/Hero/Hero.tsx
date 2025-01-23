import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.scss';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__title">{t('hero.title')}</h1>
        <p className="hero__subtitle">{t('hero.text')}</p>
      </div>
    </section>
  );
};

export default Hero;
