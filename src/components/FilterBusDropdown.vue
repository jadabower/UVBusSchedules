<template>
  <p style="display: flex">
    <div class="name">{{ name }}</div>
    <select :id="name" v-model="value" @change="$emit('filterChoice', value)">
      <option v-for="(option, index) in options" :key="'option' + index" :value="index">
        {{ option }}
      </option>
    </select>
  </p>
</template>

<script setup>
import {ref} from 'vue'
defineProps({
  options: Object,
  name: String
})

const value = ref(0)
</script>

<style scoped lang="scss">
.name {
  margin-right: 10px;
}

p {
  font-size: 25px;
  padding: 5px;
  margin-top: -7px;
}

/* Reset default select styles */
select {
  margin-left: auto;
  border: none;
  outline: none;
  padding: 4px;
  font-size: 20px;
  border-radius: 5px;
}

/* Style the container div */
.apple-dropdown {
  position: relative;
  width: 200px;
  background: white;
  border-radius: 5px;
}

/* Style the options */
select option {
  background: white;
}
</style>
