<template>
  <h3>
    <FilterBusToggle name="Red Line" @toggle="(value) => {emitNewValue(value, 'redLine')}"></FilterBusToggle>
    <FilterBusToggle name="Green Line" @toggle="(value) => {emitNewValue(value, 'greenLine')}"></FilterBusToggle>
    <FilterBusDropdown name="Departure Location" :options="locationOptions" @filterChoice="(value) => {emitNewValue(value, 'deptLoc')}"></FilterBusDropdown>
    <FilterBusDropdown name="Destination Location" :options="locationOptions" @filterChoice="(value) => {emitNewValue(value, 'destLoc')}"></FilterBusDropdown>
    <FilterBusDropdown name="Starting Time" :options="timeOptions" @filterChoice="(value) => {emitNewValue(value, 'time')}"></FilterBusDropdown>
  </h3>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import FilterBusDropdown from './FilterBusDropdown.vue'
import FilterBusToggle from './FilterBusToggle.vue'

const emit = defineEmits(['filterChange']);

function emitNewValue(value, identifier) {
  emit('filterChange', {
    identifier,
    value
  })
}

const locationOptions = {
  0: 'Any',
  UV: 'UV',
  Snow: 'Snow',
  Smith: 'Smith',
  Ricks: 'Ricks',
  MC: 'MC',
  Hart: 'Hart',
  Walmart: 'Walmart',
  Broulims: 'Broulims',
  'L-Lot': 'L-Lot'
}

const timeOptions = {
  0: 'Any',
  '08:00': '8:00 am',
  '09:00': '9:00 am',
  '10:00': '10:00 am',
  '11:00': '11:00 am',
  '12:00': '12:00 pm',
  '13:00': '1:00 pm',
  '14:00': '2:00 pm',
  '15:00': '3:00 pm',
  '16:00': '4:00 pm',
  '20:00': '8:00 pm',
  '21:00': '9:00 pm',
  '22:00': '10:00 pm'
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
