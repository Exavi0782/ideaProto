import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.scss';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <header className="header">
      <div className="header__title">{t('header.title')}</div>
      <div className="header__language-switch">
        <span
          className={`header__language-option ${i18n.language === 'en' ? 'header__language-option--active' : ''}`}
          onClick={() => changeLanguage('en')}
        >
          EN
        </span>
        <span className="header__separator">|</span>
        <span
          className={`header__language-option ${i18n.language === 'ua' ? 'header__language-option--active' : ''}`}
          onClick={() => changeLanguage('ua')}
        >
          UA
        </span>
      </div>
    </header>
  );
};

export default Header;
