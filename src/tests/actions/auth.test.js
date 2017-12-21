import { login , logout } from '../../actions/auth'

test('should generate an object to log in', () => {
  const uid = '123test'
  const action = login(uid)
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('should generate an object to log out', () => {
  const action = logout()
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})