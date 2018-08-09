const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init(e) {
  // Write your JavaScript code inside the init() function
  let index = 0
  const keydown = parseInt(e.detail || e.which);

    if (keydown === code[index]) {
      index++;

      if (index === code.length) {
        alert("Congrats!");

        index = 0;
      }
    } else {
      index = 0;
    }
}
