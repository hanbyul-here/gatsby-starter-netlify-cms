import React from 'react'
import PropTypes from 'prop-types'

function paddingEnum(val, arrLen){
  if (val === 0) return 'pr-xs'
  if (val === arrLen) return 'pl-xs'
  return 'pr-xs pl-xs'
}

function getLinks(links) {
  return links.map((link, i) => {
    const paddingClassName = paddingEnum(i, links.length-1)
    return(
      <React.Fragment key={`link-fragment-${link.name}-${i}`}>
        <li key={`link-list-${link.name}-${i}`} style={{width: 'auto', display: 'inline'}} className={`is-inline-touch is-inline-tablet ${paddingClassName}`}>
          <a key={`link-a-${link.name}-${i}`} href={link.link}>{link.name}</a>
        </li>
        {(i !== links.length-1) &&  <span key={`dot-linke-${link.name}-${i}`}> • </span>}
      </React.Fragment>
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
