// The second argument/parameter is expected to be a function
arr.forEach(findWaldo(arr, found) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
});



function actionWhenFound(i) {
  console.log("Found Waldo at index " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);