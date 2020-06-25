import { put, call, takeLatest, all } from "redux-saga/effects";

function apiGet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "Fazer café" },
        { id: 2, text: "Fazer café 2" },
        { id: 3, text: "Fazer café 3" },
        { id: 4, text: "Fazer café 4" },
      ]);
    }, 2000);
  });
}

function* getTodoList(action) {
  try {
    const response = yield call(apiGet);

    yield put({ type: "SUCCESS_TODO_LIST", payload: { data: response } });
  } catch (err) {
    yield put({ type: "FAILURE_TODO_LIST" });
  }
}

export default function* root() {
  yield all([takeLatest("REQUEST_TODO_LIST", getTodoList)]);
}
