<template>
  <div class="w-[590px] h-[460px] bg-white login z-30">
    <div class="flex justify-between p-10 bg-back-grey">
      <p>{{ $store.commit("login") ? "Войти" : "Создать профиль" }}</p>
      <img
        src="@/assets/img/icon/cancel.svg"
        alt=""
        @click="$store.commit('toggleLog')"
        v-if="!ruleForm.sendCode"
      />
      <p v-else @click="toggleSms">Изменить номер</p>
    </div>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleFormRef"
      class="p-10 font-mono text-xl demo-ruleForm placeholder-grey text-grey"
    >
      <div v-if="!ruleForm.sendCode">
        <el-form-item label="Номер телефона" prop="number" class="mb-6">
          <el-input
            v-model="ruleForm.number"
            class="border"
            v-mask="'998XXXXXXXXX'"
            placeholder="+998 (__) ___ __ __"
          ></el-input>
        </el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleFormRef')"
          class="border"
        >
          {{ login ? "Пароль" : "СМС-код" }}
        </el-button>
        <p></p>
      </div>
      <div v-else>
        <el-form-item :label="$t('phone')" prop="number" class="mb-6">
          <el-input
            v-model="ruleForm.smsCode"
            class="border"
            :placeholder="$t('smsCode')"
          ></el-input>
        </el-form-item>
        <el-button
          type="primary"
          @click="submitForm2('ruleFormRef')"
          class="border"
        >
        Войти
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import loginApi from "@/api/authApi.js";

export default {
  data() {
    return {
      login:false,
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
    toggleSms() {
      this.ruleForm.sendCode = !this.ruleForm.sendCode;
    },
    toggleLogin(){
      this.login=!this.login
    },
    async __SEND_SMS() {
      await loginApi.postSendCode({ phone_number: this.ruleForm.number });
      this.ruleForm.sendCode = true;
    },
    checkNumber(rule, value, callback) {
      if (value === "") callback(new Error(this.$t("enterPhone")));
      else if (value.length < 9) {
        callback(new Error(this.$t("rulePhone")));
      } else {
        callback();
      }
    },
    async submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.ruleForm.sendCode = true;
          await loginApi.postSendCode({
            phone_number: this.ruleForm.number,
          });
        } else {
          return false;
        }
      });
    },
    async submitForm2(formName) {
      this.$refs[formName]?.validate(async (valid) => {
        if (valid) {
          const data = await loginApi.postRegister({
            phone_number: this.ruleForm.number,
            sms_code: this.ruleForm.smsCode,
          });
          localStorage.setItem("token", data?.data?.token);
          this.$store.commit("toggleLog");
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
