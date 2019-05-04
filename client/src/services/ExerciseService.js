import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('exercises', {
      params: {
        search: search
      }
    })
  },
  post (exercise) {
    return Api().post('exercises', exercise)
  }
}
