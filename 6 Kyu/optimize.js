function antiOptimizeAsync(task) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(task);
      }, 12000);
    });
  }

  antiOptimizeAsync("example task")
    .then(result => {
      console.log("Task completed:", result);
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
  