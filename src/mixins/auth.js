import axios from 'axios'

export default {
  beforeRouteEnter(to, from, next) {
    axios.get('/api/auth')
      .then(() => next())
      .catch(err => {
        next(vm => {
          vm.$router.push({ path: '/' })
        })
      })
  }
}