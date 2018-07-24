(() => {
  document.body.innerHTML = `
    <button onclick="actionSetURL(document.getElementById('url').value)">Set</button>
    <button onclick="actionGetImg()">Get</button>
    <button onclick="actionClear()">Clear</button>
    <input id="url" />
    <div id="render"></div>
  `;
})();

const actionSetURL = url => url && store.dispatch({ type: 'SET_URL', url });
const actionGetImg = () => store.dispatch({ type: 'GET_IMG' });
const actionClear = () => store.dispatch({ type: 'CLEAR' });

const reducerURL = (state = '', action) => {
  switch (action.type) {
    case 'SET_URL':
      return action.url;
    case 'CLEAR':
      return '';
    default:
      return state;
  }
}
const reducerImg = (state = '', action) => {
  switch (action.type) {
    case 'GET_IMG':
      return true;
    case 'CLEAR':
      return false;
    default:
      return state;
  }
}

const combineReducers = reducers => (state={}, action) => Object.keys(reducers).reduce((nextState, key) => {
},{}); // reducersはオブジェクト
const rootReducer = combineReducers({ reducerURL, reducerImg }); // オブジェクトに関数を放り込むと関数名と処理を自動でキーバリューにしてオブジェクト生成してくれる
const store = Redux.createStore(rootReducer); // 1つに集約したReducerを以ってStoreを作成
const provider = state => {} // stateを以ってhtml構築
const render = () => { document.getElementById('render').innerHTML = provider(); } // providerで構築したhtmlを描画
store.subscribe(()=>{
  console.log(store.getState());
  render();
}); // アクションがdispatchされるたびに呼ばれるイベントを登録する
render(); // reducerIdのついたdivにhtmlを流し込む
