<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
                    <el-col :span="12">
           <el-form-item v-if="flag=='renshi'"  label='人事姓名' prop="renshiName">
               <el-input v-model="ruleForm.renshiName"  placeholder='人事姓名' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='renshi'"  label='人事手机号' prop="renshiPhone">
               <el-input v-model="ruleForm.renshiPhone"  placeholder='人事手机号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='renshi'"  label='人事身份证号' prop="renshiIdNumber">
               <el-input v-model="ruleForm.renshiIdNumber"  placeholder='人事身份证号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='renshi'" label='人事头像' prop="renshiPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.renshiPhoto?ruleForm.renshiPhoto:''"
                         @change="renshiPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='renshi'"  label='电子邮箱' prop="renshiEmail">
               <el-input v-model="ruleForm.renshiEmail"  placeholder='电子邮箱' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='员工姓名' prop="yuangongName">
               <el-input v-model="ruleForm.yuangongName"  placeholder='员工姓名' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='员工手机号' prop="yuangongPhone">
               <el-input v-model="ruleForm.yuangongPhone"  placeholder='员工手机号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='员工身份证号' prop="yuangongIdNumber">
               <el-input v-model="ruleForm.yuangongIdNumber"  placeholder='员工身份证号' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-col :span="12">
             <el-form-item v-if="flag=='yuangong'" label='员工头像' prop="yuangongPhoto">
                 <file-upload
                         tip="点击上传照片"
                         action="file/upload"
                         :limit="3"
                         :multiple="true"
                         :fileUrls="ruleForm.yuangongPhoto?ruleForm.yuangongPhoto:''"
                         @change="yuangongPhotoUploadChange"
                 ></file-upload>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='yuangong'"  label='部门' prop="bumenTypes">
                 <el-select v-model="ruleForm.bumenTypes" disabled  placeholder='请选择部门'>
                     <el-option
                             v-for="(item,index) in bumenTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
             <el-form-item v-if="flag=='yuangong'"  label='职位' prop="zhiweiTypes">
                 <el-select v-model="ruleForm.zhiweiTypes" disabled placeholder='请选择职位'>
                     <el-option
                             v-for="(item,index) in zhiweiTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="12">
           <el-form-item v-if="flag=='yuangong'"  label='电子邮箱' prop="yuangongEmail">
               <el-input v-model="ruleForm.yuangongEmail"  placeholder='电子邮箱' clearable></el-input>
           </el-form-item>
         </el-col>

         <el-form-item v-if="flag=='users'" label="用户名" prop="username">
             <el-input v-model="ruleForm.username"
                       placeholder="用户名"></el-input>
         </el-form-item>
         <el-col :span="12">
             <el-form-item v-if="flag!='users'"  label="性别" prop="sexTypes">
                 <el-select v-model="ruleForm.sexTypes" placeholder="请选择性别">
                     <el-option
                             v-for="(item,index) in sexTypesOptions"
                             v-bind:key="item.codeIndex"
                             :label="item.indexName"
                             :value="item.codeIndex">
                     </el-option>
                 </el-select>
             </el-form-item>
         </el-col>
         <el-col :span="24">
             <el-form-item>
                 <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
             </el-form-item>
         </el-col>
     </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      sexTypesOptions : [],
     bumenTypesOptions : [],
     zhiweiTypesOptions : [],
    };
  },
  mounted() {
    //获取当前登录用户的信息
    var table = this.$storage.get("sessionTable");
    this.sessionTable = this.$storage.get("sessionTable");
    this.role = this.$storage.get("role");
    if (this.role != "管理员"){
    }

    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
      this.$http({
          url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
          method: "get"
      }).then(({ data }) => {
          if (data && data.code === 0) {
          this.sexTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
  });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=bumen_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.bumenTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
   this.$http({
       url: `dictionary/page?page=1&limit=100&sort=&order=&dicCode=zhiwei_types`,
       method: "get"
   }).then(({ data }) => {
       if (data && data.code === 0) {
          this.zhiweiTypesOptions = data.data.list;
      } else {
          this.$message.error(data.msg);
      }
    });
  },
  methods: {
    renshiPhotoUploadChange(fileUrls) {
        this.ruleForm.renshiPhoto = fileUrls;
    },
    yuangongPhotoUploadChange(fileUrls) {
        this.ruleForm.yuangongPhoto = fileUrls;
    },

    onUpdateHandler() {
                         if((!this.ruleForm.renshiName)&& 'renshi'==this.flag){
                             this.$message.error('人事姓名不能为空');
                             return
                         }

                             if( 'renshi' ==this.flag && this.ruleForm.renshiPhone&&(!isMobile(this.ruleForm.renshiPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.renshiIdNumber)&& 'renshi'==this.flag){
                             this.$message.error('人事身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.renshiPhoto)&& 'renshi'==this.flag){
                             this.$message.error('人事头像不能为空');
                             return
                         }

                             if( 'renshi' ==this.flag && this.ruleForm.renshiEmail&&(!isEmail(this.ruleForm.renshiEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
                         if((!this.ruleForm.yuangongName)&& 'yuangong'==this.flag){
                             this.$message.error('员工姓名不能为空');
                             return
                         }

                             if( 'yuangong' ==this.flag && this.ruleForm.yuangongPhone&&(!isMobile(this.ruleForm.yuangongPhone))){
                                 this.$message.error(`手机应输入手机格式`);
                                 return
                             }
                         if((!this.ruleForm.yuangongIdNumber)&& 'yuangong'==this.flag){
                             this.$message.error('员工身份证号不能为空');
                             return
                         }

                         if((!this.ruleForm.yuangongPhoto)&& 'yuangong'==this.flag){
                             this.$message.error('员工头像不能为空');
                             return
                         }

                         if((!this.ruleForm.bumenTypes)&& 'yuangong'==this.flag){
                             this.$message.error('部门不能为空');
                             return
                         }

                         if((!this.ruleForm.zhiweiTypes)&& 'yuangong'==this.flag){
                             this.$message.error('职位不能为空');
                             return
                         }

                             if( 'yuangong' ==this.flag && this.ruleForm.yuangongEmail&&(!isEmail(this.ruleForm.yuangongEmail))){
                                 this.$message.error(`邮箱应输入邮箱格式`);
                                 return
                             }
        if((!this.ruleForm.sexTypes) && this.flag!='users'){
            this.$message.error('性别不能为空');
            return
        }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
        this.$message.error(`用户名不能为空`);
        return	
      }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
