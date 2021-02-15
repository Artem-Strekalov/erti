<template>
  <div class="body">
    <div class="content">
      <div class="navigation">
        <a><router-link :to="{ name: 'MainPage' }">ГЛАВНАЯ</router-link></a>
        <a><router-link :to="{ name: 'Menu' }">МЕНЮ</router-link></a>
        <a><router-link :to="{ name: 'Wine' }">ВИНО</router-link></a>
        <a><router-link :to="{ name: 'Сoncept' }">КОНЦЕПЦИЯ</router-link></a>
        <span><img src="../assets/erti-logo.png" alt="" /></span>
        <a><router-link :to="{ name: 'Foto' }">МЕДИА </router-link></a>
        <a><router-link :to="{ name: 'Events' }">СОБЫТИЯ</router-link></a>
        <a><router-link :to="{ name: 'OurTeam' }">КОМАНДА</router-link></a>
        <a><router-link :to="{ name: 'Contacts' }">КОНТАКТЫ</router-link></a>
      </div>
      <div class="events">
        <div class="eventsOne">
          <div class="text">
            <h2>Гастроужин в Эрти!</h2>
            <p>
              «Гастроужин – это культура потребления вин и блюд, которые
              идеально сочетаются между собой» - мы полностью поддерживаем это
              утверждение! 29 ноября в ресторане ERTI прошёл гастро-ужин с одним
              из самых лучших винных экспертов - Сандро Хатиашвили. ⠀ Покажем
              вам атмосферу с нашего гастрономического вечера. Пообещайте себе
              побывать на следующем — а мы постараемся, чтобы это желание
              сбылось как можно скорее.
            </p>
          </div>
          <div class="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Xi_oZgF7oGo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang='scss' scoped>
.body {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2000px;
  background: #e7e7e7;

  .content {
    display: flex;
    flex-direction: column;

    max-width: 1300px;
    width: 100%;
    height: 100%;
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
        color: #333333;
        padding: 0 5px;
      }

      img {
        width: 100px;
        height: 100px;
      }
    }
    .events {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 0 5px;
      .eventsOne {
        display: flex;
        align-items: center;
       
        width: 100%;
        height: 400px;
        background: #fffff2;
        border-radius: 20px;
        .text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 30px;
          h2 {
            font-family: Caveat;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 18px;
          }
          p {
            text-align: center;
            font-family: Oswald;
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 20px;
          }
        }
        .video{
          padding-right: 30px;
        }
      }
    }
  }
}
</style>