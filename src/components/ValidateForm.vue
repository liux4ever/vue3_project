<template>
  <form class="validate-form-container">
    <slot></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import mitt from "mitt";
type validateFunc = () => boolean;
export const emitter = mitt();
export default defineComponent({
  emits: ["form-submit"],
  setup(props, context) {
    let funcArr: validateFunc[] = [];
    // 循环执行数组 得到最后的验证结果
    const submitForm = () => {
      const result = funcArr.map((func) => func()).every((result) => result);
      context.emit("form-submit", result);
    };
    const callback = (func?: any) => {
      if (func) {
        funcArr.push(func);
      }
    };
    // 添加监听
    emitter.on("form-item-created", callback);
    onUnmounted(() => {
      emitter.off("form-item-created", callback);
      funcArr = [];
    });
    return { submitForm };
  },
});
</script>

<style></style>
