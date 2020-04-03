import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function loadUsers() {
  return request('http://jsonplaceholder.typicode.com/users')
}


