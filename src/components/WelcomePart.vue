<template>
  <div class="main_div">
  <div class="welcome_part">
      <div class="row">
        <div class="col">
          <div class="welcome_part__info">
            <div class="logo">
              <img src="../assets/logo.svg" alt="">
            </div>
            <p>Find the <span>best place to rest</span> while traveling</p>
            <a href="#reg_form" class="link_to_form"><button id="registration_btn"> Registration</button></a>
          </div>
        </div>
      </div>
      <!-- <div class="section_img">
        <img src="../assets/bg-forms/section_1-svg_1.svg" class="section_1_first_img">
        <img src="../assets/bg-forms/section_1-svg_2.svg" class="section_1_second_img">
        <img src="../assets/bg-forms/section_1-svg_3.svg" class="section_1_third_img">
      </div> -->

  </div>
  <div class="parallax" v-parallax="0.5"></div>
  </div>
</template>
<script>
import {$, jQuery} from 'jquery'

export default {
  name: 'WelcomePart',
  components: {
  },
  mounted() {
    jQuery(".link_to_form").on("click", function(e) {
      e.preventDefault();
      var el = $(this).attr('href');
      $('html, body').stop().animate({
        scrollTop: $(el).offset().top - 0
      }, 1000);
    });
  },
  methods: function(){
    $(".link_to_form").on("click", function() { //e
      // e.preventDefault();
      // var el = $(this).attr('href');
      // $('html, body').stop().animate({
      //   scrollTop: $(el).offset().top - 0
      // }, 800);
      $('html, body').animate();
    });
  }
}
</script>
