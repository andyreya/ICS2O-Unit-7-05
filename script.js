// creates variables

let age = 0
let day = 'Monday'

// makes action occur when button is clicked

document.getElementById('button').addEventListener('click', check)

// creates a function that will create a condition that has to be met and display messages accordingly

function check () {
  age = document.getElementById('input1').value
  age = parseInt(age)

  day = document.getElementById('input2').value

  if ((day !== 'Saturday' && day !== 'Sunday') && (age = 18 || age > 18)) {
    document.getElementbyId('para').innerHTML = 'Time to go to work!'
  } else if ((day !== 'Saturday' && day !== 'Sunday') && (age > 0 && age < 18)) {
    document.getElementById('para').innerHTML = 'Time for school!'
  }
}
