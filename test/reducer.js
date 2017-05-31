// @flow
const INIT_LOAD = 'test/init/LOAD'
const INIT_LOAD_SUCCESS = 'test/init/LOAD_SUCCESS'


export type InitState = {
  isLoading: boolean,
  loaded: boolean,
}

type InitAction = {
  type: string,
}

// just for this test
export type GlobalReducerState = {
  init: InitState,
}


export const initialState: InitState = {
  isLoading: true,
  loaded: false,
  me: '1',
  friends: ['2', '3'],
  followers: [],
  following: [],
  list: {
    '1': {
      id: '1',
      firstName: 'Peter',
      lastName: 'Tyler',
      dob: '11/01/1975',
      levels: [
        { name: 'Austin', points: 80 },
        { name: 'Los Angeles', points: 20 },
        { name: 'Toronto', points: 70 },
      ],
    },
    '2': {
      id: '2',
      firstName: 'Rose',
      lastName: 'Tyler',
      city: 'Austin, TX',
      levels: [
        { name: 'Austin', points: 60 },
        { name: 'Los Angeles', points: 10 },
        { name: 'Toronto', points: 90 },
      ],
    },
    '3': {
      id: 3,
      firstName: 'Sarah',
      lastName: 'Timberlake',
      city: 'Austin, TX',
      levels: [
        { name: 'Austin', points: 10 },
        { name: 'Los Angeles', points: 50 },
        { name: 'Toronto', points: 80 },
      ],
    },
  },
}


function reducer (state: ?InitState = initialState, action: InitAction)
  : ?InitState {

  switch (action.type) {


    case INIT_LOAD:
      return {
        ...state,
        isLoading: true,
      }

    case INIT_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loaded: true,
      }


    default:
      return state

  }

}


export function loadStart (): InitAction {

  return {
    type: INIT_LOAD,
  }

}

export function loadComplete (): InitAction {

  return {
    type: INIT_LOAD_SUCCESS,
  }

}


export default reducer
