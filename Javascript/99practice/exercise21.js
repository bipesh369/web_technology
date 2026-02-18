async function getTodoSummary() {
  try {
    // 1. Fixed spelling of 'response' (optional but better)
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    // 2. FIX: Added 'await' and removed the brackets [] around data
    const data = await response.json(); 

    // DEBUG: Now this will correctly show: Is Array?: true
    console.log("Data type:", typeof data);
    console.log("Is Array?:", Array.isArray(data));

    if (!Array.isArray(data)) {
      throw new Error("Expected an array but got something else!");
    }

    const completedTitles = data
      .filter(todo => todo.completed === true)
      .map(todo => todo.title);

    const summary = completedTitles.reduce((acc, title, index) => {
      return acc + `${index + 1}. ${title}\n`;
    }, "COMPLETED TASKS:\n"); // Added a colon and newline for better formatting

    console.log(summary);

  } catch (error) {
    // 3. Use error.message to see the specific error text
    console.log("Oops, something went wrong:", error.message || error);
  }
}

getTodoSummary();