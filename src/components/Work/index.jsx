import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyledWorkItem } from './styles'
const URL_PREFIX = 'https://read.douban.com'

class Work extends PureComponent {
  static propTypes = {
    author: PropTypes.object,
    title: PropTypes.string,
    url: PropTypes.string,
    cover: PropTypes.string,
    id: PropTypes.string,
    price: PropTypes.number
  }

  render () {
    const { author: { name: authorName, url: authorUrl }, title, url, cover, id, price } = this.props

    return (
      <StyledWorkItem className="work-item">
        <div className="left-part">
          <p className="title">{title}</p>
          <a href={URL_PREFIX + authorUrl} className="author-info" target="_blank">{authorName}</a>
          <span className="price">{price}元</span>
        </div>
        <a href={URL_PREFIX + url} target="_blank" className="right-part cover-container">
          <img src={cover} alt={title} className="cover"/>
        </a>
      </StyledWorkItem>
    )
  }
}

export { Work }
