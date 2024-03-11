import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import Todo from "./Todo";

it("renders without crashing", function() {
  render(<TodoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", function () {
    const { getByLabelText, queryByText } = render(<TodoList />);
  
    // no todos yet
    expect(queryByText("Do Laundry")).not.toBeInTheDocument();
  
    // Use placeholder text for finding labels
    const todoInput = getByLabelText("Enter New Task:");
   
    const submitBtn = queryByText("Submit");
  
    // fill out the form
    fireEvent.change(todoInput, { target: { value: "Do Laundry" } });
    fireEvent.click(submitBtn);
  
    // item exists!
    expect(queryByText("Do Laundry")).toBeInTheDocument();
  }
  
  
  );



  test('removes todo when X button is clicked', () => {
    const todo = {
      id: 1,
      task: 'Example Todo',
    };
  
    const removeTodoMock = jest.fn();
    const { getByText } = render(<Todo {...todo} removeTodo={removeTodoMock} />);
  
    // Find the "X" button and click it
    const removeButton = getByText('X');
    fireEvent.click(removeButton);
  
    // Ensure that the removeTodo function is called with the correct ID
    expect(removeTodoMock).toHaveBeenCalledWith(todo.id);
  });