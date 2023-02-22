setInterval(() => {
      d =  new Date();
      htime = d.getHours();
      mtime = d.getMinutes();
      stime = d.getSeconds();
      hrotation = 30*htime + mtime/2;
      mrotaion = 6*mtime;
      srotaion = 6*stime;

      hour.style.transform = `rotate(${hrotation}deg)`;
      minute.style.transform = `rotate(${srotation}deg)`;
      
      second.style.transform = `rotate(${mrotation}deg)`;

}, 1000);