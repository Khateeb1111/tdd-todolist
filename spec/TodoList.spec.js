const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it("creates a todo item", () => {
    // set up
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })
})



// second to do item with id 2

it("creates a second todo item with id 2", () => {
  // set up
  const expectedOne = {
    id: 1,
    text: "turn the heating on!",             //line 29-32 is a todo item
    status: "incomplete"
  }

  const expectedTwo = {
    id: 2,
    text: "wake up",                          //line 35-38 is a second todo item
    status: "incomplete"
  }
  // execute
  const resultOne = todoList.create("turn the heating on!")
  const resultTwo = todoList.create("wake up")
  // verify
  expect(resultOne).toEqual(expectedOne)
  expect(resultTwo).toEqual(expectedTwo)
})

beforeEach(() => {
  todoList = new TodoList()
})

//get all todo items


it("get all returns empty list when no todos", () => {
  // set up  
  const expected = []            //expect is the expected 
  
  // execute
  const allTodos = todoList.getAll()    //allTodos is the result 

  // verify
  expect(allTodos).toEqual(expected)
})



it("get all returns single todo", () => {
  // set up  
  const expected = [
    {
      id: 1,
    text: "bojo",             
    status: "incomplete"
  }
]          

todoList.create("bojo")
  
  // execute
  const allTodos = todoList.getAll()    //allTodos is the result 

  // verify
  expect(allTodos).toEqual(expected)
})


// set a todo item completed by its ID

it("set a todo item completed by its ID", () => {
  // set up  
  const expected = [
    {
      id: 1,
    text: "bojo",             
    status: "complete"
  }
]          

todoList.create("bojo")
  
  // execute
  todoList.setComplete(1)
  const allTodos = todoList.getAll()    //allTodos is the result 

  // verify
  expect(allTodos).toEqual(expected)
})
