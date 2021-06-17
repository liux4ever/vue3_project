<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <!-- <column-list :list="testData"></column-list> -->
    <router-view></router-view>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="emailValue"
          placeholder="请输入邮箱地址"
          type="text"
        >
        </validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <validate-input
          v-model="passwordValue"
          :rules="passwordRules"
          placeholder="请输入密码"
          type="password"
        >
        </validate-input>
      </div>
      <template #submit>
        <span class="btn btn-danger">提交</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import ValidateInput, { RulesProp } from "./components/ValidateInput.vue";
import ValidateForm from "./components/ValidateForm.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  components: { ColumnList, GlobalHeader, ValidateInput, ValidateForm },
  setup() {
    const store = useStore();
    const currentUser = computed(() => store.state.user);
    const emailRules: RulesProp = [
      {
        type: "required",
        message: "电子邮件不能为空",
      },
      {
        type: "email",
        message: "请输入正确的电子邮箱格式",
      },
    ];
    const passwordRules: RulesProp = [
      {
        type: "required",
        message: "密码不能为空",
      },
    ];
    const emailValue = ref("");
    const passwordValue = ref("");
    const onFormSubmit = (result: boolean) => {
      console.log(result);
    };
    return {
      currentUser,
      emailRules,
      emailValue,
      passwordRules,
      passwordValue,
      onFormSubmit,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
