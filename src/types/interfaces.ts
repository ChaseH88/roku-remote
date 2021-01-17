export interface MainAppState {
  app: AppState,
  rokuConfig: RokuConfigState,
  rokuRemote: RokuRemoteState
}

export interface AppState {
  modalOpen: boolean
}

export interface RokuConfigState {
  baseSet: boolean,
  baseURL: string | null,
  lastUpdated: Date | null
}

export interface RokuRemoteState {
  poweredOn?: boolean
  history?: CommandHistoryInterface[]
}

export interface CommandHistoryInterface {
  name: string,
  command: string,
  timeStamp?: Date
}

export interface Action {
  type: string,
  payload: any
}

export interface RokuButton {
  name: string,
  text: string,
  icon: string,
  keyCode: number,
  endpoint: string
}

export interface AxiosResponse {
  config: {
    method: string,
    timeout: number,
    baseURL: string,
    url: string
  },
  request: XMLHttpRequest,
  response: {
    data: APIResponse,
    headers: object
    status: number
    statusText: string
  },
  isAxiosError: boolean,
  toJSON: Function,
  data: APIResponse
}

export interface APIResponse {
  success: boolean,
  data?: any
  error?: string,
  token?: string
}