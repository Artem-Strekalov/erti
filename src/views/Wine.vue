<template>
  <div class="wrapper">
    <div class="container">
      <div class="navigation">
        <a><router-link :to="{ name: 'MainPage' }">ГЛАВНАЯ</router-link></a>
        <a><router-link :to="{ name: 'Menu' }">МЕНЮ</router-link></a>
        <a><router-link :to="{ name: 'Wine' }">ВИНО</router-link></a>
        <a><router-link :to="{ name: 'Сoncept' }">КОНЦЕПЦИЯ</router-link></a>
        <img src="../assets/erti-logo.png" alt="" />
        <a><router-link :to="{ name: 'Foto' }">МЕДИА </router-link></a>
        <a><router-link :to="{ name: 'Events' }">СОБЫТИЯ</router-link></a>
        <a><router-link :to="{ name: 'OurTeam' }">НАША КОМАНДА</router-link></a>
        <a><router-link :to="{ name: 'Contacts' }">КОНТАКТЫ</router-link></a>
      </div>
      <div class="content">
        <div class="block"></div>
        <div class="carusel">
          <div class="slider js-slider">
            <div
              class="slider__body"
              v-bind:style="{ left: sliderOffsetLeft + 'px' }"
            >
              <div
                class="slider__slide js-slide"
                v-for="slide in sliderList"
                v-bind:key="slide.img"
                :style="'background-image: url(' + slide.img + ')'"
              >
                <button v-on:click="prevSlide">
                  <i class="fa fa-chevron-left" aria-hidden="true"></i></button
                ><button v-on:click="nextSlide">
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <span>Нельзя купить счастье, но можно купить вино...</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Всего слайдов
      sliderAllCount: 0,
      // Номер активного слайда
      sliderActive: 1,
      // Отступ тела со слайдами в контейнере
      sliderOffsetLeft: 0,
      // Шаг одного слайда = его длина
      sliderOffsetStep: 0,
      // Список изображений
      sliderList: [
        {
          img: "https://i.ibb.co/rHcWX9D/wine1.png",
        },
      ],
    };
  },

  methods: {
    // Иницилизация слайдера
    initSlider: function () {
      // Получаем элементы сладера и его слайдов
      let sliderBody = this.$el.querySelector(".js-slider");
      let sliderSlidies = sliderBody.querySelectorAll(".js-slide");
      // Записываем длину одного слайда для перелистывания
      this.sliderOffsetStep = sliderBody.clientWidth;
      // Общее количество слайдов для стопов
      this.sliderAllCount = sliderSlidies.length;
    },

    // Открыть слайд по номеру
    openSlide: function (id) {
      if (id > 0 && id <= this.sliderAllCount) {
        this.sliderActive = id;
        // Сдвигаем элемент со слайдами
        this.sliderOffsetLeft = -(
          this.sliderActive * this.sliderOffsetStep -
          this.sliderOffsetStep
        );
      }
    },

    // Следующий слайд
    nextSlide: function () {
      if (this.sliderActive < this.sliderAllCount) {
        this.sliderActive += 1;
        this.openSlide(this.sliderActive);
      }
    },

    // Предыдущий слайд
    prevSlide: function () {
      if (this.sliderActive > 1) {
        this.sliderActive -= 1;
        this.openSlide(this.sliderActive);
      }
    },
  },

  mounted() {
    this.initSlider();

    // Перенастройка слайдера при ресайзе окна
    window.addEventListener("resize", () => {
      this.initSlider();
      this.openSlide(this.sliderActive);
    });
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  background: url("../assets/wine-bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
  .container {
    width: 1280px;
    height: 100vw;
    display: flex;
    flex-direction: column;
    @media (max-width: 1325px) {
      width: 1200px;
    }
    @media (max-width: 1233px) {
      width: 1100px;
    }
    .navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: relative;
      height: 154px;
      width: 100%;
      a {
        font-family: Open Sans;
        font-style: normal;
        font-size: 12px;
        font-weight: bold;
        line-height: 18px;
        color: #ffffff;
        padding: 0 5px;
      }
      img {
        width: 100px;
        height: 100px;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 50px;
      

      .carusel {
        width: 100%;
        height: 500px;
        margin-left: 20%;
        
        .slider {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          &__body {
            min-width: auto;
            height: 100%;
            display: flex;
            position: relative;
            align-items: stretch;
            transition: all 0.5s ease;
          }
          &__slide {
            min-width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            flex: 1 100%;
            display: flex;
            justify-content: space-between;
            i {
              margin-top: 80px;
              font-size: 50px;
              color: white;
              opacity: 0.3;
            }
          }
        }
        span {
          font-family: Caveat;
          font-style: normal;
          font-weight: bold;
          font-size: 30px;
          line-height: 18px;
          color: white;
        }
      }
    }
  }
}
</style>
