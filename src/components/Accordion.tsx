import React, { useState } from 'react';
import './Accordion.css';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {

  const [expandedSectionId, setExpandedSectionId] = useState<number | null>(null);

  const toggleSection = (id: number) => {
    setExpandedSectionId(expandedSectionId === id ? null : id);
  };

  const handleKeyPress = (event: React.KeyboardEvent, id: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleSection(id);
    }
  };

  return (
    <div className="accordion">

      {items.map((item) => {

        const isOpen = expandedSectionId === item.id;

        return (
          <div key={item.id} className="accordion-item">

            <button
              className={`accordion-header ${isOpen ? 'active' : ''}`}
              onClick={() => toggleSection(item.id)}
              onKeyDown={(e) => handleKeyPress(e, item.id)}
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className="accordion-title">{item.title}</span>
              <span className="accordion-sign">
                {isOpen ? '-' : '+'}
              </span>
            </button>

            <div
              id={`accordion-content-${item.id}`}
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