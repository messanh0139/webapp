import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaRocket, FaClock, FaShieldAlt, FaStar } from 'react-icons/fa'
import DestinationCard from '../components/DestinationCard'
import './HomePage.css'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const destinations = [
    {
      id: 'paris_1889',
      name: 'Paris 1889',
      subtitle: 'Belle Époque',
      description: 'Plongez dans l\'effervescence de l\'Exposition Universelle',
      image: '/images/paris-1889.jpg',
      price: 8500,
      duration: '7 jours'
    },
    {
      id: 'cretace',
      name: 'Crétacé -65M',
      subtitle: 'Ère des Dinosaures',
      description: 'Vivez l\'aventure ultime avec les géants du passé',
      image: '/images/cretace.jpg',
      price: 15000,
      duration: '5 jours'
    },
    {
      id: 'florence_1504',
      name: 'Florence 1504',
      subtitle: 'Renaissance Italienne',
      description: 'Rencontrez les génies de la Renaissance',
      image: '/images/florence-1504.jpg',
      price: 12000,
      duration: '6 jours'
    }
  ]

  const features = [
    {
      icon: <FaClock />,
      title: 'Précision Temporelle',
      description: 'Technologie quantique de dernière génération'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Sécurité Maximale',
      description: 'Protocoles de sécurité certifiés'
    },
    {
      icon: <FaStar />,
      title: 'Luxe & Confort',
      description: 'Expérience 5 étoiles garantie'
    },
    {
      icon: <FaRocket />,
      title: 'Guides Experts',
      description: 'Accompagnement personnalisé par des historiens'
    }
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/time-travel-bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title">
              Voyagez à travers
              <span className="text-gradient"> le Temps</span>
            </h1>
          </motion.div>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Découvrez l'histoire comme jamais auparavant avec TimeTravel Agency
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/destinations" className="btn-primary">
              Découvrir les destinations
            </Link>
            <Link to="/quiz" className="btn-secondary">
              Trouver mon voyage idéal
            </Link>
          </motion.div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Défiler pour explorer</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">L'Agence de Voyage Temporel</h2>
          <p className="section-subtitle">
            TimeTravel Agency est la première agence de voyage temporel de luxe au monde.
            Depuis 2025, nous offrons à nos clients des expériences uniques à travers l'histoire.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="destinations-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Nos Destinations</h2>
          <p className="section-subtitle">
            Choisissez parmi nos trois destinations temporelles soigneusement sélectionnées
          </p>

          <div className="destinations-grid">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
              />
            ))}
          </div>

          <div className="destinations-cta" data-aos="fade-up">
            <Link to="/destinations" className="btn-primary">
              Voir toutes les destinations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" data-aos="fade-up">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt pour l'aventure de votre vie ?</h2>
            <p>
              Nos conseillers sont là pour vous guider dans le choix de votre voyage temporel
            </p>
            <div className="cta-buttons">
              <Link to="/quiz" className="btn-primary">
                Commencer le quiz
              </Link>
              <Link to="/booking" className="btn-secondary">
                Réserver maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
