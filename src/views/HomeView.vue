<template>
  <main>
    <BusRoute v-for="(item, index) in busRouteData"
    :key="'item' + index"
    :busLine="item.bus_line"
    :departureLocation="item.departure_location"
    :destinationLocation="item.destination_location"
    :estDepartureTime="item.est_departure"
    >
    </BusRoute>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {
  getDatabase,
  ref as refFirebase,
  onValue
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'
import BusRoute from '../components/BusRoute.vue';
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

function SortDataByTime(data) {
  return data.sort(
    (route1, route2) => (route1.est_departure < route2.est_departure) ? -1 : (route1.est_departure > route2.est_departure) ? 1 : 0);
}
</script>
