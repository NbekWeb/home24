<template>
  <div class="w-[590px] h-[460px] bg-white login z-30">
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
      <el-form-item v-if="ruleForm.sendCode" :label="$t('smsCode')" prop="smsCode" class="mt-2 mb-2">
        <el-input
          v-model="ruleForm.smsCode"
          class="border"
          :placeholder="$t('enterSmsCode')"
        ></el-input>
      </el-form-item>
      <el-button type="primary" @click="__SEND_SMS" class="border">
        {{ $t("sendSms") }}
      </el-button>
      <el-button type="primary" @click="__REGISTER" class="border" v-if="sendCode">
        {{ $t("register") }}
      </el-button>
    </el-form>
  </div>
</template>

<script>
import loginApi from "@/api/authApi.js";
export default {
  data() {
    return {
      ruleForm: {
        number: "",
        smsCode: "",
        sendCode: false,
      },
      rules: {
        number: [{ validator: this.checkNumber, trigger: "blur" }],
        smsCode: [
          {
            required: true,
            message: this.$t("enterSmsCode"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async __SEND_SMS() {
      await loginApi.postSendCode({ phone_number: this.ruleForm.number });
      this.sendCode = true;
    },
    async __REGISTER() {
      await loginApi.postRegister({
        phone_number: this.ruleForm.number,
        sms_code: this.ruleForm.smsCode,
      });
    },
    checkNumber(rule, value, callback) {
      if (value === "") callback(new Error(this.$t("enterPhone")));
      else if (value.length < 9) {
        callback(new Error(this.$t("rulePhone")));
      } else {
        callback();
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // Form is valid, you can perform further actions here
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
