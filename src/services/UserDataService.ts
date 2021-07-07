import http from '@/http-common'

class UserDataService {
  getAllUsersApi(): Promise<any> {
    return http.get('/users')
  }
}

export default new UserDataService()
