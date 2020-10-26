const ACTION_UPDATE_WORKS = 'ACTION_UPDATE_WORKS'

const initialState = {
  works: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_UPDATE_WORKS:
      return { works: payload }
    default:
      return state
  }
}

export { reducer, ACTION_UPDATE_WORKS }
