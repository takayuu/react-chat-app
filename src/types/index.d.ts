export interface _UserData {
  uid: string
}

export interface UserDataProperties {
  userId: string,
  displayName: string,
  email: string
  biography: string
  friend: UserDataFriend
}

export interface UserDataFriend {
  [key: string]: {
    roomId: string
  }
}

export interface RootState {
  userData: UserDataProperties
}

export type UserDataActionType = "ADD::USER_DATA" | "RESET::USER_DATA"

export interface UserDataAction {
  type: UserDataActionType
  payload?: Partial<UserDataProperties>
}
