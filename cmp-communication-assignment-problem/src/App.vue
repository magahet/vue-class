<template>
  <active-user :username="username" :age="age"></active-user>
  <user-data @update="update"></user-data>
</template>

<script>
export default {
  data() {
    return {
      username: 'User',
      age: 100
    }
  },
  methods: {
    update(username, age) {
      this.username = username
      this.age = age
    }
  }
}
</script>