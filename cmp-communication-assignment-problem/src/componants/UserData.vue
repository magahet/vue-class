<template>
  <section>
    <form @submit.prevent="update">
      <div>
        <label>Username</label>
        <input type="text" v-model="username" />
      </div>
      <div>
        <label>Age</label>
        <input type="text" v-model="age" />
      </div>
      <div>
        <button>Update</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: 'oaweijf',
      age: '423',
    }
  },
  methods: {
    update() {
      this.$emit('update', this.username, this.age)
    }
  }
}
</script>