console.log(window.Redux);

const { createStore } = window.Redux;
// state
// reducer
// store

const initialState = JSON.parse(localStorage.getItem('hobby_list')) || [] ;

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const newList = [...state];
      newList.push(action.payload)
      return newList
    }
    default:
      return state;
  }
};

const store = createStore(hobbyReducer);

// RENDER REDUX HOBBY LIST
const renderHobbyList = (hobbyList) => {
  if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;

  const ulElement = document.querySelector("#hobby-list-id");
  if (!ulElement) return;

  // reset previous content of ul
  ulElement.innerHTML = "";

  for (const hobby of hobbyList) {
    const liElement = document.createElement("li");
    liElement.textContent = hobby;
    ulElement.appendChild(liElement);
  }
};

// Render initial hobby list
const initialHobbyList = store.getState();
console.log(initialHobbyList);
renderHobbyList(initialHobbyList);

// Handle form submit

const hobbyFormElement = document.querySelector("#hobbyFormId");
if (hobbyFormElement) {
  const handleFormSubmit = (e) => {
    // prevent browser form reloading
    e.preventDefault();
    const hobbyTextElement = hobbyFormElement.querySelector("#hobbyTextId");
    if (!hobbyTextElement) return;
    console.log("Submit", hobbyTextElement.value);
    const action = {
      type: "ADD_HOBBY",
      payload: hobbyTextElement.value,
    };
    store.dispatch(action);

    hobbyFormElement.reset()
  };

  hobbyFormElement.addEventListener("submit", handleFormSubmit);
}

store.subscribe(() => {
  console.log("STATE UPDATE", store.getState());
  const newHobbyList = store.getState();
  renderHobbyList(newHobbyList);

  // update Local Storage
  localStorage.setItem('hobby_list', JSON.stringify(newHobbyList))
});
