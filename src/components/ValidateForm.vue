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

<script lang='ts'>
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
      const resultArr = funcArr.map((func) => {
        func();
      });
      console.log(resultArr);
      const result = resultArr.every((item) => {
        item;
      });
      context.emit("form-submit", result);
    };
    const callback = (func: any) => {
      funcArr.push(func);
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

<style>
</style>