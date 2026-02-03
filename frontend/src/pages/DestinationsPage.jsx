import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DestinationCard from '../components/DestinationCard'
import './DestinationsPage.css'

const DestinationsPage = () => {
  const [destinations, setDestinations] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchDestinations()
  }, [])

  const fetchDestinations = async () => {
    try {
      const response = await axios.get('/api/destinations')
      
      if (response.data.success) {
        const destinationsData = Object.keys(response.data.destinations).map(key => ({
          id: key,
          name: response.data.destinations[key].name,
          subtitle: response.data.destinations[key].period,
          description: response.data.destinations[key].description,
          image: `/images/${key}.jpg`,
          price: response.data.destinations[key].price,
          duration: response.data.destinations[key].duration
        }))
        setDestinations(destinationsData)
      }
    } catch (error) {
      console.error('Erreur chargement destinations:', error)
      // Données de secours
      setDestinations([
        {
          id: 'paris_1889',
          name: 'Paris 1889 - Belle Époque',
          subtitle: 'XIXe siècle',
          description: 'Plongez dans l\'effervescence de l\'Exposition Universelle',
          image: '/images/paris-1889.jpg',
          price: 8500,
          duration: '7 jours'
        },
        {
          id: 'cretace',
          name: 'Crétacé -65M - Ère des Dinosaures',
          subtitle: 'Préhistoire',
          description: 'Vivez l\'aventure ultime avec les géants du passé',
          image: '/images/cretace.jpg',
          price: 15000,
          duration: '5 jours'
        },
        {
          id: 'florence_1504',
          name: 'Florence 1504 - Renaissance Italienne',
          subtitle: 'Renaissance',
          description: 'Rencontrez les génies de la Renaissance',
          image: '/images/florence-1504.jpg',
          price: 12000,
          duration: '6 jours'
        }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="destinations-page loading">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div className="destinations-page">
      <section className="destinations-hero">
        <div className="container">
          <h1 data-aos="fade-up">Nos Destinations Temporelles</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Explorez trois époques fascinantes avec TimeTravel Agency
          </p>
        </div>
      </section>

      <section className="destinations-content">
        <div className="container">
          <div className="destinations-grid">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="destinations-info" data-aos="fade-up">
        <div className="container">
          <h2>Pourquoi choisir TimeTravel Agency ?</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>🛡️ Sécurité Garantie</h3>
              <p>
                Nos protocoles de voyage temporel sont certifiés par l'Agence Internationale
                du Temps. Votre sécurité est notre priorité absolue.
              </p>
            </div>
            <div className="info-card">
              <h3>🎓 Guides Experts</h3>
              <p>
                Nos guides sont des historiens diplômés avec une connaissance approfondie
                de chaque époque visitée.
              </p>
            </div>
            <div className="info-card">
              <h3>⭐ Expérience Luxe</h3>
              <p>
                Profitez d'un confort 5 étoiles même en voyage temporel. Hébergement,
                repas et équipements haut de gamme garantis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DestinationsPage
