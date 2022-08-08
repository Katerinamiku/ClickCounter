import {combineReducers, legacy_createStore} from 'redux';
import {CountsReducer} from "./CountsReducer";
import {StartValueReducer} from "./StartValueReducer";
import {MaxValueReducer} from "./MaxValueReducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
   counts: CountsReducer,
   startValue: StartValueReducer,
   maxValue: MaxValueReducer,
})
console.log(typeof rootReducer)
// непосредственно создаём store
export const store = legacy_createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
