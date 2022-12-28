<template>
    <button class="btn" :style="{color:color}">
      <slot/> <!-- 插槽 -->
    </button>
  </template>
  
  <script>
  export default {
    // 传入子组件的参数写到props
    props: {
      color: {
        type: String, // 颜色参数类型
        default: "#000"  // 默认黑色
      }
    }
  }
  </script>
  
  <style scoped>
    .btn {
      width: 200px;
      height: 200px;
      border-radius: 10px;
      border: none;
      font-size: 15px;
    }
  </style>