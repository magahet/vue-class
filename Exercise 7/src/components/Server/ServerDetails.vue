<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!!server">Server #{{ server.id }}, Status: {{ server.status }}
            <button @click="resetStatus">Change to Normal</button>
        </p>
    </div>

</template>

<script>
import { serverBus } from '../../main'

export default {
    data() {
        return {
            server: null,
        }
    },
    methods: {
        resetStatus() {
            this.server.status = 'Normal'
            serverBus.$emit('statusChange', {id: this.server.id, status: 'Normal'})
        }
    },
    created() {
        serverBus.$on('selected', server => this.server = server)
    }
}
</script>

<style>

</style>
