<template>
  <div :class="busLine" id="element">
    {{ convertTime(estDepartureTime) }} : {{ departureLocation }} -> {{ destinationLocation }}
    <h6 :class="busLine" id="busLine" align="right">{{ StringifyBusLine(busLine) }}</h6>
  </div>
</template>

<script setup>
defineProps({
  busLine: String,
  departureLocation: String,
  destinationLocation: String,
  estDepartureTime: String
})

function convertTime(time) {
  // Converts from 24-hour clock to 12-hour clock
  var partsArray = time.split(':')
  var hour = parseInt(partsArray[0])
  var minute = partsArray[1]
  if (time.length > 5) {
    return 'ERROR'
  }
  if (hour > 12) {
    hour -= 12
    var newTime = `${hour}:${minute} pm`
    return newTime
  }
  return `${hour}:${minute} am`
}

function StringifyBusLine(busLine) {
  return `${busLine} Line`
}
</script>

<style scoped>
.Green {
  background-color: rgb(177, 206, 160);
  color: #889a78;
}

.Red {
  background-color: rgb(220, 142, 123);
  color: #9e6b5d;
}

#element {
  color: white;
  display: flex;
  margin: 15px auto;
  border-radius: 15px;
  padding: 1em;
  font-size: 20px;
  width: 25vw;
}

#busLine {
  display: inline;
  margin-right: -5px;
  margin-bottom: -5px;
  margin-left: auto;
  margin-top: auto;
}
</style>
