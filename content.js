

//Add infinite loop for FontChangeHandler function to be called every 1000 ms
//Syntax: setInterval(<function_name>, <time_between_calls (count as milli-seconds)>) -> to solve the loading halfway bugs
const Interval = setInterval(FontChangeHandler, 1000);

function FontChangeHandler() {
  var elements = document.querySelectorAll(
    'body *:not(script):not(.fa):not(.fas):not(.far):not(.fal):not(.fab):not(.icon):not(.material-icons):not(.material-icons-extended):not(.socicon):not(.glyphicon):not([class^="icon-"]):not(.ms-Icon):not([data-icon-name])'
  );

  // Now you can loop through the selected elements
  elements.forEach(function (element) {
    // Do something with each element
    console.log(element);
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendMessage) => {
  var elements = document.querySelectorAll(
    'body *:not(script):not(.fa):not(.fas):not(.far):not(.fal):not(.fab):not(.icon):not(.material-icons):not(.material-icons-extended):not(.socicon):not(.glyphicon):not([class^="icon-"]):not(.ms-Icon):not([data-icon-name])'
  );
  if (request.command == "on") {
    // Now you can loop through the selected elements
    elements.forEach(function (element) {
      // Do something with each element
      console.log(element);
      element.style = `
                font-family: 'Vietomotype';
                font-weight: normal;
                font-style: normal;
                `;
    });
  }
  if (request.command == "off") {
    elements.forEach(function (element) {
      // Do something with each element
      console.log(element);
      element.style.fontFamily = ``;
    });
  }
});
