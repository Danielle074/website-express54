<template>
  <div class="bg-[#f5f6f7] text-[#1B2437]">

    <!-- =================== HERO =================== -->
    <section
      id="accueil"
      class="relative overflow-hidden min-h-[60vh] flex items-center justify-center py-20 md:py-28"
    >
      <!-- Image de fond -->
      <div class="absolute inset-0 -z-10">
        <img
          :src="heroBgImage"
          alt="Express 54"
          class="h-full w-full object-cover"
        />

        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      <div class="relative mx-auto max-w-4xl px-6 text-center lg:px-8">

        <!-- Gros bouton géant -->
        <a
          href="https://express54.org"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-block rounded-2xl bg-[#ff6200] px-16 py-8 text-2xl md:text-3xl lg:text-4xl font-bold text-white shadow-2xl shadow-[#ff6200]/50 transition-all hover:bg-[#e65800] hover:shadow-3xl hover:shadow-[#ff6200]/70 hover:scale-105 active:scale-[0.95]"
        >
          Cliquez ici après lecture de la procédure pour accéder à la plateforme.

          <ArrowRight
            class="inline-block h-10 w-10 ml-4 transition-transform group-hover:translate-x-2"
          />
        </a>

        <p class="mt-4 text-lg text-[#ff6200]/80 font-medium">
          Accédez directement à la plateforme Express 54
        </p>
      </div>
    </section>


    <!-- =================== COMMENT ÇA MARCHE =================== -->
    <section
      id="comment-ca-marche"
      class="relative overflow-hidden py-24 sm:py-32"
    >

      <!-- Image de fond -->
      <div class="absolute inset-0 -z-10">
        <img
          :src="heroBgImage"
          alt="Express 54"
          class="h-full w-full object-cover"
        />

        <div class="absolute inset-0 bg-[#1B2437]/85"></div>
      </div>


      <!-- CONTENEUR PRINCIPAL -->
      <div
        class="relative mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-12"
      >

        <!-- =================== TITRE =================== -->
        <div class="reveal mx-auto max-w-3xl text-center">

          <span
            class="text-sm font-semibold uppercase tracking-widest text-[#ff6200]"
          >
            Comment ça marche
          </span>

          <h2
            class="mt-3 font-serif text-3xl font-semibold sm:text-4xl text-[#ff6200]"
          >
            Votre démarche, étape par étape
          </h2>

          <p class="mt-4 text-[#ff6200]/80">
            De la création de votre compte jusqu'au suivi de votre dossier,
            chaque étape est claire et guidée.
          </p>

        </div>


        <!-- =================== ÉTAPES =================== -->
        <div class="relative mt-20">

          <div class="space-y-32 md:space-y-40">

            <div
              v-for="(step, index) in steps"
              :key="step.title"
              class="reveal relative flex flex-col gap-10 md:grid md:grid-cols-[0.75fr_1.8fr] md:items-center md:gap-20 md:py-10"
            >

              <!-- ======================================================
                   CONTENT
                   ====================================================== -->
              <div
                :class="[
                  'md:col-span-1',
                  index % 2 === 0
                    ? 'md:order-1 md:text-right'
                    : 'md:order-2 md:col-start-2',
                ]"
              >

                <div
                  :class="[
                    'inline-flex items-center gap-3',
                    index % 2 === 0 ? 'md:flex-row-reverse' : '',
                  ]"
                >

                  <!-- Numéro -->
                  <div
                    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#ff6200]/50 bg-white/10 font-serif text-lg font-semibold text-[#ff6200]"
                  >
                    {{ step.number }}
                  </div>


                  <!-- Icône -->
                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ff6200]/20 text-[#ff6200]"
                  >
                    <component :is="step.icon" :size="22" />
                  </div>

                </div>


                <h3
                  class="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-[#ff6200]"
                >
                  {{ step.title }}
                </h3>


                <p
                  class="mt-3 max-w-md text-base md:text-lg leading-relaxed text-[#ff6200]/70"
                  :class="index % 2 === 0 ? 'md:ml-auto' : ''"
                >
                  {{ step.description }}
                </p>

              </div>


              <!-- ======================================================
                   IMAGE
                   ====================================================== -->
              <div
                :class="[
                  'md:col-span-1',
                  index % 2 === 0
                    ? 'md:order-2 md:col-start-2'
                    : 'md:order-1',
                ]"
              >

                <!--
                  IMAGE GRANDE
                  Pas de carte blanche.
                  Pas de fond blanc.
                  Pas de border.
                -->
                <div
                  class="relative mx-auto w-full max-w-[1400px]"
                >

                  <!-- IMAGE DIRECTEMENT SUR LE FOND -->
                  <div class="relative w-full overflow-visible">

                    <img
                      :src="step.image"
                      :alt="step.title"
                      class="block w-full h-auto max-h-[800px] object-contain rounded-xl"
                    />


                    <!-- =================================================
                         PETIT CERCLE SUR LA ZONE IMPORTANTE
                         ================================================= -->
                    <div
                      class="absolute z-20 pointer-events-none"
                      :style="{
                        top: step.target.top,
                        left: step.target.left,
                      }"
                    >

                      <div
                        class="relative flex h-7 w-7 md:h-9 md:w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#ff6200] bg-white/30 shadow-md"
                      >

                        <!-- Petit point central -->
                        <div
                          class="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#ff6200]"
                        ></div>

                      </div>

                    </div>


                    <!-- =================================================
                         FLÈCHE
                         ================================================= -->
                    <div
                      class="absolute z-30 pointer-events-none"
                      :style="{
                        top: step.arrow.top,
                        left: step.arrow.left,
                        transform: `rotate(${step.arrow.rotate})`,
                      }"
                    >

                      <svg
                        width="170"
                        height="115"
                        viewBox="0 0 170 115"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-[100px] md:w-[140px] lg:w-[170px] drop-shadow-[0_3px_4px_rgba(0,0,0,0.5)]"
                      >

                        <defs>

                          <marker
                            :id="`arrow-${index}`"
                            markerWidth="10"
                            markerHeight="10"
                            refX="8"
                            refY="5"
                            orient="auto"
                            markerUnits="strokeWidth"
                          >
                            <path
                              d="M0,0 L10,5 L0,10 Z"
                              fill="#ff6200"
                            />
                          </marker>

                        </defs>


                        <!-- Contour blanc -->
                        <path
                          d="M10 95 C45 85, 80 55, 150 15"
                          stroke="white"
                          stroke-width="8"
                          stroke-linecap="round"
                        />


                        <!-- Flèche orange -->
                        <path
                          d="M10 95 C45 85, 80 55, 150 15"
                          stroke="#ff6200"
                          stroke-width="4"
                          stroke-linecap="round"
                          :marker-end="`url(#arrow-${index})`"
                        />

                      </svg>

                    </div>


                    <!-- =================================================
                         TEXTE SUR L'IMAGE
                         ================================================= -->
                    <div
                      class="absolute z-40 rounded-lg bg-[#ff6200] px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold text-white shadow-lg border border-white"
                      :style="{
                        top: step.label.top,
                        left: step.label.left,
                      }"
                    >
                      {{ step.label.text }}
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        <!-- =================== BOUTON FINAL =================== -->
        <div class="reveal mt-20 flex justify-center">

          <a
            href="https://express54.org"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg bg-[#ff6200] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#ff6200]/30 transition-all hover:bg-[#e65800] hover:shadow-xl hover:shadow-[#ff6200]/40 hover:scale-105 active:scale-[0.98]"
          >

            Commencer ma démarche

            <ArrowRight class="h-5 w-5" />

          </a>

        </div>

      </div>
    </section>
  </div>
</template>


<script setup lang="ts">

import { ref, onMounted, onBeforeUnmount } from 'vue'

import {
  UserPlus,
  Globe2,
  FilePlus2,
  LayoutGrid,
  ListChecks,
  FileSignature,
  SendHorizonal,
  ArrowRight,
} from 'lucide-vue-next'


// ================================================================
// 📷 IMPORT DES IMAGES
// ================================================================

// Image de fond pour Hero et Comment ça marche
import heroBgImage from '@/assets/images/bghero.jpeg'


// Comment ça marche - 8 images
import step1Image from '@/assets/images/inscription.png'
import step2Image from '@/assets/images/connexion.png'
import step3Image from '@/assets/images/express54.png'
import step4Image from '@/assets/images/nouvelleapplication.png'
import step5Image from '@/assets/images/service.png'
import step6Image from '@/assets/images/sousservice.png'
import step7Image from '@/assets/images/documentscni.png'
import step8Image from '@/assets/images/formalitedemande.png'


// ================================================================
// DATA
// ================================================================

const steps = [

  // ============================================================
  // 01 - CRÉER UN COMPTE
  // ============================================================
  {
    number: '01',
    icon: UserPlus,
    title: 'Créer un compte',
    description: 'Créez votre compte en quelques instants.',
    image: step1Image,

    // Petit cercle directement sur le formulaire
    target: {
      top: '50%',
      left: '50%',
    },

    // Position de la flèche
    arrow: {
      top: '32%',
      left: '55%',
      rotate: '20deg',
    },

    // Texte
    label: {
      text: 'Remplissez le formulaire ici',
      top: '10%',
      left: '52%',
    },
  },


  // ============================================================
  // 02 - SE CONNECTER
  // ============================================================
  {
    number: '02',
    icon: UserPlus,
    title: 'Se connecter',
    description: 'Connectez-vous à votre espace personnel sécurisé.',
    image: step2Image,

    // Petit cercle directement sur le formulaire
    target: {
      top: '50%',
      left: '50%',
    },

    arrow: {
      top: '32%',
      left: '55%',
      rotate: '20deg',
    },

    label: {
      text: 'Connectez-vous ici',
      top: '10%',
      left: '52%',
    },
  },


  // ============================================================
  // 03 - PAYS ET AMBASSADE
  // ============================================================
  {
    number: '03',
    icon: Globe2,
    title: 'Choisissez votre pays et ambassade',
    description:
      "Sélectionnez votre pays et l'ambassade compétente.",
    image: step3Image,

    target: {
      top: '48%',
      left: '55%',
    },

    arrow: {
      top: '32%',
      left: '58%',
      rotate: '20deg',
    },

    label: {
      text: 'Choisissez votre ambassade ici',
      top: '10%',
      left: '55%',
    },
  },


  // ============================================================
  // 04 - NOUVELLE APPLICATION
  // ============================================================
  {
    number: '04',
    icon: FilePlus2,
    title: 'Nouvelle application',
    description:
      'Démarrez une nouvelle démarche en un clic.',
    image: step4Image,

    target: {
      top: '50%',
      left: '58%',
    },

    arrow: {
      top: '32%',
      left: '60%',
      rotate: '20deg',
    },

    label: {
      text: 'Nouvelle application',
      top: '10%',
      left: '58%',
    },
  },


  // ============================================================
  // 05 - CHOISIR UN SERVICE
  // ============================================================
  {
    number: '05',
    icon: LayoutGrid,
    title: 'Choisir un service',
    description:
      'Parcourez les services disponibles : visa, passeport, documents...',
    image: step5Image,

    target: {
      top: '50%',
      left: '55%',
    },

    arrow: {
      top: '32%',
      left: '60%',
      rotate: '20deg',
    },

    label: {
      text: 'Choisissez le service',
      top: '10%',
      left: '55%',
    },
  },


  // ============================================================
  // 06 - SOUS-SERVICE
  // ============================================================
  {
    number: '06',
    icon: ListChecks,
    title: 'Sous-service',
    description:
      'Précisez la nature exacte de votre demande.',
    image: step6Image,

    target: {
      top: '50%',
      left: '55%',
    },

    arrow: {
      top: '32%',
      left: '60%',
      rotate: '20deg',
    },

    label: {
      text: 'Choisissez le sous-service',
      top: '10%',
      left: '55%',
    },
  },


  // ============================================================
  // 07 - CARTE
  // ============================================================
  {
    number: '07',
    icon: FileSignature,
    title: 'Choisir une carte pour votre demande',
    description:
      'Choisissez la carte appropriée pour votre demande.',
    image: step7Image,

    target: {
      top: '50%',
      left: '55%',
    },

    arrow: {
      top: '32%',
      left: '60%',
      rotate: '20deg',
    },

    label: {
      text: 'Sélectionnez votre carte ici',
      top: '10%',
      left: '55%',
    },
  },


  // ============================================================
  // 08 - FORMALITÉ CNI
  // ============================================================
  {
    number: '08',
    icon: SendHorizonal,
    title: 'Formalité de demande de CNI',
    description:
      'Veuillez remplir les formalités de demande de CNI.',
    image: step8Image,

    target: {
      top: '50%',
      left: '55%',
    },

    arrow: {
      top: '32%',
      left: '60%',
      rotate: '20deg',
    },

    label: {
      text: 'Remplissez votre demande ici',
      top: '10%',
      left: '55%',
    },
  },
]


// ================================================================
// SCROLL REVEAL
// ================================================================

const observer = ref<IntersectionObserver | null>(null)


onMounted(() => {

  observer.value = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add('is-visible')

          observer.value?.unobserve(entry.target)

        }

      })

    },
    {
      threshold: 0.15,
    },
  )


  document
    .querySelectorAll('.reveal')
    .forEach((el) => observer.value?.observe(el))

})


onBeforeUnmount(() => {
  observer.value?.disconnect()
})

</script>


<style scoped>

/* ================================================================
   ANIMATION DES SECTIONS
   ================================================================ */

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s ease-out;
}


.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}


/* ================================================================
   ACCESSIBILITÉ
   ================================================================ */

@media (prefers-reduced-motion: reduce) {

  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .animate-ping {
    animation: none;
  }

}


/* ================================================================
   MOBILE
   ================================================================ */

@media (max-width: 768px) {

  .reveal {
    transform: translateY(15px);
  }

}

</style>