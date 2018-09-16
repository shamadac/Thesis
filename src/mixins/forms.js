export default {

  data: () => ({
    errors: {},
    login: {
      username: '',
      email: '',
      password: ''
    },
    register: {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      usertype: '',
      confirmPassword: '',
      email: '',
      phone: '',
      credentials: [],
      communities: []
    }
  }),

  methods: {
    handleError(err) {
      const errors = {}
      Object.keys(err.response.data.errors).forEach(errorName => {
        errors[errorName] = err.response.data.errors[errorName]
      })
      this.errors = errors
    }
  }
}