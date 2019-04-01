import Api from '@/services/Api'

export default {
  index () {
    return Api().get('news')
  },
  post (update) {
    return Api().post('news', update)
  }
}
