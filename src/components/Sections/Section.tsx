import React from 'react';
import './Section.scss';
import './background.scss';

interface SectionProps {
  id: string;
  title: string;
  content: string;
}

const Section: React.FC<SectionProps> = ({ id, title, content }) => {
  return (
    <section id={id} className={`section section--${id}`}>
      <div className="section__overlay"></div>
      <div className="section__container">
        <h2 className="section__title">{title}</h2>
        <div className="section__content">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
