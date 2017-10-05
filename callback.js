// The second argument/parameter is expected to be a function
var names = ["Alice", "Bob", "Waldo", "Winston"];

// function (arr, found){
//     if (arr[i] === "Waldo"){
//       found(i);   // execute callback
//     }
// }
function findWaldo(arr, found) {
  arr.forEach(function(name, i) {
    if (name === "Waldo"){
      found(i);
    }
  });
}



function actionWhenFound(position) {
  console.log("Found Waldo at index " + position);
}

findWaldo(names, actionWhenFound);