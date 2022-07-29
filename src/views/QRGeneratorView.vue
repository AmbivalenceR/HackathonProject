<template>
  <form>
    <input type="text" v-model="QRValue">
  </form>
  <qrcode-vue v-if="QRValue" :value="QRValue" :size="300" level="H"/>
</template>

<script>
// import QrcodeVue from 'qrcode.vue'

// export default {
//   data(){
//     return{
//       QRValue: null,
//     }
//   },
//  components: {
//   QrcodeVue
//  }
// }
</script>
