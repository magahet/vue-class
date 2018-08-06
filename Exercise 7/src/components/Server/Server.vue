<template>
  <li class="list-group-item" @click="onClick" style="cursor: pointer">
    Server #{{ id }}
  </li>
</template>

<script>
import { serverBus } from '../../main.js'

export default {
  props: ['id', 'status'],
  methods: {
    onClick() {
      serverBus.$emit('selected', {id: this.id, status: this.status})
    }
  }
}
</script>

