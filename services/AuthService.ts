import apiClient from '@/lib/apiClient'

export const getMe = async (): Promise<any> => {
  try {
    const { data } = await apiClient.get('/user/profile')
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

export const updateProfile = async (userId: string, userFields: any): Promise<any> => {
  try {
    const url = `/user/upload-avatar`
    console.log({ files: userFields })
    const { data } = await apiClient.post(url, { files: userFields })
    return data.data
  } catch (error) {
    console.log(error)
  }
}

const AuthService = {
  login,
  getMe,
  updateProfile,
}

export default AuthService
