const app = Vue.createApp({
  data() {
    return {
      name: 'Gar',
      age: 100,
      url: 'https://picsum.photos/200/300',
    };
  },
  methods: {
    addToAge(years) {
      return this.age + years;
    },
    randomNumber() {
      return Math.random();
    },
  }
});

app.mount('#assignment');

