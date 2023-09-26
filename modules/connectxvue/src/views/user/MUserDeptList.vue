<template>
  <div class="common-layout">
    <el-container>
      <el-header ref="headerRef" id="header" class="el-header">
        <div class="titleDiv">
          <span class="titleText">部门列表</span>
        </div>
      </el-header>
      <el-main>
        <el-container>
          <el-tabs type="border-card">
            <el-form-item label="用户名" prop="username" class="required label-right-align">
              <el-input type="text" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" class="required label-right-align">
              <el-input type="password" clearable></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="state" class="label-right-align">
              <el-switch></el-switch>
            </el-form-item>
            <el-form-item label="证件号码" prop="idNo" class="required label-right-align">
              <el-input type="text" clearable></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="phoneNum" class="required label-right-align">
              <el-input type="text" clearable></el-input>
            </el-form-item>
          </el-tabs>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MUserDeptList',
};
</script>

<script lang="ts" setup>
import '@/assets/css/common.css';
import './index.scss';
</script>
  
