<template>
  <div id="basiclayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/TUTUhappy" tutuOj> tutuOj </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style>
#basiclayout {
}

#basiclayout .header {
  margin-bottom: 16px;
}

#basiclayout .content {
  background: linear-gradient(to right, #bbb, #fff);
  padding: 20px;
}

#basiclayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
}
</style>
<script>
import GlobalHeader from "@/components/GlobalHeader";

export default {
  components: { GlobalHeader },
};
</script>
