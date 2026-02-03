import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa'
import axios from 'axios'
import './ChatWidget.css'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Bonjour ! Je suis votre conseiller en voyage temporel. Comment puis-je vous aider à choisir votre prochaine destination à travers le temps ? 🕰️"
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim() || isLoading) return

    const userMessage = inputMessage.trim()
    setInputMessage('')

    // Ajouter le message de l'utilisateur
    const newMessages = [...messages, { role: 'user', content: userMessage }]
    setMessages(newMessages)
    setIsLoading(true)

    try {
      const response = await axios.post('/api/chat', {
        message: userMessage,
        history: messages
      })

      if (response.data.success) {
        setMessages([
          ...newMessages,
          { role: 'assistant', content: response.data.response }
        ])
      } else {
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content: "Désolé, je rencontre un problème technique. Veuillez réessayer."
          }
        ])
      }
    } catch (error) {
      console.error('Erreur chat:', error)
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: "Je suis temporairement indisponible. Pour toute question urgente, contactez-nous au 07 49 82 05 62."
        }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const quickQuestions = [
    "Quelle est la meilleure destination pour l'art ?",
    "Quels sont vos prix ?",
    "Le voyage temporel est-il sûr ?",
    "Combien de temps durent les voyages ?"
  ]

  const handleQuickQuestion = (question) => {
    setInputMessage(question)
  }

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        className="chat-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
        {!isOpen && <span className="chat-notification">💬</span>}
      </motion.button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-widget"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chat-header">
              <div className="chat-header-content">
                <FaRobot className="chat-icon" />
                <div>
                  <h3>Assistant TimeTravel</h3>
                  <span className="chat-status">En ligne</span>
                </div>
              </div>
            </div>

            <div className="chat-messages">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`message ${msg.role}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.role === 'assistant' && (
                    <FaRobot className="message-avatar" />
                  )}
                  <div className="message-content">
                    <p>{msg.content}</p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  className="message assistant"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <FaRobot className="message-avatar" />
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="quick-questions">
                <p className="quick-questions-title">Questions rapides :</p>
                <div className="quick-questions-grid">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="quick-question-btn"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form className="chat-input-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Posez-moi vos questions sur les voyages temporels..."
                disabled={isLoading}
                className="chat-input"
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="chat-send-btn"
              >
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidget
