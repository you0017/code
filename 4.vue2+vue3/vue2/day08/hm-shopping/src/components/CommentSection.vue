<script lang="ts">
export default ({
  name: 'CommentSection',
  props: {
    targetId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      content: '',
      list: [] as Array<{ id: string, userId: string, content: string, time: number }>
    }
  },
  computed: {
    isLogged (this: any) {
      return !!this.$store.getters.token
    },
    userId (this: any) {
      const info = this.$store.getters['user/getUserInfo']
      return info?.userId || ''
    }
  },
  methods: {
    load (this: any) {
      const raw = localStorage.getItem('comments_' + this.targetId)
      this.list = raw ? JSON.parse(raw) : []
    },
    save (this: any) {
      localStorage.setItem('comments_' + this.targetId, JSON.stringify(this.list))
    },
    async submit (this: any) {
      if (!this.isLogged || !this.userId) {
        this.$router.push('/login')
        return
      }
      const text = (this.content || '').trim()
      if (!text) return
      this.list.unshift({
        id: Date.now().toString(),
        userId: this.userId,
        content: text,
        time: Date.now()
      })
      this.save()
      this.content = ''
    }
  },
  mounted (this: any) {
    this.load()
  }
})
</script>

<template>
  <div class="comment">
    <div class="header">
      <h3>评论区</h3>
      <span class="tip">未登录可查看，登录后可发表评论</span>
    </div>

    <div class="list" v-if="list.length">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="avatar">{{ item.userId ? item.userId.slice(-4) : '游客' }}</div>
        <div class="body">
          <div class="meta">
            <span class="user">用户 {{ item.userId || '未知' }}</span>
            <span class="time">{{ new Date(item.time).toLocaleString() }}</span>
          </div>
          <div class="text">{{ item.content }}</div>
        </div>
      </div>
    </div>
    <van-empty v-else description="还没有评论，来抢沙发吧" />

    <div class="editor">
      <van-field
        v-model="content"
        type="textarea"
        rows="2"
        autosize
        placeholder="说点什么…"
      />
      <van-button type="primary" round block @click="submit">发表评论</van-button>
    </div>
  </div>
</template>

<style scoped>
.comment {
  margin-top: 12px;
  background: #fff;
}
.header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 12px 12px 0;
}
.header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #222;
}
.tip {
  font-size: 12px;
  color: #9aa0a6;
}
.list {
  padding: 8px 12px 0;
}
.item {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #f2f2f2;
}
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ffefe2;
  color: #ff8a3d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-right: 8px;
}
.body {
  flex: 1;
}
.meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #9aa0a6;
}
.text {
  margin-top: 4px;
  font-size: 14px;
  color: #333;
}
.editor {
  padding: 12px;
}
</style>
