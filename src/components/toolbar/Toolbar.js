import {$} from '../../core/dom'
import {createToolbar} from './toolbar.template';
import {ExcelStateCompanent} from '../../core/ExcelStateComponent';
import {defaulStyles} from '../../constants';

export class Toolbar extends ExcelStateCompanent {
    static className = 'excel__toolbar'

    constructor($root, options) {
      super($root, {
        name: 'Toolbar',
        listeners: ['click'],
        subscribe: ['currentStyles'],
        ...options
      })
    }

    prepare() {
      this.initState(defaulStyles)
    }

    get template() {
      return createToolbar(this.state)
    }

    toHTML() {
      return this.template
    }

    storeChanged(changes) {
      this.setState(changes.currentStyles)
    }

    onClick(event) {
      const $target = $(event.target)
      if ($target.data.type === 'button') {
        const value = JSON.parse($target.data.value)
        this.$emit('toolbar:applyStyle', value)
        console.log(this.state)
      }
    }
}
