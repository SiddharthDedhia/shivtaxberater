import React, { useState } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">{language === 'en' ? 'Welcome to Shiv Tax Beratung' : 'Willkommen bei Shiv Tax Beratung'}</h1>
        <p className="subtitle">
          {language === 'en' ? 'Your Trusted Tax Consulting Partner' : 'Ihr vertrauenswürdiger Steuerberatungspartner'}
        </p>
        <button className="contact-button">
          {language === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns'}
        </button>
        <div className="language-switcher">
          <button
            className={`language-button ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            English
          </button>
          <button
            className={`language-button ${language === 'de' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('de')}
          >
            Deutsch
          </button>
        </div>
      </header>
      <section className="Services">
        <h2 className="section-title">{language === 'en' ? 'Our Services' : 'Unsere Dienstleistungen'}</h2>
        <div className="ServiceCard">
          <img src="tax-preparation.png" alt="Tax Preparation" className="service-icon" />
          <h3 className="service-title">{language === 'en' ? 'Tax Preparation' : 'Steuererklärung'}</h3>
          <p className="service-description">
            {language === 'en'
              ? 'We handle all aspects of tax preparation, ensuring accurate and timely filing of your taxes. Leave the paperwork to us!'
              : 'Wir kümmern uns um alle Aspekte der Steuererklärung und stellen sicher, dass Ihre Steuererklärungen korrekt und rechtzeitig eingereicht werden. Überlassen Sie uns die Papierarbeit!'}
          </p>
        </div>
        <div className="ServiceCard">
          <img src="tax-planning.png" alt="Tax Planning" className="service-icon" />
          <h3 className="service-title">{language === 'en' ? 'Tax Planning' : 'Steuerplanung'}</h3>
          <p className="service-description">
            {language === 'en'
              ? 'Our experts provide personalized tax planning strategies to minimize your tax liability and maximize your savings.'
              : 'Unsere Experten bieten maßgeschneiderte Steuerplanungsstrategien, um Ihre Steuerlast zu minimieren und Ihre Einsparungen zu maximieren.'}
          </p>
        </div>
        <div className="ServiceCard">
          <img src="irs-representation.png" alt="IRS Representation" className="service-icon" />
          <h3 className="service-title">{language === 'en' ? 'IRS Representation' : 'Vertretung vor der IRS'}</h3>
          <p className="service-description">
            {language === 'en'
              ? "If you're facing an IRS audit or need assistance with tax disputes, our experienced professionals are here to help."
              : 'Wenn Sie sich einer IRS-Prüfung stellen oder Hilfe bei Steuerstreitigkeiten benötigen, stehen Ihnen unsere erfahrenen Fachleute zur Seite.'}
          </p>
        </div>
      </section>
      <section className="WhyChooseUs">
        <h2 className="section-title">{language === 'en' ? 'Why Choose Us?' : 'Warum uns wählen?'}</h2>
        <ul className="reasons-list">
          <li className="reason">{language === 'en' ? 'Experienced and knowledgeable tax consultants' : 'Erfahrene und kompetente Steuerberater'}</li>
          <li className="reason">{language === 'en' ? 'Personalized solutions tailored to your specific needs' : 'Maßgeschneiderte Lösungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind'}</li>
          <li className="reason">{language === 'en' ? 'Timely and accurate tax filings' : 'Pünktliche und korrekte Steuererklärungen'}</li>
          <li className="reason">{language === 'en' ? 'Transparent pricing with no hidden fees' : 'Transparente Preise ohne versteckte Gebühren'}</li>
          <li className="reason">{language === 'en' ? 'Responsive and friendly customer support' : 'Schneller und freundlicher Kundenservice'}</li>
        </ul>
      </section>
      <footer className="Footer">
        <p className="footer-text">
          {language === 'en'
            ? 'Contact us now to schedule a consultation and take control of your taxes.'
            : 'Kontaktieren Sie uns jetzt, um einen Beratungstermin zu vereinbaren und die Kontrolle über Ihre Steuern zu übernehmen.'}
        </p>
        <button className="contact-button">
        <a
        className="App-link"
        href="mailto:shiv.amgoth88@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
       {language === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns'}
      </a>
          
        </button>
      </footer>
    </div>
  );
}

export default App;
