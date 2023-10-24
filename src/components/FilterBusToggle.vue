<template>
  <div style="display: flex">
    <div id="nameBox">{{ name }}</div>
    <label class="switch" @change="$emit('toggle', value)">
      <input type="checkbox" v-model="value" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script setup>
import {ref} from 'vue'
defineProps({
  name: String
})
const value = ref(true)
</script>

<style scoped lang="scss">
/* The switch - the box around the slider */
#nameBox {
  font-size: 25px;
  padding: 5px;
  padding-right: 15px;
  margin-top: -7px;
}

.switch {
  margin-left: auto;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #728abf;
}

input:focus + .slider {
  box-shadow: 0 0 1px #728abf;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
