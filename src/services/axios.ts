import axiosRequest from 'axios'

const headers = () => ({
  Authorization: `Bearer ${localStorage.getItem('token')}`,
})

const fetch: any = (uri: string, data: object, method: string) => {
  const promise = new Promise(
    (resolve: (val: any) => void, reject: (val: Error) => void) => {
      const url = process.env.REACT_APP_API_BASE_URL + uri

      axiosRequest({
        headers: headers(),
        method,
        data,
        url,
      })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    }
  )

  return promise
}

const axios: any = {
  get: (uri: string) => {
    return fetch(uri, null, 'get')
  },

  post: (uri: string, payload: object) => {
    return fetch(uri, payload, 'post')
  },

  put: (uri: string, payload: object) => {
    return fetch(uri, payload, 'put')
  },

  patch: (uri: string, payload: object) => {
    return fetch(uri, payload, 'patch')
  },

  delete: (uri: string, payload: object) => {
    return fetch(uri, payload, 'delete')
  },
}

export default axios
