new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result() {
                if (this.value == 37) {
                    return 'done'
                } else {
                    return 'not there yet'
                }
            },
        },
        watch: {
            result: function() {
                var vm = this
                setTimeout(function() {
                    vm.value = 0
                }, 5000)
            }
        }
    });