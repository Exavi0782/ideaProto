import React from 'react';
import './Section.scss';

interface SectionProps {
  id: string;
  title: string;
  content: string;
  background: string;
}

const Section: React.FC<SectionProps> = ({ id, title, content, background }) => {
  return (
    <section id={id} className="section" style={{ backgroundImage: `url(${background})` }}>
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
