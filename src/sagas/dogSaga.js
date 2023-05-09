import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { getDogsSuccess } from '../reducers/dogReducer'

const headers = {
    'X-API-KEY':'RwhLkIcwnJrx4X6CPQZSlA==KE0EyvjYBynp82D3'
}
function* fetchDogsData(){

        const dogs = yield call(()=> axios.get('https://api.api-ninjas.com/v1/dogs?name=german',{
            headers:{...headers}
        }))
        const data = dogs.data
        yield put(getDogsSuccess(data))
}
function* dogSaga(){
    yield takeEvery('dogs/getDogsFetch',fetchDogsData)
}
export default dogSaga;