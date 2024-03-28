import { slides } from './data.js';

const { createApp } = Vue;

createApp({

    data() {
        return {
            slides: slides,
            activeIndexSlide: 0
        }
    },
    methods: {
        nextSlide() {
            // se il numero dell'indice è minore della lunghezza dell'array
            if (this.activeIndexSlide < slides.length - 1) {
                //incrementa il numero dell'indice
                this.activeIndexSlide++;
            } else {
                //riporta il numero dell'indice al valore iniziale 0 
                this.activeIndexSlide = 0;
            }

        },
        prevSlide() {
            if (this.activeIndexSlide > 0) {
                this.activeIndexSlide--;
            } else {
                this.activeIndexSlide = this.slides.length - 1;
            }

        }
    }

}).mount('#app')