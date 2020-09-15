import { createStore, applyMiddleware } from "redux";
import { getArticles } from "./api/news";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put, call } from "redux-saga/effects";

const initialState = {
  isLoading: true,
  datas: "",
  general: "",
  health: "",
  entertainment: "",
};

const sagaMiddleware = createSagaMiddleware();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATAS":
      return {
        ...state,
        isLoading: true,
      };
    case "TAKE_DATAS":
      return {
        ...state,
        [action.category]: action.data,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

function* DataSaga(action) {
  try {
    const Datas = yield call(() => getArticles(action.category));
    yield put({
      type: "TAKE_DATAS",
      data: Datas,
      isLoading: false,
      category: action.category,
    });
  } catch (e) {
    yield alert(e);
  }
}

function* rootSaga() {
  yield takeEvery("GET_DATAS", DataSaga);
}
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
