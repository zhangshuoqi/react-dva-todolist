import { createAction } from 'redux-actions'

export const addUserAction = createAction('todoList/addUser')
export const delUserAction = createAction('todoList/delUser')
export const loadUserAction = createAction('todoList/loadUser')