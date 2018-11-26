<template>
  <div>
    <headerTop v-show="$route.meta.showFooter"/>
    <router-view />
    <toTop />
    <pageFooter />
  </div>
</template>

<script>
import headerTop from './components/HeaderTop/HeaderTop'
import pageFooter from './components/PageFooter/PageFooter'
import toTop from './components/ToTop/ToTop'
export default {
  components: {
    headerTop,
    toTop,
    pageFooter
  }
}
</script>
