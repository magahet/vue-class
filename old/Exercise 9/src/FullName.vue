<template>
  <div>
    <div class="form-group">
      <label>First Name</label>
      <input type="text" maxlength="8" class="form-control" :value="firstName" @input="nameChanged(true, $event)">
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" maxlength="8" class="form-control" :value="lastName" @input="nameChanged(false, $event)">
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    firstName() {
      return this.value.split(' ')[0]
    },
    lastName() {
      return this.value.split(' ')[1]
    },
  },
  methods: {
    nameChanged(isFirst, event) {
      if (isFirst) {
        this.$emit('input', `${event.target.value} ${this.lastName}`)
      } else {
        this.$emit('input', `${this.firstName} ${event.target.value}`)
      }
    }
  }
}
</script>

