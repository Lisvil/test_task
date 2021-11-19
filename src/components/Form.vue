<template>
  <div id="form">
    <div class="main">
      <div class=" row ">
        <div class="col">
          <p class="title"><span>Sign Up</span> and find the best place to rest while traveling</p>
          <div class="form"  id="reg_form">
            <form class="" action="index.html" method="post">
              <div>
                <div class="input_container input_1">
                  <img src="../assets/icons/first-name_icon.svg">
                  <input type="text" name="name" value="" placeholder=" " autocomplete="off" v-model="firstName" class="name" id="firt_name">
                  <label for="firt_name">First Name</label>
                </div>
                <p class="error name_error">The name must be more than 2 characters</p>
              </div>
              <div>
                <div class="input_container input_2">
                  <img src="../assets/icons/second-name_icon.svg">
                  <input type="text" name="second_name" value="" placeholder=" " autocomplete="off" v-model="secondName" id="second_name">
                  <label for="second_name">Second Name</label>
                </div>
                <p class="error second_name_error">The second name must be more than 2 characters</p>
              </div>
              <div>
                <div class="input_container input_3">
                  <img src="../assets/icons/country_icon.svg">
                  <select class="" name="country" placeholder="dddd" v-model="phone_code" id="country">
                    <option v-for="(country, index) in country_codes" :key="index" :value="country.dial_code">{{ country.name }}</option>
                  </select>
                  <label for="country" id="country_placeholder">Country</label>
                </div>
                <p class="error country_error">Fill in the field</p>
              </div>
              <div>
                <div class="input_container input_4">
                  <img src="../assets/icons/phone_icon.svg">
                  <input type="tel" name="phone" :value="phone_code" placeholder=" " autocomplete="off" id="phone">
                  <label for="phone" id="phone_placeholder">Phone</label>
                </div>
                <p class="error phone_error">Fill in the field</p>
              </div>
              <div>
                <div class="input_container input_5">
                  <img src="../assets/icons/password_icon.svg">
                  <input type="password" name="password" value="" placeholder=" " v-model="password" id="password">
                  <label for="password">Password</label>
                </div>
                <p class="error pass_error">Password must have 1 letter, 1 number and one symbol</p>
              </div>
              <div>
                <div class="input_container input_6">
                  <img src="../assets/icons/confirm-password_icon.svg">
                  <input type="password" name="confirm_pass" value="" placeholder=" " v-model="confirmPassword" id="confirm_pass">
                  <label for="confirm_pass">Confirm password</label>
                </div>
                <p class="error confirm_pass_error">Password does not match</p>
              </div>
              <div>
                <div class="input_container input_7">
                  <img src="../assets/icons/email_icon.svg">
                  <input type="email" name="email" value="" placeholder=" " autocomplete="off" v-model="email" id="email">
                  <label for="email">Email</label>
                </div>
                <p class="error email_error">Email is not correct</p>
              </div>
              <div class="agreement input_8">
                <input type="checkbox" id="agree" value="" v-model="checkbox">
                <label for="agree" class="agree"></label>
                <label >I agree to the <a href="#">Terms & Conditions</a></label>
              </div>
              <div>
                <button type="button" name="button" @click="checkErrors">Sign Up</button>
              </div>

            </form>
          </div>
          <div class="bottom_text">
            If you have an account, <a href="#">Log In</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countries from '../CountryCodes.js'
import $ from 'jquery'
import ScrollOut from "scroll-out"
export default {
  name: 'Form',
  data() {
    return {
      country_codes: countries,
      phone_code: "",
      firstName: "",
      secondName: "",
      checkbox: "",
      password: "",
      confirmPassword: "",
      email: "",
      flag: true,
    }
  },
  components: {

  },
  updated(){
    console.log(this.phone_code);
    if (this.phone_code != "") {
      $("#country_placeholder").addClass("placeholder_up");
      $("#country").css("background-color", "#00000040");
    } else {
      // $("#country_placeholder").removeClass("placeholder_up");
    }

  },
  mounted(){

      ScrollOut({
        targets: ".input_1",
        once: true
      }),
      ScrollOut({
        targets: ".input_2",
        once: true,
      }),
      ScrollOut({
        targets: ".input_3",
        once: true,
      }),
      ScrollOut({
        targets: ".input_4",
        once: true,
      }),
      ScrollOut({
        targets: ".input_5",
        once: true
      }),
      ScrollOut({
        targets: ".input_6",
        once: true,
      }),
      ScrollOut({
        targets: ".input_7",
        once: true,
      }),
      ScrollOut({
        targets: ".input_8",
        once: true,
      })

  },
  methods: {
    checkErrors() {
      if (this.checkbox == false) {
        $(".agree").addClass("checkbox_error");
        setTimeout(function(){
          $(".agree").removeClass("checkbox_error");
        }, 4000);
      }

      if (this.firstName.length < 2 ) {
        $(".name_error").addClass("error_show");
      }
      if (this.secondName.length < 2 ) {
        $(".second_name_error").addClass("error_show");
      }
      if (this.phone_code == "" ) {
        $(".country_error").addClass("error_show");
        $(".phone_error").addClass("error_show");
      }
      let mediumRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{3,})/;
      if (!this.password.match(mediumRegex)) {
        $(".pass_error").addClass("error_show");
      }
      if (this.confirmPassword != this.password) {
        $(".confirm_pass_error").addClass("error_show");
      }
      let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!this.email.match(validRegex)) {
        $(".email_error").addClass("error_show");
      }
      setTimeout(function(){
        $(".error").removeClass("error_show");
      }, 4000);
    },
  }
}
</script>

<style lang="scss">
</style>
