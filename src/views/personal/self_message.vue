<template>
  <div class="contain-all">
    <div class="myself">
      <div class="avatar">
        <img :src="avatar" alt="" />
      </div>
      <div class="name">{{ name }}</div>
    </div>
    <div class="base_message">
      <div class="title">基本信息</div>
      <div class="form">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker
                placeholder="选择时间"
                v-model="form.date2"
                style="width: 100%"
              ></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="hobby">
      <div class="title">兴趣标签</div>
      <div class="form">
        <el-form></el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { Message } from "element-ui";
export default {
  data() {
    return {
      avatar: "",
      name: "李嘉胜",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style lang="scss" scoped>
.contain-all {
  text-align: left;
  .myself {
    background-color: white;
    display: flex;
    padding: 24px 0 40px 24px;
    margin-bottom: 10px;
    .avatar {
      img {
        width: 93px;
        height: 93px;
        border-radius: 50%;
        margin-right: 16px;
      }
    }
    .name {
      flex: 1;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .base_message {
    background-color: white;
    margin-bottom: 10px;
    .title {
      line-height: 48px;
      font-size: 18px;
      font-weight: 600;
      color: #2e2e2e;
      padding-left: 16px;
      border-bottom: 1px solid #f0f0f2;
    }
    .form {
      padding: 32px 74px 32px 16px;
    }
  }
  .hobby {
    background-color: white;
    .title {
      line-height: 48px;
      font-size: 18px;
      font-weight: 600;
      color: #2e2e2e;
      padding-left: 16px;
      border-bottom: 1px solid #f0f0f2;
    }
    .form {
      padding: 32px 74px 32px 16px;
    }
  }
}
</style>
