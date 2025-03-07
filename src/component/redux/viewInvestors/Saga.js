// import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { INVESTORS,EDIT_INVESTORS ,ADD_INVESTOR} from "./ActionTypes";
import { Service } from "../../service/Helper";
import { getAllInvestorsResponse,editInvestorsResponse,addInvestorsResponse } from "./Action";

function* getallInvestors() {
  try {
    const response = yield call(
      Service.commonFetch,
      "/allinvester",
      "GET",
      null
    );
    yield put(getAllInvestorsResponse(response));
    console.log(response)

  } catch (error) {

  }
}

function* editInvestors({payload : editInvestors}) {
  try {
    const response = yield call(
      Service.commonFetch,
      `/investerby/${editInvestors}`,
      "GET",
      null
    );
    yield put(editInvestorsResponse(response));
    console.log(response)

  } catch (error) {

  }
}

function* addInvestors({payload : addInvestors}) {
  try {
    const response = yield call(
      Service.commonFetch,
      "/createinvestors",
      "POST",
      addInvestors,
      null
    );
    yield put(addInvestorsResponse(response));
    console.log(response)

  } catch (error) {

  }
}

function* investors() {
  yield takeEvery(INVESTORS, getallInvestors);
  yield takeEvery(EDIT_INVESTORS, editInvestors);
  yield takeEvery(ADD_INVESTOR, addInvestors);
}

export default investors;
