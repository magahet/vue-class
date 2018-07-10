new Vue({
    el: '#app',
    data: {
        health: {
            player: 100,
            moster: 100,
        },
        inProgress: false,
        turns: [],
    },
    methods: {
        startGame: function() {
            this.inProgress = true
            this.health.player = 100
            this.health.monster = 100
            this.turns = []
        },
        attack: function() {
            var damage = Math.max(3, Math.floor(Math.random() * 10) + 1)
            this.health.monster -= damage
            this.turns.unshift({
                isPlayer: true,
                message: 'Player hits Monster for ' + damage
            })

            if (this.health.monster <= 0) {
                alert('You won!')
                this.inProgress = false
            }

            var damage = Math.max(3, Math.floor(Math.random() * 10) + 1)
            this.health.player -= damage
            this.turns.unshift({
                isPlayer: false,
                message: 'Monster hits Player for ' + damage
            })

            if (this.health.player <= 0) {
                alert('You lost!')
                this.inProgress = false
            }
        },
        specialAttack: function() {
            var damage = Math.max(10, Math.floor(Math.random() * 20) + 1)
            this.health.monster -= damage
            this.turns.unshift({
                isPlayer: true,
                message: 'Player hits Monster for ' + damage
            })

            if (this.health.monster <= 0) {
                alert('You won!')
                this.inProgress = false
            }

            var damage = Math.max(3, Math.floor(Math.random() * 10) + 1)
            this.health.player -= damage
            this.turns.unshift({
                isPlayer: false,
                message: 'Monster hits Player for ' + damage
            })

            if (this.health.player <= 0) {
                alert('You lost!')
                this.inProgress = false
            }
        },
        heal: function() {
            if (this.health.player <= 90) {
                this.health.player += 10
            }

            this.turns.unshift({
                isPlayer: true,
                message: 'Player heals for 10'
            })

            var damage = Math.max(3, Math.floor(Math.random() * 10) + 1)
            this.health.player -= damage
            this.turns.unshift({
                isPlayer: false,
                message: 'Monster hits Player for ' + damage
            })

            if (this.health.player <= 0) {
                alert('You lost!')
                this.inProgress = false
            }
        },
        giveUp: function() {
            this.inProgress = false
        },
    },
  });