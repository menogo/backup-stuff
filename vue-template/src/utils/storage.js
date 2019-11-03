/**
 * Storage
 * localStorage
 * sessionStorage
 * cookies
 */

const db = window.localStorage

const storage = {
  set: (key, value) => {
    value = !_.isString(value) ? JSON.stringify(value) : value
    db.setItem(key, value)
  },

  remove: (key, value) => db.removeItem(key, value),
  get: key => {
    // let temp

    // console.log(temp)
    // const res = !_.isString(db.getItem(key))
    //             ? JSON.parse(db.getItem(key))
    //             : db.getItem(key)
    // return res
  }
}

window.storage = storage
module.exports = storage
