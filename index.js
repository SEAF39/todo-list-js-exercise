// Module 1 - Week3
// Todo List Assignment

// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title) {
  taskTitles.push(title);
  taskComplete.push(false);
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// Define the constructor function for a task object
function newTask(title, description) {
  // Create an object to represent the task
  const task = {
    // Store the task's title and description
    title: title,
    description: description,
    // Store whether the task has been completed or not
    complete: false,
    // Define a method to log the task's state
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    // Define a method to mark the task as completed
    markCompleted: function() {
      this.complete = true;
    }
  };
  // Return the task object
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
// Store the two tasks in an array
const tasks = [task1, task2];

// Log the state of task1 before marking it as completed
task1.logState(); // Output: Clean Cat Litter has not been completed
// Mark task1 as completed
task1.markCompleted();
// Log the state of task1 again
task1.logState(); // Output: Clean Cat Litter has been completed
