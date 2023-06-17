import React, { useState } from 'react';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">TaxConsult</div>
        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <a href="#services">{language === 'en' ? 'Services' : 'Dienstleistungen'}</a>
          </li>
          <li className="navbar-item">
            <a href="#why-choose-us">{language === 'en' ? 'Why Choose Us' : 'Warum uns wählen'}</a>
          </li>
          <li className="navbar-item">
            <a href="#contact">{language === 'en' ? 'Contact' : 'Kontakt'}</a>
          </li>
        </ul>
      </nav>
      <header className="App-header">
        <div className="header-background"></div>
        <h1 className="title">{language === 'en' ? 'Welcome to TaxConsult' : 'Willkommen bei TaxConsult'}</h1>
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
      <section id="services" className="Services">
        <h2 className="section-title">{language === 'en' ? 'Our Services' : 'Unsere Dienstleistungen'}</h2>
        <div className="ServiceCard">
        <h3 className="service-title">
            {language === 'en' ? 'Tax Preparation' : 'Steuererklärung'}
          </h3>
          <p className="service-description">
            {language === 'en'
              ? 'We provide expert tax preparation services to ensure accurate and timely filing of your tax returns.'
              : 'Wir bieten fachkundige Steuererklärungsdienste an, um eine genaue und rechtzeitige Einreichung Ihrer Steuererklärungen sicherzustellen.'}
          </p>
        </div>
        <div className="ServiceCard">
         <h3 className="service-title">
            {language === 'en' ? 'Tax Planning' : 'Steuerplanung'}
          </h3>
          <p className="service-description">
            {language === 'en'
              ? 'Our tax planning services help you minimize your tax liability and optimize your financial strategies.'
              : 'Unsere Steuerplanungsdienste helfen Ihnen, Ihre Steuerlast zu minimieren und Ihre finanziellen Strategien zu optimieren.'}
          </p>
        </div>
      </section>
      <section id="why-choose-us" className="WhyChooseUs">
        <h2 className="section-title">
          {language === 'en' ? 'Why Choose Us' : 'Warum uns wählen'}
        </h2>
        <div className="ReasonCard">
          <h3 className="reason-title">
            {language === 'en' ? 'Expertise' : 'Fachkenntnisse'}
          </h3>
          <p className="reason-description">
            {language === 'en'
              ? 'Our team of highly skilled tax consultants has extensive knowledge and experience in tax regulations and laws.'
              : 'Unser Team von hochqualifizierten Steuerberatern verfügt über umfangreiches Wissen und Erfahrung in Steuervorschriften und -gesetzen.'}
          </p>
        </div>
        <div className="ReasonCard">
          <h3 className="reason-title">
            {language === 'en' ? 'Personalized Service' : 'Persönlicher Service'}
          </h3>
          <p className="reason-description">
            {language === 'en'
              ? 'We understand that every client is unique, so we provide tailored solutions and personalized service to meet your specific needs.'
              : 'Wir verstehen, dass jeder Kunde einzigartig ist. Daher bieten wir maßgeschneiderte Lösungen und persönlichen Service, der Ihren spezifischen Anforderungen entspricht.'}
          </p>
        </div>
      </section>
      <section id="contact" className="Contact">
        <h2 className="section-title">{language === 'en' ? 'Contact Us' : 'Kontaktieren Sie uns'}</h2>
        <p className="contact-description">
          {language === 'en'
            ? 'Ready to get started? Contact us today for a consultation.'
            : 'Bereit, loszulegen? Kontaktieren Sie uns noch heute für eine Beratung.'}
        </p>
        <div className="contact-info">
          <p>
            <strong>{language === 'en' ? 'Phone:' : 'Telefon:'}</strong> +1 123-456-7890
          </p>
          <p>
            <strong>Email:</strong> info@taxconsult.com
          </p>
          <p>
            <strong>{language === 'en' ? 'Address:' : 'Adresse:'}</strong> 123 Main St, City, Country
          </p>
        </div>
      </section>
      <footer className="Footer">
        <p>&copy; 2023 TaxConsult. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
