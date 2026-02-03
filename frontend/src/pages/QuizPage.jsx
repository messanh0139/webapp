import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'
import axios from 'axios'
import './QuizPage.css'

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [isCompleted, setIsCompleted] = useState(false)
  const [recommendation, setRecommendation] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const questions = [
    {
      id: 'q1',
      question: 'Quel type d\'expérience recherchez-vous ?',
      options: [
        { value: 'culturelle', label: 'Culturelle et artistique', emoji: '🎨' },
        { value: 'aventure', label: 'Aventure et nature', emoji: '🦖' },
        { value: 'raffinement', label: 'Élégance et raffinement', emoji: '✨' }
      ]
    },
    {
      id: 'q2',
      question: 'Votre période préférée ?',
      options: [
        { value: 'moderne', label: 'Histoire moderne (XIXe-XXe siècle)', emoji: '🗼' },
        { value: 'origines', label: 'Temps anciens et origines', emoji: '🦕' },
        { value: 'renaissance', label: 'Renaissance et classicisme', emoji: '🏛️' }
      ]
    },
    {
      id: 'q3',
      question: 'Vous préférez :',
      options: [
        { value: 'urbaine', label: 'L\'effervescence urbaine', emoji: '🏙️' },
        { value: 'sauvage', label: 'La nature sauvage', emoji: '🌋' },
        { value: 'architecture', label: 'L\'art et l\'architecture', emoji: '🎭' }
      ]
    },
    {
      id: 'q4',
      question: 'Votre activité idéale :',
      options: [
        { value: 'monuments', label: 'Visiter des monuments', emoji: '🗿' },
        { value: 'faune', label: 'Observer la faune', emoji: '🦖' },
        { value: 'musees', label: 'Explorer des musées', emoji: '🖼️' }
      ]
    }
  ]

  const handleAnswer = (value) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: value
    })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleSubmit()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)

    try {
      const response = await axios.post('/api/quiz/recommend', { answers })
      
      if (response.data.success) {
        setRecommendation(response.data)
        setIsCompleted(true)
      }
    } catch (error) {
      console.error('Erreur quiz:', error)
      // Recommandation de secours
      setRecommendation({
        recommendation: "Merci d'avoir complété le quiz ! Nos conseillers analyseront vos réponses pour vous proposer la destination parfaite. Contactez-nous pour plus d'informations.",
        destination_id: null
      })
      setIsCompleted(true)
    } finally {
      setIsLoading(false)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (isCompleted && recommendation) {
    return (
      <div className="quiz-page">
        <div className="container">
          <motion.div
            className="quiz-result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="result-icon">
              <FaCheckCircle />
            </div>

            <h2>Votre Destination Idéale !</h2>

            <div className="result-content">
              <p className="result-text">{recommendation.recommendation}</p>

              {recommendation.destination_details && (
                <div className="destination-result" data-aos="fade-up">
                  <h3>{recommendation.destination_details.name}</h3>
                  <p className="destination-period">{recommendation.destination_details.period}</p>
                  <p className="destination-desc">
                    {recommendation.destination_details.description}
                  </p>

                  <div className="result-highlights">
                    <h4>Points forts :</h4>
                    <ul>
                      {recommendation.destination_details.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="result-info">
                    <div className="info-box">
                      <span className="info-label">Prix</span>
                      <span className="info-value">
                        {recommendation.destination_details.price.toLocaleString()}€
                      </span>
                    </div>
                    <div className="info-box">
                      <span className="info-label">Durée</span>
                      <span className="info-value">
                        {recommendation.destination_details.duration}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="result-actions">
              <Link
                to={`/booking${recommendation.destination_id ? `?destination=${recommendation.destination_id}` : ''}`}
                className="btn-primary"
              >
                Réserver ce voyage
              </Link>
              <button
                onClick={() => {
                  setIsCompleted(false)
                  setCurrentQuestion(0)
                  setAnswers({})
                  setRecommendation(null)
                }}
                className="btn-secondary"
              >
                Refaire le quiz
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-page">
      <div className="container">
        <motion.div
          className="quiz-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="quiz-header">
            <h1>Trouvez Votre Destination Idéale</h1>
            <p>Répondez à quelques questions pour découvrir le voyage temporel parfait pour vous</p>
          </div>

          <div className="quiz-progress">
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="progress-text">
              Question {currentQuestion + 1} sur {questions.length}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              className="quiz-question"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="question-text">
                {questions[currentQuestion].question}
              </h2>

              <div className="options-grid">
                {questions[currentQuestion].options.map((option) => (
                  <motion.button
                    key={option.value}
                    className={`option-btn ${
                      answers[questions[currentQuestion].id] === option.value
                        ? 'selected'
                        : ''
                    }`}
                    onClick={() => handleAnswer(option.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="option-emoji">{option.emoji}</span>
                    <span className="option-label">{option.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="quiz-navigation">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="nav-btn"
            >
              <FaArrowLeft /> Précédent
            </button>

            <button
              onClick={handleNext}
              disabled={!answers[questions[currentQuestion].id] || isLoading}
              className="nav-btn primary"
            >
              {currentQuestion === questions.length - 1 ? (
                isLoading ? 'Analyse...' : 'Voir le résultat'
              ) : (
                <>
                  Suivant <FaArrowRight />
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default QuizPage
