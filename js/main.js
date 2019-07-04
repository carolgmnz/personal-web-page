jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // Python Chart
  var doughnutData = [{
      value: 70,
      color: "#87a1ff"
    },
    {
      value: 30,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("python").getContext("2d")).Doughnut(doughnutData);

  // R Chart
  var doughnutData = [{
    value: 80,
    color: "#87a1ff"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("r").getContext("2d")).Doughnut(doughnutData);

  // WordPress Chart
  var doughnutData = [{
    value: 65,
    color: "#87a1ff"
  },
  {
    value: 35,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("matlab").getContext("2d")).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [{
    value: 20,
    color: "#87a1ff"
  },
  {
    value: 80,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // SQL Chart
  var doughnutData = [{
    value: 70,
    color: "#87a1ff"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("sql").getContext("2d")).Doughnut(doughnutData);

  // MongoDB Chart
  var doughnutData = [{
    value: 50,
    color: "#87a1ff"
  },
  {
    value: 50,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("mongo").getContext("2d")).Doughnut(doughnutData);

  // Cassandra Chart
    var doughnutData = [{
      value: 50,
      color: "#87a1ff"
    },
    {
      value: 50,
      color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("cassandra").getContext("2d")).Doughnut(doughnutData);
  
  // LaTeX Chart
  var doughnutData = [{
    value: 70,
    color: "#87a1ff"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("latex").getContext("2d")).Doughnut(doughnutData);
});
