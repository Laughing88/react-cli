import axios from 'axios';
import Qs from 'qs';
/**
 * @param {String} url 
 * @param {Object} params 
 */
 export function get (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
    })
  }


  /**
   * @param {String} url 
   * @param {Object} params 
   */
  export function post (url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, Qs.stringify(params))
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  }