<template>
  <div>
    <h1>Counter: {{ counter.n }}</h1>
    <v-btn @click="counter.increment()">+1</v-btn>
  </div>
</template>

<script setup lang="ts">
  const counter = useCounter()
</script>