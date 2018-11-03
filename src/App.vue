<template>
  <div>
    <headerTop v-show="$route.meta.showFooter"/>
    <router-view />
    <pageFooter />
  </div>
</template>

<script>
import headerTop from './components/HeaderTop/HeaderTop'
import pageFooter from './components/PageFooter/PageFooter'
export default {
  components: {
    headerTop,
    pageFooter
  }
}
</script>
