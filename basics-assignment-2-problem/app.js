const app = Vue.createApp({
  data() {
    return {
      output1: '',
      output2: ''
    }
  },
  methods: {
    showAlert(msg) {
      alert(msg)
    },
    updateOut1(event) {
      this.output1 = event.target.value
    },
    updateOut2(event) {
      this.output2 = event.target.value
    }
  }
})

app.mount('#assignment')