<template>
  <div class="bg-[#f5f6f7] text-[#1B2437]">
    <!-- =================== HERO =================== -->
    <section id="accueil" class="relative overflow-hidden min-h-[60vh] flex items-center justify-center py-20 md:py-28">
      <!-- Image de fond -->
      <div class="absolute inset-0 -z-10">
        <img :src="heroBgImage" alt="Express 54" class="h-full w-full object-cover" />
        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      <div class="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <!-- Gros bouton géant -->
        <a
          href="https://express54.org"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-block rounded-2xl bg-[#ff6200] px-16 py-8 text-3xl md:text-4xl lg:text-5xl font-bold text-white shadow-2xl shadow-[#ff6200]/50 transition-all hover:bg-[#e65800] hover:shadow-3xl hover:shadow-[#ff6200]/70 hover:scale-105 active:scale-[0.95]"
        >
          👉 Cliquez ici
          <ArrowRight class="inline-block h-10 w-10 ml-4 transition-transform group-hover:translate-x-2" />
        </a>
        <p class="mt-4 text-lg text-white/80 font-medium">
          Accédez directement à la plateforme Express 54
        </p>
      </div>
    </section>

    <!-- =================== COMMENT ÇA MARCHE =================== -->
    <section id="comment-ca-marche" class="relative overflow-hidden py-24 sm:py-32">
      <!-- Image de fond -->
      <div class="absolute inset-0 -z-10">
        <img :src="heroBgImage" alt="Express 54" class="h-full w-full object-cover" />
        <div class="absolute inset-0 bg-[#1B2437]/85"></div>
      </div>

      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="reveal mx-auto max-w-2xl text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-[#ff6200]">
            Comment ça marche
          </span>
          <h2 class="mt-3 font-serif text-3xl font-semibold sm:text-4xl text-[#ff6200]">
            Votre démarche, étape par étape
          </h2>
          <p class="mt-4 text-[#ff6200]/80">
            De la création de votre compte jusqu'au suivi de votre dossier, chaque étape est
            claire et guidée.
          </p>
        </div>

        <div class="relative mt-20">
          <div class="space-y-20 md:space-y-16">
            <div
              v-for="(step, index) in steps"
              :key="step.title"
              class="reveal relative flex flex-col gap-6 md:grid md:grid-cols-2 md:items-center md:gap-16 md:py-6"
            >
              <!-- Content -->
              <div
                :class="[
                  'md:col-span-1',
                  index % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-2 md:col-start-2',
                ]"
              >
                <div
                  :class="[
                    'inline-flex items-center gap-3',
                    index % 2 === 0 ? 'md:flex-row-reverse' : '',
                  ]"
                >
                  <div
                    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#ff6200]/50 bg-white/10 font-serif text-lg font-semibold text-[#ff6200]"
                  >
                    {{ step.number }}
                  </div>
                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#ff6200]/20 text-[#ff6200]"
                  >
                    <component :is="step.icon" :size="22" />
                  </div>
                </div>
                <h3 class="mt-4 text-2xl font-semibold text-[#ff6200]">{{ step.title }}</h3>
                <p class="mt-2 max-w-md text-base leading-relaxed text-[#ff6200]/70" :class="index % 2 === 0 ? 'md:ml-auto' : ''">
                  {{ step.description }}
                </p>
              </div>

              <!-- Image -->
              <div
                :class="[
                  'md:col-span-1',
                  index % 2 === 0 ? 'md:order-2 md:col-start-2' : 'md:order-1',
                ]"
              >
                <div class="relative mx-auto w-full max-w-2xl">
                  <div
                    class="overflow-hidden rounded-2xl border border-white/20 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                  >
                    <img
                      :src="step.image"
                      :alt="step.title"
                      class="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="reveal mt-16 flex justify-center">
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
  Landmark,
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
import step1Image from '@/assets/images/connexion.png'
import step2Image from '@/assets/images/inscription.png'
import step3Image from '@/assets/images/express54.png'
import step4Image from '@/assets/images/nouvelleapplication.png'
import step5Image from '@/assets/images/service.png'
import step6Image from '@/assets/images/sousservice.png'
import step7Image from '@/assets/images/formalites.png'
import step8Image from '@/assets/images/confirmation.png'

// ================================================================
// DATA
// ================================================================

// Étapes avec images
const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Créer un compte ou se connecter',
    description: 'Ouvrez votre espace personnel sécurisé en quelques instants.',
    image: step1Image,
  },
  {
    number: '02',
    icon: Globe2,
    title: 'Choisir votre pays',
    description: 'Indiquez le pays depuis lequel vous effectuez votre démarche.',
    image: step2Image,
  },
  {
    number: '03',
    icon: Landmark,
    title: 'Choisir votre ambassade',
    description: 'Sélectionnez l\'ambassade ou le consulat compétent.',
    image: step3Image,
  },
  {
    number: '04',
    icon: FilePlus2,
    title: 'Nouvelle application',
    description: 'Démarrez une nouvelle démarche en un clic.',
    image: step4Image,
  },
  {
    number: '05',
    icon: LayoutGrid,
    title: 'Choisir un service',
    description: 'Parcourez les services disponibles : visa, passeport, documents...',
    image: step5Image,
  },
  {
    number: '06',
    icon: ListChecks,
    title: 'Choisir un sous-service',
    description: 'Précisez la nature exacte de votre demande.',
    image: step6Image,
  },
  {
    number: '07',
    icon: FileSignature,
    title: 'Remplir les formalités',
    description: 'Complétez le formulaire et joignez les documents demandés.',
    image: step7Image,
  },
  {
    number: '08',
    icon: SendHorizonal,
    title: 'Envoyer et suivre',
    description: 'Vérifiez, envoyez, puis suivez l\'évolution de votre dossier.',
    image: step8Image,
  },
]

// ---------------------------------------------------------------------------
// Scroll reveal
// ---------------------------------------------------------------------------

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
    { threshold: 0.15 },
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.value?.observe(el))
})

onBeforeUnmount(() => {
  observer.value?.disconnect()
})
</script>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>