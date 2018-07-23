(() => {
  document.body.innerHTML = `
  <button>Set</button>
  <button>Get</button>
  <button>Clear</button>
  <input />
  <div id="render"></div>
  `;
})();

const store = '';
const actionSetURL = () => store.dispatch({ type: 'SET_URL' });
const actionGetImg = () => store.dispatch({ type: 'GET_IMG' });
const actionClear = () => store.dispatch({ type: 'CLEAR' });

const reducerURL = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
}
const reducerImg = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
}
