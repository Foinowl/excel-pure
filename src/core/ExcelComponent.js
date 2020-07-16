import { DomListener } from "./DomListener";


export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
      super($root, options.listeners)
      this.name = options.name || ''
      this.emitter = options.emitter
      this.unsubscribers = []

      this.prepare()
    }

   // Настраиваем нам компонент до init
    prepare(){

    }

    // Возвращает шаблон компонента
    toHTML() {
      return ''
    }

    // Уведомляем слушателей про событие event
    $emit(event, ...args){
      this.emitter.emit(event, ...args)
    }

    // Подписываемся на событие event
    $on(event, fn){
      const unsub = this.emitter.subscribe(event, fn)
      this.unsubscribers.push(unsub)
    }
  
    // Иницилизируем наш компонент
    // Добавляем DOM слушателей
    init() {
      this.initDOMListeners()
    }
 
    //Удаляем компонент, чистим слушателей
    destroy(){
      this.removeDOMListeners()
      this.unsubscribers.forEach(unsub => unsub())
    }
  }
  