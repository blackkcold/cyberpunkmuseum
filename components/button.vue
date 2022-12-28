<template>
  <nav class="navbar">
    <ul>
      <li class="exhibition-navitem-desk"><a href="index.html">Exhibition</a></li>
      <li class="search-navitem-desk"><a href="#">Search</a></li>
      <li class="content-navitem-desk"><a href="Content.html">Content</a></li>
      <li class="help-navitem-desk"><a href="Help.html">Help</a></li>
      <li class="about-navitem-desk"><a href="About.html">About</a></li>
    </ul>
  </nav>
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
.navbar {
  margin-right: 30px;

  transition: 1s;
}

.navbar ul {
  display: flex;
  justify-items: right;

  list-style-type: none;

  padding: 0px;

  transition: 1s;
}

.navbar a {
  font-weight: 900;
  font-size: 12px;
  text-decoration: none;
  color: white;

  padding: 10px 20px;
  margin: 0px 20px;

  transition: 1s;
}

.navbar li {
  transition: 1s;
}

.navbar a:hover {
  color: black;

  background-color: #f3ed19;
}

.navbar li:hover {
  -ms-transform: rotate(-15deg);
  /* IE 9 */
  -moz-transform: rotate(-15deg);
  /* Firefox */
  -webkit-transform: rotate(-15deg);
  /* Safari & Chrome */
  -o-transform: rotate(-15deg);
  /* General Usage */
  transform: rotate(-15deg);
}
</style>