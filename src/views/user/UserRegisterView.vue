<template>
  <div id="userLoginView">
    <h2 style="margin-bottom: 16px">用户注册</h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      label-align="left"
      auto-label-width
      :model="form"
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item field="userPassword" tooltip="密码不少于 8 位" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item
        field="checkPassword"
        tooltip="当前输入应与上一次一致"
        label="检验密码"
      >
        <a-input-password
          v-model="form.checkPassword"
          placeholder="请再一次输入密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 120px">
          注册
        </a-button>
        <!--        <a style="padding-left: 50px" href="/user/register"-->
        <!--          >如未注册,请先注册</a-->
        <!--        >-->
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { UserControllerService } from "../../../generated";
import message from "@arco-design/web-vue/es/message";

const form = ref({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
});

const router = useRouter();

/**
 * 提交表单
 * @param data
 */
const handleSubmit = async () => {
  const res = await UserControllerService.userRegisterUsingPost(
    form.value.checkPassword,
    form.value.userAccount,
    form.value.userPassword
  );
  // 注册成功，跳转到登陆页
  if (res.code === 0) {
    router.push({
      path: "/user/login",
      replace: true,
    });
  } else {
    message.error("注册失败，" + res.message);
  }
};
</script>

<style scoped></style>
