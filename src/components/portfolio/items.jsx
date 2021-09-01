import React from 'react'

const Lists = ({ menuItems }) => {
  return (
    <div className='section-center'>
      {menuItems.map((item) => {
        const { id, title, img, desc, price } = item
        return (
          <article className='menu-item' key={id}>
            <img src={img} className='photo' />
            <header>
              <h4>{title}</h4>
              <h4 className='price'>{price}</h4>
              <p className='item-text'>{desc}</p>
            </header>
          </article>
        )
      })}
    </div>
  )
}

export default Lists
