<template>
  <div>
    <div v-if="loading" class="load">
      <img src="../assets/loading.gif" alt />
    </div>
    <div v-else>
      <sidebar />
      <div class="article">
        <div class="articleContent">
          <div class="articleContent1">
            <div class="header">
              <span class="title">
                <span
                  :class="{listSt:(content.good===true || content.top===true),listSty:(content.good!==true && content.top!==true)}"
                >{{content | listStyle}}</span>
                <span>{{content.title}}</span>
              </span>
              <ul>
                <li>•发布于 {{content.create_at | dateTime}}</li>
                <li>•作者 {{content.author.loginname}}</li>
                <li>•{{content.visit_count}} 次浏览</li>
                <li>•来自 {{content | listStyle}}</li>
              </ul>
            </div>
            <div class="content1" v-html="content.content" id="content"></div>
          </div>

          <div class="reply">
            <div class="replyTitle">{{content.replies.length}} 回复</div>
            <div class="replyContent">
              <ul>
                <li v-for="(reply,index) in content.replies">
                  <img :src="reply.author.avatar_url" alt />
                  <span class="naokuotong">
                    <span>
                      <span class="replyname">{{reply.author.loginname}}</span>
                      <span class="replylocal">{{index+1}}楼•{{reply.create_at | dateTime}}</span>
                    </span>
                    <div v-html="reply.content" class="replyha"></div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./sidebar";
export default {
  name: "articleContent",
  data() {
    return {
      content: {},
      loading: true
    };
  },
  components: {
    sidebar
  },
  methods: {
    getArticle() {
      this.axios
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(data => {
          this.loading = false;
          this.content = data.data.data;
        });
    }
  },
  beforeMount() {
    this.getArticle();
  },
  watch:{
    '$route' (to,from){
      console.log(to)
         this.getArticle();
    }
  }
};
</script>

<style>
@import url(../assets/markdown-github.css);
.article {
  margin-right: 305px;
}
.articleContent1 {
  background-color: #fff;
  border-radius: 4px;
}
.header {
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
}
.header .title {
  display: inline-block;
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
  line-height: 130%;
}
.header li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}
.load {
  position: fixed;
  width: 74%;
  text-align: center;
  padding-top: 300px;
}
.listSt {
  padding: 2px 4px;
  background-color: #80bd01;
  color: white;
  font-size: 12px;
  border-radius: 3px;
  margin-right: 4px;
}
.listSty {
  padding: 2px 4px;
  background-color: #e5e5e5;
  color: #999;
  font-size: 12px;
  border-radius: 3px;
  margin-right: 4px;
}
.content1 {
  padding: 0 10px;
}
.reply {
  background-color: #fff;
  margin-top: 15px;
  border-radius: 4px;
}
.replyTitle {
  padding: 10px;
  background-color: #f6f6f6;
  color: #444;
  font-size: 14px;
}
.replyContent ul {
  list-style: none;
}
.replyContent li {
  border-top: 1px solid #e1e1e150;
  padding: 10px;
  padding-bottom: 20px;
  display: flex;
}
.replyContent img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.replyname {
  font-size: 12px;
  font-weight: 700;
  color: #666;
}
.replylocal {
  font-size: 12px;
  color: #08c;
}
.replyha {
  font-size: 14px;
  color: #333;
  margin: 6px 0 0 10px;
}
.naokuotong {
  margin-left: 10px;
}
</style>


