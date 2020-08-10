<template>
  <div class="login">
    <el-form
      ref="loginForm"
      class="login_form"
      :model="LoginForm"
      :rules="LoginFormRules"
    >
      <el-form-item prop="username">
        <el-input
          v-model="LoginForm.username"
          :placeholder="$t('login.placeholder.username')"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item
        prop="password"
      >
        <el-input
          v-model="LoginForm.password"
          :placeholder="$t('login.placeholder.password')"
          name="password"
          type="text"
          tabindex="2"
          autocomplete="on"
          show-password
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>
      <el-form-item class="form-item__submit">
        <el-button
          type="primary"
          :disabled="disabled"
          @click="handleLogin"
        >
          {{ $t('login.text.login') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>>
<script>
import {
  match,
} from '@/unit/validate'
import {
  usernameRegExp, passwordRegExp,
} from '@/unit/regexp'
import {
  encrypto,
} from '@/unit/crypto'
export default {
  name: 'Login',
  data() {
    let vm = this

    let validate = {
      username(rule, val, callback) {
        if (val.length < 3 || val.trim().length > 15) {
          callback(new Error(vm.$t('login.prompt.usernameLength')));
        } else if (!match(val, usernameRegExp)) {
          callback(new Error(vm.$t('login.prompt.usernameFormat')));
        } else {
          callback()
        }
      },
      password(rule, val, callback) {
        if (val.length < 8 || val.trim().length > 30) {
          callback(new Error(vm.$t('login.prompt.passwordLength')));
        } else if (!match(val, passwordRegExp)) {
          callback(new Error(vm.$t('login.prompt.passwordFormat')));
        } else {
          callback()
        }
      },
    }

    return {
      LoginForm: {
        username: 'luoschenfeng',
        password: '1@abcABC',
      },
      LoginFormRules: {
        username: {
          validator: validate.username,
          trigger: 'blur',
        },
        password: {
          validator: validate.password,
          trigger: 'blur',
        },
      },
      loading: false,
      disabled: false,
    }
  },
  computed: {
    next() {
      return this.$route.query.next || '/'
    },
  },
  methods: {
    handleLogin() {
      this.disabled = true
      encrypto(this.LoginForm.password)
        .then(encryptedPassword => {
          let params = {
            username: this.LoginForm.username,
            password: encryptedPassword,
          }

          this.$store.dispatch('user/login', params)
            .then(() => {
              this.disabled = false
              this.$router.push(this.next)
            })
            .catch(err => {
              this.disabled = false
              throw new Error(err)
            })
        })
        .catch(err => {
          this.disabled = false
          throw new Error(err)
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.login {
  height: 100%;
  text-align: center;
  background: $login-background-color url($login-background-image);
  @include utils-vertical-center;
  &_form {
    display: inline-block;
    vertical-align: middle;
    .form-item__submit::v-deep {
      margin-bottom: 0;
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
