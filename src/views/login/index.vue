<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="LoginForm"
      :rules="LoginFormRules"
    >
      <el-form-item prop="username">
        <el-input
          v-model="LoginForm.username"
          :placeholder="$t('Login.placeholder.username')"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="LoginForm.password"
          :placeholder="$t('Login.placeholder.password')"
          name="password"
          type="text"
          tabindex="2"
          autocomplete="on"
          show-password
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleLogin"
        >
          {{ $t('Login.text.login') }}
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
          callback(new Error(vm.$t('Login.prompt.usernameLength')));
        } else if (!match(val, usernameRegExp)) {
          callback(new Error(vm.$t('Login.prompt.usernameFormat')));
        } else {
          callback()
        }
      },
      password(rule, val, callback) {
        if (val.length < 8 || val.trim().length > 30) {
          callback(new Error(vm.$t('Login.prompt.passwordLength')));
        } else if (!match(val, passwordRegExp)) {
          callback(new Error(vm.$t('Login.prompt.passwordFormat')));
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
    }
  },
  computed: {
    nextQuery() {
      return this.$delete(this.$route.query, 'next')
    },
    next() {
      return this.$route.query.next || '/'
    },
  },
  methods: {
    handleLogin() {
      encrypto(this.LoginForm.password)
        .then(encryptedPassword => {
          let params = {
            username: this.LoginForm.username,
            password: encryptedPassword,
          }

          this.$store.dispatch('user/login', params)
            .then(() => {

              // this.$router.push({

              //   path: this.next,
              //   query: this.nextQuery,
              // })
              this.$router.push('/')
            })
            .catch(err => { throw new Error(err) })
        })
        .catch(err => { throw new Error(err) })
    },
  },
}
</script>
