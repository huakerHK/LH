<template>
    <div class="editor">
        <div id="div1">

        </div>
    </div>
</template>

<script>
import wangEditor from 'wangeditor'
export default {
    props:['content'],
    data(){
        return{
            editor:null,
            editorData:'',
        }
    },
    mounted(){
        const editor = new wangEditor('#div1');
        editor.config.onchange = (newHtml) => {
            this.editorData = newHtml;
        }
        editor.create();
        editor.txt.html(this.content)
        this.editor = editor
    },
    methods: {
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy()
    this.editor = null
  },
  created(){
      console.log(this.content)
  }
}
</script>