<!--
 * @Date: 2020-11-23 13:48:14
 * @LastEditors: sam
 * @LastEditTime: 2020-11-27 15:45:20
 * @FilePath: /chart-demo/demo/src/views/Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss"></style>
