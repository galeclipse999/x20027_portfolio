(() => {
    const INTERVAL = 500; 
      
    window.setInterval(timer, INTERVAL); 

    var target = new Date(2022, 3 - 1, 28, 0, 0, 0);

    function timer() {
      var now = new Date();

      var due = target.getTime() - now.getTime();

      var seconds = Math.floor(due / 1000 % 60);
      var minutes = Math.floor(due / 1000 / 60) % 60;
      var hours = Math.floor(due / 1000 / 60 / 60) % 24;
      var days = Math.floor(due / 1000 / 60 / 60 / 24);

      document.getElementById("due-day").textContent = days;
      document.getElementById("due-hour").textContent = hours;
      document.getElementById("due-minute").textContent = minutes;
      document.getElementById("due-second").textContent = seconds;
    }
})(); 
