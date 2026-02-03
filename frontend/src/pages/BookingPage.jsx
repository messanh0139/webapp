import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaCalendar, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import axios from 'axios'
import './BookingPage.css'

const BookingPage = () => {
  const [searchParams] = useSearchParams()
  const preselectedDestination = searchParams.get('destination')

  const [formData, setFormData] = useState({
    destination: preselectedDestination || '',
    name: '',
    email: '',
    phone: '',
    date: '',
    travelers: '1'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingResult, setBookingResult] = useState(null)

  const destinations = [
    { id: 'paris_1889', name: 'Paris 1889 - Belle Époque', price: 8500 },
    { id: 'cretace', name: 'Crétacé -65M - Ère des Dinosaures', price: 15000 },
    { id: 'florence_1504', name: 'Florence 1504 - Renaissance Italienne', price: 12000 }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const calculateTotal = () => {
    const destination = destinations.find(d => d.id === formData.destination)
    if (!destination) return 0
    return destination.price * parseInt(formData.travelers || 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await axios.post('/api/booking', formData)
      
      if (response.data.success) {
        setBookingResult(response.data.booking)
      }
    } catch (error) {
      console.error('Erreur réservation:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (bookingResult) {
    return (
      <div className="booking-page">
        <div className="container">
          <motion.div
            className="booking-success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="success-icon">
              <FaCheckCircle />
            </div>

            <h2>Réservation Confirmée !</h2>
            
            <div className="booking-details">
              <p className="booking-id">
                Numéro de réservation : <strong>{bookingResult.booking_id}</strong>
              </p>

              <div className="details-grid">
                <div className="detail-item">
                  <strong>Destination :</strong>
                  <span>{bookingResult.destination}</span>
                </div>
                <div className="detail-item">
                  <strong>Voyageur(s) :</strong>
                  <span>{bookingResult.travelers}</span>
                </div>
                <div className="detail-item">
                  <strong>Date de départ :</strong>
                  <span>{new Date(bookingResult.date).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="detail-item">
                  <strong>Prix total :</strong>
                  <span className="price">{bookingResult.total_price.toLocaleString()}€</span>
                </div>
              </div>

              <div className="confirmation-message">
                <p>
                  Un email de confirmation a été envoyé à <strong>{bookingResult.email}</strong>
                </p>
                <p>
                  Notre équipe vous contactera sous 24h pour finaliser les détails de votre voyage temporel.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setBookingResult(null)
                setFormData({
                  destination: '',
                  name: '',
                  email: '',
                  phone: '',
                  date: '',
                  travelers: '1'
                })
              }}
              className="btn-primary"
            >
              Faire une nouvelle réservation
            </button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="booking-page">
      <div className="container">
        <div className="booking-header" data-aos="fade-up">
          <h1>Réserver Votre Voyage Temporel</h1>
          <p>Remplissez le formulaire ci-dessous pour réserver votre aventure</p>
        </div>

        <div className="booking-content">
          <motion.form
            className="booking-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="destination">
                <FaMapMarkerAlt /> Destination *
              </label>
              <select
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez une destination</option>
                {destinations.map((dest) => (
                  <option key={dest.id} value={dest.id}>
                    {dest.name} - {dest.price.toLocaleString()}€
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="name">
                <FaUser /> Nom complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jean Dupont"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope /> Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean.dupont@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  <FaPhone /> Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+33 6 12 34 56 78"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">
                  <FaCalendar /> Date de départ *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="travelers">
                  <FaUser /> Nombre de voyageurs *
                </label>
                <select
                  id="travelers"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  required
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'personne' : 'personnes'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {formData.destination && (
              <div className="price-summary" data-aos="fade-up">
                <h3>Résumé</h3>
                <div className="summary-row">
                  <span>Prix par personne :</span>
                  <span>
                    {destinations.find(d => d.id === formData.destination)?.price.toLocaleString()}€
                  </span>
                </div>
                <div className="summary-row">
                  <span>Nombre de voyageurs :</span>
                  <span>{formData.travelers}</span>
                </div>
                <div className="summary-row total">
                  <span>Prix total :</span>
                  <span>{calculateTotal().toLocaleString()}€</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Réservation en cours...' : 'Confirmer la réservation'}
            </button>

            <p className="form-note">
              * Champs obligatoires. Vos données sont sécurisées et ne seront jamais partagées.
            </p>
          </motion.form>

          <div className="booking-sidebar" data-aos="fade-left">
            <div className="info-box">
              <h3>Informations importantes</h3>
              <ul>
                <li>✓ Confirmation immédiate par email</li>
                <li>✓ Annulation gratuite jusqu'à 30 jours avant le départ</li>
                <li>✓ Assurance voyage temporel incluse</li>
                <li>✓ Guide expert francophone</li>
                <li>✓ Équipement de sécurité fourni</li>
              </ul>
            </div>

            <div className="info-box">
              <h3>Besoin d'aide ?</h3>
              <p>Notre équipe est disponible 24/7</p>
              <p><strong>📞 07 49 82 05 62</strong></p>
              <p><strong>📧 messanhyaovi.kodjo@ynov.com</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPage
