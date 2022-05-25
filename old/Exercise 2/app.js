new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            openAlert() {
                alert('blah')
            },
            updateValue(event) {
                this.value = event.target.value
            }
        }
    });