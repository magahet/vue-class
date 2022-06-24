<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Change Location
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Change Location</span>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Location" required ref="location"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="changeLocation">
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  emits: ['changeLocation'],
  methods: {
    changeLocation() {
      this.$emit('change-location', this.$refs.location.$refs.input.value)
      this.dialog = false
    }
  }
}
</script>

