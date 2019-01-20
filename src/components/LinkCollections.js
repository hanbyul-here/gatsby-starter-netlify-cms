import React from 'react'
import PropTypes from 'prop-types'

function getLinks(links) {
  return links.map((link, i) => {
    return(
      <li key={`link-list-${i}`} style={{width: 'auto', display: 'inline'}} className="is-inline-touch is-inline-tablet pr-xs">
        <a key={`link-a-${i}`} href={link.link}>{link.name}</a>
      </li>
    )
  })
}

const LinkCollection =  ({linkData}) => {
  return (
      <ul className="mb-md ml-none">
        {getLinks(linkData)}
      </ul>
  )
}

export default LinkCollection
