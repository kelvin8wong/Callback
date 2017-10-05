// The second argument/parameter is expected to be a function
var names = ["Alice", "Bob", "Waldo", "Winston"];

// function (arr, found){
//     if (arr[i] === "Waldo"){
//       found(i);   // execute callback
//     }
// }
function findWaldo(arr, found) {
  arr.forEach(function(name, position) {
    if (name === "Waldo"){
      found(position);
    }
  });
}



function actionWhenFound(position) {
  console.log("Found Waldo at index " + position);
}

findWaldo(names, actionWhenFound);