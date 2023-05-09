import { call, put, takeEvery } from 'redux-saga/effects'
import { getCatsSuccess } from '../reducers/catReducer'
import axios from 'axios'

function* fetchCatsData(){

        const cats = yield call(()=> axios.get('https://api.thecatapi.com/v1/images/search?limit=10'))
        const data = cats.data
        yield put(getCatsSuccess(data))
}
function* catSaga(){
    yield takeEvery('cats/getCatsFetch',fetchCatsData)
}
export default catSaga;