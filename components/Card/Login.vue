<template>
  <div class="w-[590px] h-[460px] bg-white login">
    <div class="flex justify-between p-10 bg-back-grey">
      <p>{{ $t("login") }}</p>
      <img
        src="@/assets/img/icon/cancel.svg"
        alt=""
        @click="$store.commit('toggleLog')"
      />
    </div>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="p-10 font-mono text-xl demo-ruleForm placeholder-grey text-grey"
    >
      <el-form-item :label="$t('phone')" prop="number" class="mb-6">
        <el-input
          v-model="ruleForm.number"
          class="border"
          v-mask="'+998(XX) XXX XX XX'"
          :placeholder="$t('enterPhone')"
        ></el-input>
      </el-form-item>

      <el-button
        type="primary"
        @click="submitForm('ruleForm')"
        class="border"
      >{{ $t("login") }}</el-button>
    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      ruleForm: {
        number: "",
        password: "",
      },
      rules: {
        number: [
         
          { validator: this.checkNumber, trigger: "blur" },
        ],
        password: [
          {
            required: true,
            message: "",
            trigger: "blur",
          },
          { validator: this.checkPassword, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    checkPassword(rule, value, callback) {
      if (value === "") callback(new Error(this.$t("please_enter_password")));
      else if (value.length < 8) {
        callback(new Error(this.$t("rulePhone")));
      } else {
        callback();
      }
    },
    checkNumber(rule, value, callback) {
      if (value === "")
        callback(new Error(this.$t("enterPhone")));
      else if (value.length < 9) {
        callback(new Error(this.$t("rulePhone")));
      } else {
        callback();
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style>
.login .el-input input {
  padding-left: 10px !important;
  width: 100% !important;
}

.login .el-button {
  width: 100% !important;
  background: rgb(255, 126, 0) !important;
  color: #fff !important;
  padding: 16px !important;
  border: none !important;
}
</style>
