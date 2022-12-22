import apiClient from '@/lib/apiClient'

export const getMe = async (): Promise<any> => {
  try {
    const { data } = await apiClient.get('/user/profile')
    console.log(data)
    const userData = {
      token: data.data.token,
      user: data.data.user,
    }
    console.log(userData)
    return userData
  } catch (error) {
    console.log(error)
  }
}

export const login = async (email: string, password: string): Promise<any> => {
  try {
    const url = '/auth/login'
    const { data } = await apiClient.post(url, { email, password })
    const userData = {
      token: data.token,
      user: data.user,
    }
    return userData
  } catch (error) {
    console.log(error)
  }
}

const AuthService = {
  login,
  getMe,
}

export default AuthService
