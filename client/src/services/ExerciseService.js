import Api from '@/services/Api'

export default {
  index () {
    return Api().get('exercises')
  },
  post (exercise) {
    return Api().post('exercises', exercise)
  }
}
