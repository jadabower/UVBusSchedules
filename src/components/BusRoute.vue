<template>
  <div :class="busLine" id="element">
    {{ convertTime(estDepartureTime) }} : {{ departureLocation }} → {{ destinationLocation }}
    <div :class="busLine" id="rightItems">
      <h6 id="daysRunning" align="right">{{ StringifyDaysRunning(daysRunning) }}</h6>
      <h6 id="busLine" align="right">{{ StringifyBusLine(busLine) }}</h6>
    </div>
  </div>
</template>

<script setup>
defineProps({
  busLine: String,
  departureLocation: String,
  destinationLocation: String,
  estDepartureTime: String,
  daysRunning: Object
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
  } else if (hour == 12) {
    return `${hour}:${minute} pm`
  }
  return `${hour}:${minute} am`
}

function StringifyBusLine(busLine) {
  return `${busLine} Line`
}

function StringifyDaysRunning(days) {
  if (days == null) {
    return ''
  } else if (days.includes('T')) {
    return 'Tues/Thurs'
  } else if (days.includes('S')) {
    return 'Saturday'
  }
  return ''
}
</script>

<style scoped lang="scss">
.Green {
  background-color: rgb(177, 206, 160);
  color: #728064;
}

.Red {
  background-color: rgb(220, 142, 123);
  color: #845a4e;
}

#element {
  color: white;
  font-weight: bold;
  display: flex;
  margin: 15px auto;
  border-radius: 15px;
  padding: 1em;
  font-size: 20px;
  width: 100%;
}

#rightItems {
  clear: both;
  display: grid;
  grid-template-columns: 1/-1;
  margin-right: -5px;
  margin-left: auto;
  overflow: hidden;
  white-space: nowrap;
}

#daysRunning {
  font-weight: bold;
  margin-bottom: auto;
  margin-top: -5px;
}

#busLine {
  font-weight: bold;
  margin-bottom: -5px;
  margin-top: auto;
}
</style>
