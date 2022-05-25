new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true,
    },
    class1: 'foo',
    class2: 'bar',
    class3: '',
    class4a: '',
    class4bEnabled: '',
    classes5: '',
    progress: 0,
  },
  computed: {
    progressClass() {
      return {
        margin: '1rem',
        height: '1rem',
        border: '1px solid',
        'background-color': 'blue',
        width: this.progress + 'rem'
      }
    }
  },
  methods: {
    startEffect() {
      let vm = this
      setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 2000)
    },
    startProgress() {
      let vm = this
      setInterval(function() {
        vm.progress += 1
      }, 2000)
    },
  },
});
