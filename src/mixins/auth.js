import axios from 'axios'

export default {
  
  beforeCreate() {
    axios.get('/api/auth')
      .then(res => {
        const { data } = res
        this.$store.commit('setUser', data.user)
        this.$store.commit('setLoginStatus', data.authenticated)
      })
      .catch(({ response }) => {
        this.$store.commit('setLoginStatus', response.data.authenticated)
        this.$router.push({ path: '/' })
      })
  }
}