import axios from 'axios'

export default {
  beforeRouteEnter(to, from, next) {
    axios.get('/api/auth')
      .then(({ data }) => {
        next(vm => {
          // update user in store
        })
      })
      .catch(err => {
        next(vm => {
          vm.$router.push({ path: '/' })
        })
      })
  }
}