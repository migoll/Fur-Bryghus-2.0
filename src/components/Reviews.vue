<template>
    <!-- Anmeldelses sektion med 3 cards -->
    <section class="w-full overflow-hidden py-[2rem] px-[1rem] md:px-[4rem] md:py-[4rem] flex flex-col md:items-center">
    <h2>Hvad siger vores kunder om os</h2>
  <div class="md:py-[4rem] lg:py-[2rem] flex box-border max-w-[1240px] flex-col gap-[20px] lg:flex-row">
   <div class="!flex flex-col items-stretch justify-start shadow-lg p-[1rem] lg:w-[33%] bg-neutral-6 ">

        <div class="flex flex-row gap-20">
        <div class="w-[80%]">
            <p class="p-medium">Allan Jensen</p>
            <div class="rating flex">
                <!-- https://fontawesome.com/icons/star?f=classic&s=solid -->
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700] "><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700]"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700]"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700]"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700]"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
               
            </div>
        </div>
        <div class="w-[20%]">
            <!-- https://fontawesome.com/icons/google?f=classic&s=brands -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-[30px] "><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
        </div>
        </div>
     <div class="mt-[1rem]">
        <p>Vi besøgte Bryghuset 2 gange i løbet af påsken og spiste der begge gange, 1. gang udenfor i gården om eftermiddagen og anden gang i restauranten om aftenen. Begge gange var det en superdejlig oplevelse, maden, omgivelserne, servering og selvfølgeligt fantastisk øl til maden. Vi kommer helt sikkert igen og lader os forkæle.</p>
     </div>
  </div>

  <div class="!flex flex-col items-stretch justify-start shadow-lg p-[1rem] lg:w-[33%]  bg-neutral-6 ">

        <div class="flex flex-row gap-20">
        <div class="w-[80%]">
            <p class="p-medium">Peter Nørskov</p>
            <div class="rating flex">
                <!-- https://fontawesome.com/icons/star?f=classic&s=solid -->
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700] "><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700]"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700]"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700]"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700]"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
               
            </div>
        </div>
        <div class="w-[20%]">
            <!-- https://fontawesome.com/icons/google?f=classic&s=brands -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-[30px] "><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
        </div>
        </div>
     <div class="mt-[1rem]">
        <p>Fantastisk oplevelse efter en lang dag på cykel rundt på Fur.Skønt øl på en dejlig sommeraften.
        God betjening som var søde til at fortælle os der var lidt ventetid på maden. Men i godt selskab med god øl, så går det meste. Der var også et fint legeområde for børnene, med bl.a. hoppepude.</p>
     </div>
  </div>

  <div class="!flex flex-col items-stretch justify-start shadow-lg p-[1rem] lg:w-[33%]  bg-neutral-6 ">

        <div class="flex flex-row gap-20">
        <div class="w-[80%]">
            <p class="p-medium">Ulf Skaaning</p>
            <div class="rating flex">
                <!-- https://fontawesome.com/icons/star?f=classic&s=solid -->
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700] "><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700]"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700]"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700]"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] fill-[#FFD700]"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
               
            </div>
        </div>
        <div class="w-[20%]">
            <!-- https://fontawesome.com/icons/google?f=classic&s=brands -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-[30px] "><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
        </div>
        </div>
     <div class="mt-[1rem]">
        <p>Fantastisk perle beliggende på en skøn lille ø i Limfjorden. Maden var take away, men helt perfekt anrettet. Vi nød et Skaldyrsfad efterfulgt af et fad med påsketapas. Det var svært at dele, da det hele var utroligt lækkert. 5 stjerner herfra.</p>
     </div>
  </div>

        </div>
        <Button label="Se flere anmeldelser" openInNewTab to="https://www.google.com/search?sca_esv=3035b77ba2076880&rlz=1C1YTUH_daDK1038DK1038&sxsrf=AHTn8zqCTQazBeYtDakCvABfTiYMAYBjRA:1747899706653&uds=ABqPDvztZD_Nu18FR6tNPw2cK_RRaSxpVDIrzG-nNIpQ5vDvpbZnsQ3IX2ftLlHNZexsaHzeh5G3vCpY95r4t9EwWWTVpolnJneU0BfyM71dW3S9Cso44LQTP_DPoDb0_HEsgefg6fBnGi-DzEbHKp1unGrZtXgI7w&si=APYL9btvhO6SAb8jF9HqTZMMa7vs_teLnZaEVrJZwRKFIIKjoaa-RdyxeHv1RSRNldJIoC1F63s4qoyUeobiGKysYSA1W4VrQtckm4DLka2CwXGUaprpFr8%3D&q=Fur+Bryghus+Anmeldelser&sa=X&sqi=2&ved=2ahUKEwjO0_joybaNAxUs0wIHHWnMCVIQ3PALegQIPhAF&biw=1410&bih=739&dpr=1.6"/>
    </section>
</template>

<script setup>

</script>


<style scoped></style>