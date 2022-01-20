<template>
  <div id="app">
    <hello-world #="{ user, favorites }">
        <p>Hello {{ user.name }}!</p>
        <ul>
            <li
                v-for="(favorite, index) in favorites"
                :key="index"
            >
                {{ favorite }}
            </li>
        </ul>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
