const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: '',
      showList: true,
    }
  },

  computed: {
    listAction() { return this.showList ? 'Hide' : 'Show' }
  },

  methods: {
    addTask() {
      this.tasks.push(this.newTask)
    },
  }
})

app.mount('#assignment')