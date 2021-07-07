import { mount, shallowMount } from '@vue/test-utils'
import App from '../../src/App.vue'
import axios from 'axios'

const fakeUsers = [
  {
    name: 'My Name 1',
    cpf: 10766873005,
    phone: 76147647067,
    email: 'myemail1@test.com'
  },
  {
    name: 'My Name 2',
    cpf: 97159584007,
    phone: 97831747036,
    email: 'myemail2@test.com'
  },
  {
    name: 'My Name 3',
    cpf: 73879544026,
    phone: 74523863024,
    email: 'myemail3@test.com'
  }
]

jest.mock('axios', () => ({
  get: jest.fn(() => fakeUsers)
}))

test('loads users in mounted', () => {
  const wrapper = mount(App)

  wrapper.unmount()
})

describe('App.vue', () => {
  test('is Vue instance', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.exists()).toBeTruthy()
  })
})
