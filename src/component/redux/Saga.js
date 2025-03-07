import { all } from "redux-saga/effects";
import investors from "./viewInvestors/Saga";



export default function* rootSaga() {
    yield all([
        investors(),
    ])
}
