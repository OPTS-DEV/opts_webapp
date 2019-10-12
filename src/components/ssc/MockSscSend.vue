<template>
  <div>
    <div class="my-title">
      模拟社保代理人接口发送
    </div>
    <el-divider></el-divider>
    <div class="my-content">
      <el-row>
        <el-col :span="4" class="label-control">
          <label>当前模拟省份</label>
        </el-col>

        <el-col :span="4" :offset="1" style="line-height: 40px">
          <span>{{ ssc.currentMockSsc }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="label-control">
          <label>受托系统接收ip</label>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-input v-model="ssc.remoteIp"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="label-control">
          <label>受托系统接收端口</label>
        </el-col>
        <el-col :span="4" :offset="1">
          <el-input v-model="ssc.remotePort"></el-input>
        </el-col>
      </el-row>


      <el-row>
        <el-col :span="4" class="label-control">
          <label>待发送报文</label>
        </el-col>
        <el-col :span="14" :offset="1">
          <el-input
            type="textarea"
            :rows="20"
            placeholder="请输入内容"
            v-model="ssc.socketMsg"></el-input>
        </el-col>
      </el-row>

        <el-row>
          <el-col :span="3" :offset="5">
            <el-button type="primary" @click="send">发送</el-button>
          </el-col>
        </el-row>
    </div>
  </div>

</template>
<script>
  import {getSscTestMsg} from "@/assets/js/api";
  import {getSscInfo} from "@/assets/js/api";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
  import ElAlert from "../../../node_modules/element-ui/packages/alert/src/main.vue";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input.vue";
  import ElCol from "element-ui/packages/col/src/col";
  import ElDivider from "../../../node_modules/element-ui/packages/divider/src/main.vue";

  export default {
    components: {
      ElDivider,
      ElCol,
      ElInput,
      ElAlert,
      ElButton
    },

    name: "MockSscIndex",
    data() {
      return {
        msg: '== 社保发送 ==',
        resMsg: "",
        ssc: {
          currentMockSsc: "安徽省社会保障中心",
          remoteIp: "",
          remotePort: "",
          socketMsg: ""
        }
      }
    },
    mounted: {
      getSscInfo() {
        getSscInfo({}).then(res => {

        })
      }
    },
    methods: {
      getSscMsg() {
        getSscTestMsg({}).then(res => {
          this.resMsg = res;
        })
      },
      send() {


      }
    }
  }
</script>
<style scoped>

  .el-divider--horizontal{
    margin: 8px 0;
  }

  .my-title {
    text-align: left;
    font-size: 24px;
    width: 100%;
    font-weight: 600;
    color: cadetblue;
  }

  .my-content {
    font-size: 16px;
  }

  .label-control {
    text-align: right;
    line-height: 40px;
    font-weight:300;
    color: cadetblue;
  }

  .el-row{
    margin: 6px;
  }
</style>
