import * as API from '../services/example'

export default {
  namespace: "todoList",
  state: {
    msg: 'fox',
    userList: []
  },
  reducers: {
    getUser(state,action) {
      const preState = JSON.parse(JSON.stringify(state))
      preState.userList = [...preState.userList, ...action.payload]
      return preState
    },
    addUser(state, action) {
      const preState = JSON.parse(JSON.stringify(state))
      preState.userList.push({ name: action.payload })
      return preState
    },
    delUser(state, action) {
      const preState = JSON.parse(JSON.stringify(state))
      preState.userList.splice(action.payload, 1)
      return preState
    }
  },
  effects: {
    *loadUser({ payLoad }, { call, put }) {
      const res = yield call(API.loadUsers)
      yield put({
        type: 'getUser',
        payload: res.data
      })
    }
  }
}