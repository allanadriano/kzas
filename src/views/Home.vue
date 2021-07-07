<template>
  <section class="home">
    <aside>
      <div class="content">
        <img class="logo" src="../assets/img/logo.svg" alt="Logo do site">

        <h1 class="title text--uppercase">Conheça nossa nova <span>Plataforma</span></h1>

        <p>
          Que Tal continuar ganhando dinheiro sem vender nada, 
          e ainda de quebra conquistar prêmios exclusivos no nosso raking de kzadores?
        </p>

        <p>Confira a lista dos Kzadores! <router-link to="/users">Acesse</router-link></p>
      </div>

      <img class="art" src="../assets/img/kzadors.svg" alt="">

    </aside>

    <div class="content-form">
      <router-link class="route" to="/users" >
        <img src="../assets/img/people.svg" alt="Acesso à lista de Kzadores">
        <span>Kzadores</span>
      </router-link>
      <h2 class="title">Registre-se no novo Kzas</h2>
      <p>Caso possuir uma conta antiga, ela será vinculada ao seu novo perfil e seus pontos serão mantidos ;)</p>
      <KForm />
    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KForm from '@/components/Form.vue';

export default defineComponent({
  name: 'Home',
  components: { KForm }
});
</script>
