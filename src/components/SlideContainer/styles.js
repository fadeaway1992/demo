import styled from 'styled-components'

const StyledSlideContainer = styled.div`
  width: 820px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-nav,
  .right-nav {
    width: 20px;
    height: 175px;
    color: #bbb;
    font: 100 36px Arial;
    line-height: 175px;
    text-align: center;
    user-select: none;

    &:not(.disabled):hover {
      color: #389eac;
      background: #f6f6f1;
      cursor: pointer;
    }

    &.disabled {
      cursor: not-allowed;
    }
  }

  .slide-container {
    width: 746px;
    overflow: hidden;
    background: #fffff9;

    .display-content {
      position: relative;
      width: fit-content;
      display: flex;
      left: calc(-756px * ${ (props) => props.currentPage - 1 } );
      transition: left 0.2s;
    }
  }
`

export { StyledSlideContainer }
