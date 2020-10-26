import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyledSlideContainer } from './styles'
import classes from 'classnames'

class SlideContainer extends PureComponent {
  static propTypes = {
    pageDisplayCount: PropTypes.number, // 每页展示的数量
    children: PropTypes.array, // 要展示的子组件
  }

  state = {
    currentPage: 1 // 当前页
  }

  get pageCount () { // 一共有多少页
    const { pageDisplayCount, children } = this.props
    return Math.ceil(children.length / pageDisplayCount)
  }

  get isLeftNavDisabled () {
    const { currentPage } = this.state
    return currentPage === 1
  }

  get isRightNavDisabled () {
    const { currentPage } = this.state
    return currentPage === this.pageCount
  }

  handleClickNavPre = () => {
    const { currentPage } = this.state
    if (currentPage === 1) return false
    this.setState({currentPage: currentPage - 1})
  }

  handleClickNavNext = () => {
    const { currentPage } = this.state
    if (currentPage >= this.pageCount) return false
    this.setState({currentPage: currentPage + 1})
  }

  render() {
    const { children } = this.props
    const { currentPage } = this.state
    return (
      <StyledSlideContainer currentPage={currentPage}>
        <div className={classes("left-nav", {disabled: this.isLeftNavDisabled})} onClick={this.handleClickNavPre}>‹</div>
        <div className="slide-container">
          <div className="display-content">{children}</div>
        </div>
        <div className={classes("right-nav", {disabled: this.isRightNavDisabled})} onClick={this.handleClickNavNext}>›</div>
      </StyledSlideContainer>
    )
  }
}

export { SlideContainer }

