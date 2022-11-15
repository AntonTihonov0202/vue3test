<template>
  <div v-if="posts.length > 0">
    <h3>Список пользователей</h3>
    <transition-group name="user-list">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: red">Список пользователей пуст</h2>

</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.5s ease;
}
.user-list-enter-form,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.user-list-move {
  transition: transform 0.5s ease;
}
.post {
  padding: 15px;
  border: 3px solid teal;
  margin-top: 15px;
}
</style>