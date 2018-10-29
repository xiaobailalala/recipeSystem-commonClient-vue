<template>
  <div>
    <headerTop v-show="$route.meta.showFooter"/>
    <router-view />
  </div>
</template>

<script>
import headerTop from './components/HeaderTop/HeaderTop'

export default {
  components: {
    headerTop
  }
}
</script>
