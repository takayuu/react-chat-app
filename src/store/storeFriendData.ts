export interface State {
  [key: string]: {
    userId: string
    displayName: string
    chatLog: [] | [
      {
        id: number
        date: Date
        text: string
      }
    ]
  }
}

type Type = "ADD::FRIEND_DATA" | "RESET::FRIEND_DATA" | "DELETE::FRIEND_DATA"

type Action = {
  type: Type
  payload?: State
}

// State
const initState: State = {}

// Action
export const friendDataAction = {
  add: (payload: State): Action => ({
    type: "ADD::FRIEND_DATA",
    payload: payload
  }),
  reset: (): Action => ({
    type: "RESET::FRIEND_DATA",
  }),
  del: (): Action => ({
    type: "DELETE::FRIEND_DATA",
  })
}

// Reducer
export const friendDataReducer = (
  state = initState,
  action: { type: Type, payload: State }
): State => {
  switch (action.type) {
    case "ADD::FRIEND_DATA":
      return {
        ...state,
        ...action.payload
      }
    case "RESET::FRIEND_DATA":
      return {
        ...initState
      }
    case "DELETE::FRIEND_DATA":
      return {
        ...initState
      }
    default:
      return state
  }
}
