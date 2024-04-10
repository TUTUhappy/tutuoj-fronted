<template>
  <a-row id="globalHeader" class="grid-demo" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectKey"
        @menu-item-click="onClickMenue"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/panada.jpg" />
            <div class="title">tutuOj</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in accessRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>
        {{ store.state.user?.loginUser.userName }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRoute, useRouter } from "vue-router";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";

const store = useStore();
const selectKey = ref(["/"]);
const router = useRouter();
router.afterEach((to, from, failure) => {
  selectKey.value = [to.path];
});

const accessRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (!checkAccess(store.state.user.loginUser, item?.meta?.access)) {
      return false;
    }
    if (item.meta?.hiddenView) {
      return false;
    }
    return true;
  });
});

// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
//     userName: "tutu2",
//     userRole: "admin",
//   });
// }, 3000);

const onClickMenue = (val: string) => {
  router.push({
    path: val,
  });
};
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 48px;
}

.title {
  color: #444;
  margin-left: 14px;
}
</style>
