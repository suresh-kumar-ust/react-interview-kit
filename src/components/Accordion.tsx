import React, { useState } from 'react';
import './Accordion.css';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyPress = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleSection(index);
    }
  };

  return (
    <div className="accordion">

      {items.map((item, index) => {

        const isOpen = openIndex === index;

        return (
          <div key={index} className="accordion-item">

            <button
              className={`accordion-header ${isOpen ? 'active' : ''}`}
              onClick={() => toggleSection(index)}
              onKeyDown={(e) => handleKeyPress(e, index)}
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-controls={`accordion-content-${index}`}
            >
              <span className="accordion-title">{item.title}</span>
              <span className={`accordion-arrow ${isOpen ? 'rotated' : ''}`}>
                ▼
              </span>
            </button>

            <div
              id={`accordion-content-${index}`}
              className={`accordion-content ${isOpen ? 'open' : ''}`}
              aria-hidden={!isOpen}
            >
              {item.content}
            </div>
            
          </div>
        );
      })}
    </div>
  );
};