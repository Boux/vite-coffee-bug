<script lang='coffee'>
import { ref } from 'vue'

export default
  data: -> { count: ref(0) }
</script>

<template>
  <div>
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>

</style>
