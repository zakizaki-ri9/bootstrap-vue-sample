<template lang="pug">
  div
    hr
    b-btn(
      v-b-modal.modal1
    )
      | Launch demo modal
    //-  Modal Component
    b-modal#modal1(
      title="Bootstrap-Vue"
    )
      p.my-4 Hello from modal!
    hr
</template>

<script>
export default {
  name: 'BootStrapSample'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
