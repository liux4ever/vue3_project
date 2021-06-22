<template>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">登录到知乎</h5>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="emailValue"
          placeholder="请输入邮箱地址"
          type="text"
          ref="inputRef"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          type="password"
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="passwordValue"
        />
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large">
          登录
        </button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import ValidateInput, { RulesProp } from "../components/ValidateInput.vue";
import ValidateForm from "../components/ValidateForm.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { ValidateInput, ValidateForm },
  setup() {
    const router = useRouter();
    const store = useStore();
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
      emailRules,
      passwordRules,
      emailValue,
      passwordValue,
      onFormSubmit,
    };
  },
});
</script>

<style></style>
