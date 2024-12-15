const targetDate=new Date("2025-01-01").getTime(),countdownElement=document.getElementById("countdown");function isMobile(){return 600>=window.innerWidth}function updateCountdown(){const a=new Date().getTime(),b=targetDate-a,c=Math.floor(b/86400000),d=Math.floor(b%86400000/3600000),e=Math.floor(b%3600000/60000),f=Math.floor(b%60000/1e3);countdownElement.innerHTML=isMobile()?`
    <span class="time-unit">${c} dias</span>
    <span class="time-unit">${d} horas</span>
    <span class="time-unit">${e} minutos</span>
    <span class="time-unit">${f} segundos</span>
    <span class="count-text">Para 2025  <span class="year"> Acabar!</span></span>  `:`
    <span class="time-unit">${c}d</span>
    <span class="time-unit">${d}h</span>
    <span class="time-unit">${e}m</span>
    <span class="time-unit">${f}s</span>
    <span class="count-text">para <span class="year">2025!</span></span>
  `,0>b&&(clearInterval(interval),countdownElement.innerHTML="2025")}const interval=setInterval(updateCountdown,1e3);updateCountdown();