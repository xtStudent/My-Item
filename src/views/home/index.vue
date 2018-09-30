<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <h-header></h-header>
      <Content>
        <router-view></router-view>
      </Content>
      <h-footer></h-footer>
    </Layout>
  </div>
</template>

<script>
export default {
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    },
    created () {
    }
};
</script>
