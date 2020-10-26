import styled from 'styled-components'

const StyledWorkItem = styled.div`
  &.work-item {
    width: 242px;
    height: 187px;
    padding: 10px;
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    display: flex;
    margin-right: 10px;
    flex-shrink: 0;
    background: #fff;

    .left-part {
      position: relative;
      width: 110px;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;

      .title {
        margin: 0;
        font-size: 14px;
        font-weight: 400;
        color: #000;
        user-select: none;
        margin-bottom: 4px;

        &:hover {
          font-weight: 500;
        }
      }

      .author-info {
        text-decoration: none;
        color: #777;
        font-size: 12px;
      }

      .price {
        position: absolute;
        bottom: 4px;
        left: 4px;
        font-size: 14px;
        color: #3db192;
        font-weight: 500;
        user-select: none;
      }
    }

    .cover-container {
      width: 110px;
      height: 100%;

      .cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`

export { StyledWorkItem }
