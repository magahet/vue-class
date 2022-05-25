<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <server :id="server.id" :status="server.status" v-for="server in servers"
          :key="server.id"></server>
    </ul>
  </div>
</template>

<script>
import Server from './Server.vue'
import { serverBus } from '../../main.js'

export default {
  components: {
    Server,
  },
  data() {
    return {
      servers: [
        {id: 1, status: 'Normal'},
        {id: 2, status: 'Critical'},
        {id: 3, status: 'Unknown'},
        {id: 4, status: 'Normal'},
      ]
    }
  },
  methods: {
    updateStatus(id, status) {
      let index = this.servers.findIndex(s => s.id == id)
      this.servers[index].status = status
    }
  },
  created() {
    serverBus.$on('statusChange', server => this.updateStatus(server.id, server.status))
  }
}
</script>

<style>

</style>
