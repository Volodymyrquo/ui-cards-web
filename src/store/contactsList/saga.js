import { call, put, takeEvery } from "redux-saga/effects"

import { SET_USER_SETTINGS } from "./actionTypes"
import { setUserSettingsSuccess, setUserSettings } from "./actions"
import { UserSettingsType } from "./reducer"
import { getUserSettings } from "../../common/data"

function* fetchContactsList({ payload: users }) {
  try {
    yield put(setUserSettingsSuccess(users))
  } catch (error) {
    console.log(error)
  }
}

//watcher
function* contactsListSaga() {
  yield takeEvery(SET_USER_SETTINGS, fetchContactsList)
}

export default contactsListSaga
