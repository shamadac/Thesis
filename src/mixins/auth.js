import axios from 'axios'

export default {
  beforeRouteEnter(to, from, next) {
    axios.get('/api/auth')
      .then(({ data }) => {
        next(vm => {
          vm.$store.state.user = data.user
        })
      })
      .catch(err => {
        next(vm => {
          vm.$router.push({ path: '/' })
        })
      })
  }
}