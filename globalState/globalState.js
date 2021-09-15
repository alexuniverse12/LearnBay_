import { createGlobalState } from "react-hooks-global-state";


const initialState = {
  authenticated: false,
  isAdmin: false,
  authOpen: true,
  init: true ,
  userState: undefined,
  favorite: false,
  what: '',
  why:'',
  bookName:'',
  authorName:'',
  eventNameAmplitude: '',
  titleForFavorites: '',
  navPointForFavorites: '',
  amazonLink: '',
  note: ''
};


export const {
  useGlobalState,
  getGlobalState,
  setGlobalState,
} = createGlobalState(initialState);