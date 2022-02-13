/**
 * The function should ask the question and, depending on the user’s answer,
 * call yes() or no()
 * @param {string} question
 * @param {Function} yes
 * @param {Function} no
 */
function ask(question, yes, no) {
  // Function declaration
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You disagreed.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

// using function expressions (anonymous functions) as callback functions
ask(
  "Do you like ice-cream?",
  function () {
    alert("Good choice!");
  },
  function () {
    alert("Try one");
  }
);
