//** Call back function
//- A callback function is a function that is passed as an argument to another function, with the expectation that it will be executed at a later point in time or when a specific event occurs. Callbacks are fundamental to asynchronous programming and event handling in JavaScript.
//ex:
function printGreetingAfterDelay(greetings, delay) {
  setTimeout(greetings, delay);

  /* setTimeout(() => {
    greetings();
  }, delay); */
}

function greetings() {
  console.log("Welcome to our website");
}

//printGreetingAfterDelay(greetings, 2000); // "2000" this will also work type will be corrected by js not recommended. 

// real example of call back with debounce
/* fetch('/api/data').then(data => {
  // this arrow function is a callback that runs when fetch resolves
  console.log(data);
});

btn.addEventListener('click', () => {
  console.log('button clicked'); // callback
});



btn.addEventListener('click', () => {
  console.log('button clicked'); // callback
}); */


const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    console.log('debouncedFunc called');
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      console.log('func called');
      func(...args);
    }, delay);
  };
};

const handleSearch = debounce((searchQuery) => {
  console.log(searchQuery);
}, 500);

handleSearch('hello'); // debouncedFunc called
handleSearch('world'); // debouncedFunc called, clears previous timeout
// after 500ms, func called with 'world'