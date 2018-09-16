import axios from 'axios'

export default {
  beforeRouteEnter(to, from, next) {
    axios.get('/api/auth')
      .then(({ data }) => {
        next(vm => {
          vm.$store.commit('setLoginStatus', data.authenticated)
        })
      })
      .catch(({ response }) => {
        next(vm => {
          vm.$store.commit('setLoginStatus', response.data.authenticated)
          vm.$router.push({ path: '/' })
        })
      })
  }
}