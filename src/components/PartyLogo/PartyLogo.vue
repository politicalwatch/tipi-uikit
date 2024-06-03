<template>
  <div class="c-party_logo__container">
    <img v-if="logoSrc" class="c-party_logo__image" :src="logoSrc" :alt="'Logo de ' + party" />
  </div>
</template>

<script setup>
import { ref, toRefs, watchEffect } from 'vue';
const props = defineProps({
  party: { type: String },
});
const { party } = toRefs(props);

const logos = {
  Vox: 'vox.png',
  '¡Teruel Existe!': 'teruelexiste.svg',
  UPN: 'upn.jpg',
  UP: 'unidaspodemos.png',
  'PsdeG-PSOE': 'psoe.png',
  PSOE: 'psoe.png',
  'PSE-EE-PSOE': 'pse-ee.png',
  'PSC-PSOE': 'psc.png',
  PRC: 'prc.png',
  'PP - FORO': 'pp.png',
  PP: 'pp.png',
  PDeCAT: 'pdecat.png',
  'NC-CCa-PNC': 'nueva_canarias.png',
  'MÉS COMPROMÍS': 'compromis.jpg',
  'MÁS PAÍS-EQUO': 'mas-pais.jpg',
  'JxCat-JUNTS': 'jxcat.png',
  IU: 'iu.png',
  FAC: 'fac.png',
  'ERC-S': 'erc.png',
  'EH Bildu': 'bildu.png',
  'ECP-GUAYEM EL CANVI': 'encomupodem.jpg',
  'EC-UP': 'podemos.jpg',
  'EAJ-PNV': 'eajpnv.png',
  Cs: 'ciudadanos.png',
  'CUP-PR': 'cup.png',
  'CCa-NC': 'ca.jpeg',
  BNG: 'bng.png',
};

let logoSrc = ref('');

watchEffect(async () => {
  if (party.value in logos) {
    try {
      const module = await import(`../../assets/party_logos/${logos[party.value]}`);
      logoSrc.value = module.default;
    } catch (error) {
      console.error(`Failed to load logo: ${error}`);
    }
  }
});
</script>

<style scoped lang="scss"></style>
