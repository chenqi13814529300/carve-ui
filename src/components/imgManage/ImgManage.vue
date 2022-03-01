<template>
  <div style="width: 100%">
    <div class="img_list">
      <div v-for="(item, index) in imgList" :key="index">
        <img :src="item.imgUrl" alt="" />
        <el-button
          class="del"
          @click="delImg(item)"
          size="mini"
          type="primary"
          plain
          >删除</el-button
        >
      </div>
    </div>
    <el-upload
      class="upload-demo"
      action="api/img/upload"
      drag
      multiple
      :auto-upload="false"
      :data="{ typeId: cTypeId }"
      ref="upload"
      :on-success="handleAvatarSuccess"
      :headers="{
        token:token
      }"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <el-button
      style="margin-left: 10px"
      size="small"
      type="success"
      @click="submitUpload"
      >上传到服务器</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [],
      token: this.getToken(),
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    };
  
  },
props:{
  cTypeId:{
    type:Number,
    default:4
  }
},

  methods: {
    showMsg(result) {
      if (result.status === 200) {
        const data = result.data;
        if (data.status === 200) {
          this.$message({
            showClose: true,
            message: data.msg,
            type: "success",
            duration: "600",
          });
        } else {
          this.$message({
            showClose: true,
            message: data.msg,
            type: "error",
            duration: "3000",
          });
        }
      } else {
        this.$message({
          showClose: true,
          message: "操作失败，请联系管理员",
          type: "error",
          duration: "3000",
        });
      }
    },
    getImg() {
      this.$API.manage
        .getImg(this.cTypeId, this.token)
        .then((res) => {
          if (res.data.status !== 200) {
            this.showMsg(res);
          } else {
            this.imgList = res.data.list;
          }
        });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    delImg(item) {
      this.$API.manage.delImg(item.imgId, this.token).then((res) => {
        this.showMsg(res);
        if (res.data.status == 200) {
          this.getImg();
        }
      });
    },

    handleAvatarSuccess(res, file) {
      this.getImg();
    },
  },
  mounted() {
    this.getImg();
  },
};
</script>

<style lang="less" scoped>
.img_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  div {
    width: 23%;
    height: auto;
    margin: 1%;
    position: relative;
    .del {
      position: absolute;
      right: -1px;
      top: -1px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>