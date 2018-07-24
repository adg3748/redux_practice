(() => {
  document.body.innerHTML = `
    <button onclick="actionSetURL(document.getElementById('url').value)">Set</button>
    <button onclick="actionGetImg()">Get</button>
    <button onclick="actionClear()">Clear</button>
    <input />
    <div id="render"></div>
  `;
})();

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

const combineReducers = reducers => (state={}, action) => Object.keys(reducers).reduce((nextState, key) => {
},{});
const rootReducer = combineReducers({ reducerURL, reducerImg }); // オブジェクトに関数を放り込むと関数名と処理を自動でキーバリューにしてオブジェクト生成してくれる
const store = Redux.createStore(rootReducer); // 1つに集約したReducerを以ってStoreを作成
const provider = state => {} // stateを以ってhtml構築
const render = () => { document.getElementById('render').innerHTML = provider(); } // providerで構築したhtmlを描画
store.subscribe(render); // アクションがdispatchされるたびに呼ばれるイベントを登録する
render(); // reducerIdのついたdivにhtmlを流し込む
