import './chaining';

function doubleSay(str) {
  return `${str}, ${str}`;
}
function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim(str) {
  return `${str}!`;
}

(async () => {
  const result = 'hello'
  |> await #
  |> doubleSay(#, ', ')
  |> capitalize // This is a function call.
  |> `${#  }!`
  |> exclaim
  |> await #
  |> console.log; // This is a method call.

  console.log(result);
})();
