import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Work } from '../components/Work'
import { SlideContainer } from '../components/SlideContainer'

class App extends PureComponent {
  static propTypes = {
    works: PropTypes.array
  }

  render() {
    const { works } = this.props
    return (
      <SlideContainer pageDisplayCount={3}>
        {
          works.map(({ id, author, title, url, cover, price }) => {
            return <Work
              key={id}
              id={id}
              author={author}
              title={title}
              url={url}
              cover={cover}
              price={price}
            />
          })
        }
      </SlideContainer>
    )
  }
}

const mapStateToProps = ({ works }) => {
  return { works }
}

export default connect(mapStateToProps)(App)

