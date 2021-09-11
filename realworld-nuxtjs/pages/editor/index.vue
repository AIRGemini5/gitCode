<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="文章标题"
                />
              </fieldset>

              <fieldset class="form-group">
                <input
                  v-model="article.description"
                  type="text"
                  class="form-control"
                  placeholder="这篇文章是关于什么的？"
                />
              </fieldset>

              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  rows="8"
                  placeholder="文章内容"
                ></textarea>
              </fieldset>

              <fieldset class="form-group">
                <input
                  v-model="article.tagList"
                  type="text"
                  class="form-control"
                  placeholder="标签"
                />
                <div class="tag-list"></div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="createArticle"
              >
                发布文章
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addCreateArticle } from "@/api/article";
export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: "authenticated",
  name: "EditorIndex",

  props: {},
  components: {},
  data() {
    return {
      article: {
        title: "hha",
        description: "lalla",
        body: "kakakka",
        tagList: ["reactjs", "angularjs", "dragons"],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async createArticle() {
      try {
        console.log(this.article);
         let obj = JSON.stringify(this.article)
         let p = JSON.parse(obj)
         console.log(obj,p)
        const { data } = await addCreateArticle({ article: p });
        console.log("data", data);
        //  this.$router.push("/");
      } catch(err) {
        console.log(err)
      }
    },
  },
};
</script>

<style scoped lang="less">
</style>
