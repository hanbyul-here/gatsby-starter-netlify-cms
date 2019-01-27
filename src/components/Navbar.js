import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  render() {
    return (
      <section className="section pb-none">
        <nav id="main-nav" role="navigation" aria-label="main-navigation">
          <div className="container">
            <div className="columns is-mobile">
              <Link to={`/`}>
                <div className="column is-full">
                  <div className="has-text-weight-bold is-size-3">
                    Hanbyul <span className="spinner">✰</span> 한별
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </section>
    )
  }
}

export default Navbar
