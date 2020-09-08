export const setNotification = (notification, duration) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification,
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        notification: '',
      })
    }, duration * 1000)
  }
}

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export default notificationReducer
