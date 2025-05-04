<template>
  <div>
    <div class="first-container">
      <div>
        <h1>BIOFLOR GME - Agricultură curată, din grijă pentru pământ și viitor</h1>
        <p style="font-style: italic">
          La Bioflor, lucrăm pământul cu respect și responsabilitate.
          Cultivăm porumb și fasole boabe în câmp deschis, urmând principii agricole sustenabile.
          În același timp, ne extindem activitatea într-un solar modern,
          unde vom crește fructe și legume proaspete, gustoase și sănătoase.
        </p>
      </div>
      <FinancedByComponent/>
    </div>
    <h2>
      Energie verde pentru agricultură sănătoasă
    </h2>
    <p>
      Pentru a reduce impactul asupra mediului și a crește eficiența, am instalat un sistem de
      panouri solare care asigură energia necesară pentru activitățile din solar.
      Astfel, combinăm tradiția cu inovația, într-un model de agricultură adaptat
      vremurilor de azi.
    </p>
  </div>
</template>
<script setup>
import FinancedByComponent from '@/components/FinancedByComponent'
</script>

<style scoped>
.first-container {
  display: flex;
  gap: 2rem;
}
</style>
