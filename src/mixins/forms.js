import FormErrors from '@/components/FormErrors.vue'

export default {

  components: {
    FormErrors
  },

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
    },
    submission: {
      title: '',
      description: '',
      keywords: '',
      body: '',
      community: ''
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