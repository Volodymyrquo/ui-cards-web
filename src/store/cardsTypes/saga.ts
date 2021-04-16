import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_CARDS_TYPES } from "./actionTypes"
import { getCardsTypesSuccess, getFieldsSuccess ,toggleIsFetcing } from "./actions"

//Include Both Helper File with needed methods
import { fetchListCardTypesFake } from "../../helpers/api_helper_sumra"
import { getCardsTypes } from "../../common/data";
//worker



function* fetchCardsTypes() {
  try {
    const response = yield call(getCardsTypes)
    yield put(getFieldsSuccess(response.fields))
    yield put(getCardsTypesSuccess(response.data))
    yield put(toggleIsFetcing(false))

  } catch (error) {
        console.log('###error',error)
  }
}

//watcher

function* getCardsTypesSaga() {

  yield takeEvery(GET_CARDS_TYPES, fetchCardsTypes)
}

export default getCardsTypesSaga
