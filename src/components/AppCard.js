import React from 'react'

const AppCard = ({img , alt , title}) => {
  // const {img , alt , title} = props (un metodo alternativo)
  return (
    <React.Fragment>
      <article>
        <img src={img} alt={alt}/>
        <h4>{title}</h4>
      </article>
    </React.Fragment>
  )
}

export default AppCard