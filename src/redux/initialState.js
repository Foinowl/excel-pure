import { storage } from "../core/utils"
import { defaulStyles, defaultTitle } from "../constants"

const defaultState = {
    title: defaultTitle,
    rowState: {},
    colState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    currentStyles: defaulStyles
}

const normalize = state => ({
    ...state,
    currentStyles: defaulStyles,
    currentText: ''
})

export const initialState = storage('excel-state') ? normalize(storage('excel-state')) : defaultState