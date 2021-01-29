<template>
  <div class="content">
    <button @click="dialog = true">Открой</button>
    <v-app>
      <v-dialog
        colo
        overlay-color="black"
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="headline">Ваше бронирование</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    color="#e8c300"
                    label="Ваше имя*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    color="#e8c300"
                    label="Ваша Фамилия"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    color="#e8c300"
                    label="Ваш номер телефона*"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select
                    color="#e8c300"
                    :items="[
                      '1',
                      '2',
                      '3',
                      '4',
                      '5',
                      '6',
                      '7',
                      '8',
                      '9',
                      '10+',
                    ]"
                    label="Количество гостей*"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6"> </v-col>
              </v-row>
            </v-container>
            <small style="color: red">*Поля обязательные к заполнению</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Закрыть
            </v-btn>
            <v-btn color="red" text @click="dialog = false">
              Забронировать
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
<style lang="scss" >
</style>