<template>
  <main>
    <FilterSection @filterChange="updateFilters"></FilterSection>
    <p>* Shuttle does not run during devotionals</p>
    <div class="busRoutes">
      <BusRoute
        v-for="(item, index) in dynamicBusRouteData"
        :key="'item' + index"
        :busLine="item.bus_line"
        :departureLocation="item.departure_location"
        :destinationLocation="item.destination_location"
        :estDepartureTime="item.est_departure"
        :daysRunning="item.days_running"
      >
      </BusRoute>
    </div>
  </main>
</template>

<script setup>
import FilterSection from '../components/FiltersSection.vue'
import { onMounted, ref, computed } from 'vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {
  getDatabase,
  ref as refFirebase,
  onValue
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'
import BusRoute from '../components/BusRoute.vue'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBhbhKSz1__TyjFUNfNeq_fI2eTUdZHdhc',
  authDomain: 'uvbusschedule.firebaseapp.com',
  databaseURL: 'https://uvbusschedule-default-rtdb.firebaseio.com',
  projectId: 'uvbusschedule',
  storageBucket: 'uvbusschedule.appspot.com',
  messagingSenderId: '814383885380',
  appId: '1:814383885380:web:523d152bd4860437e1a011'
}

const filterList = ref({
  redLine: true,
  greenLine: true,
  deptLoc: 0,
  destLoc: 0,
  time: 0
})

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getDatabase()
const busRouteRef = refFirebase(db, 'BusRoutes/')

const busRouteData = ref([])

onMounted(() => {
  onValue(busRouteRef, (snapshot) => {
    const data = snapshot.val()
    busRouteData.value = SortDataByTime([...data])
  })
})

function updateFilters(filterInformation) {
  filterList.value[filterInformation.identifier] = filterInformation.value
}

function SortDataByTime(data) {
  return data.sort((route1, route2) =>
    route1.est_departure < route2.est_departure
      ? -1
      : route1.est_departure > route2.est_departure
      ? 1
      : 0
  )
}

function getBusRoutes() {
  // debugger
  let filteredSoFar = busRouteData.value
  // filter by redLine
  if (!filterList.value.redLine) {
    filteredSoFar = filteredSoFar.filter((value) => {
      console.log(value.busLine != 'Red')
      console.log(value)
      return value.bus_line != 'Red'
    })
  }
  // filter by greenLine
  if (!filterList.value.greenLine) {
    filteredSoFar = filteredSoFar.filter((value) => {
      return value.bus_line != 'Green'
    })
  }
  // filter by deptLoc
  console.log(filterList.value.deptLoc)
  if (filterList.value.deptLoc != 0) {
    filteredSoFar = filteredSoFar.filter((value) => {
      return value.departure_location == filterList.value.deptLoc
    })
  }
  // filter by destLoc
  if (filterList.value.destLoc != 0) {
    filteredSoFar = filteredSoFar.filter((value) => {
      return value.destination_location == filterList.value.destLoc
    })
  }
  // filter by time
  if (filterList.value.time != 0) {
    filteredSoFar = filteredSoFar.filter((value) => {
      return value.est_departure >= filterList.value.time
    })
  }
  return filteredSoFar
}

const dynamicBusRouteData = computed(getBusRoutes)
</script>

<style scoped>

@media (min-width: 1024px) {
  .busRoutes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
}
</style>
