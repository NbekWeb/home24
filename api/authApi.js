export default {
    async postSendCode(phone){
        return await $nuxt.$axiosInstance.post("auth/check",phone);
    },
    async postRegister(phone){
        return await $nuxt.$axiosInstance.post("auth/register",phone);
    }
}