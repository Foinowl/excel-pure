import {clone} from '../core/utils'
import {defaulStyles, defaultTitle} from '../constants'

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaulStyles,
  openedDate: new Date().toJSON()
}

const normalize = state => ({
  ...state,
  currentStyles: defaulStyles,
  currentText: ''
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}
