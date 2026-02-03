import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaClock, FaEuroSign } from 'react-icons/fa'
import './DestinationCard.css'

const DestinationCard = ({ destination, index }) => {
  return (
    <motion.div
      className="destination-card"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      whileHover={{ y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <div className="destination-image-wrapper">
        <img
          src={destination.image}
          alt={destination.name}
          className="destination-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/600x400/1a1a1a/d4af37?text=${destination.name}`
          }}
        />
        <div className="destination-overlay"></div>
        <div className="destination-badge">{destination.subtitle}</div>
      </div>

      <div className="destination-content">
        <h3 className="destination-name">{destination.name}</h3>
        <p className="destination-description">{destination.description}</p>

        <div className="destination-info">
          <div className="info-item">
            <FaClock />
            <span>{destination.duration}</span>
          </div>
          <div className="info-item">
            <FaEuroSign />
            <span>{destination.price.toLocaleString()}€</span>
          </div>
        </div>

        <Link to={`/booking?destination=${destination.id}`} className="destination-btn">
          Réserver maintenant
        </Link>
      </div>
    </motion.div>
  )
}

export default DestinationCard
