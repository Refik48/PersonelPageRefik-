


/*Comment*/

var comment;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


comment = [];


document.getElementById('add-comment').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('input').value);
  comment.push(getNumberOrString(document.getElementById('input').value));

  element_list.appendChild(new_li);

});

document.getElementById('random').addEventListener('click', (event) => {
  let element_random_comment = document.getElementById('random-comment');
  element_random_comment.innerText = randomMember(comment);

});




