import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import { LazyImage } from '../components/LazyImage'

const HomePage: React.FC = () => {
  return (
    <div className="hero-section">
      <nav className="navbar">
        <div className="logo">TradingSolutions</div>
        <Link to="/contact" className="login-btn">
          Log In
        </Link>
      </nav>

      <div className="hero-content">
        <h1>
          The future of investing is here. Buy BTC, ETH, XRP, and hold on your
          own Wallet.
        </h1>
        <p>
          Grow your portfolio to <span>LONG-TERM</span> with the best
          opportunities in the crypto world
        </p>
        <Link to="/contact" className="cta-button">
          Get in touch
        </Link>
      </div>

      <div className="background-images">
        <LazyImage
          src="/home.webp"
          alt="Credit card with beach scene"
          className="background-image"
        />
        <LazyImage
          src="/btc.webp"
          alt="Bitcoin coins"
          className="bitcoin-image"
        />
      </div>
    </div>
  )
}

export default HomePage
