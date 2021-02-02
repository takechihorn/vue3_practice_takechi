<template>
  <div id="posts">
    <h1>WordPress</h1>
    <div v-show="posts.length !== 0" class="posts">
      <div class="posts-wrapper">
        <article class="post" v-for="post in posts" :key="post.id">
          <p class="post_img">
            <span
              v-if="post.thumb"
              :style="{
                'background-image': 'url(' + post.thumb[0].source_url + ')',
              }"
              class="thumb"
            >
            </span>
            <span v-else class="post_img_none"> no-image </span>
          </p>
          <div class="post_contents-area">
            <div v-if="post.category[0]" class="post_category-list">
              <span
                v-for="category in post.category[0]"
                :key="category.id"
                class="post_category"
              >
                <a :href="category.link">{{ category.name }}</a>
              </span>
            </div>
            <a :href="post.link" class="post_link">
              <h3 class="post_title">{{ post.title }}</h3>
              <div class="post_content sp-none" v-html="post.content"></div>
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      let response = await this.axios.get(
        "https://3naoshi.com/wp-json/wp/v2/posts"
      );
      console.log(response);
      response.data.forEach((elm) => {
        const data = {
          title: elm.title.rendered,
          content: elm.excerpt.rendered,
          link: elm.link,
          category: elm.categories,
          // thumb: elm._embedded["wp:featuredmedia"],
        };
        this.posts.push(data);
      });
    } catch (error) {
      console.log(error);
    }
  },
};
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
