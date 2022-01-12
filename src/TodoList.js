class TodoList {

    constructor() {
        this.numTodos = 0
        this.arraywithalltodos = []
    }
      create(description) {
          this.numTodos++
          const object =
          {
              id: this.numTodos,
              text: description,
              status: "incomplete" 
          }

          this.arraywithalltodos.push(object)


          return object
      }


      getAll() {
          return this.arraywithalltodos
      }

      setComplete(id) {
    
          return todoList.id
      }
      


}

module.exports = TodoList
