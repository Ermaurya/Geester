var reviews = [
  {
    id: 1,
    name: "Rohit",
    job: "web developer",
    img: "https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?b=1&k=20&m=1075599562&s=170667a&w=0&h=cZqbPs4YOWzY6oqR-L5OUXNnC_g-1xl8kxcClNjuk5k=",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray  pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday",
  },
  {
    id: 2,
    name: "divakar",
    job: "web designer",
    img: "https://media.istockphoto.com/photos/website-design-developing-programming-and-coding-technologies-picture-id1197640540?b=1&k=20&m=1197640540&s=170667a&w=0&h=n-7yp4aP8sKZ7CVDAlxn132Pgi7FRjqVHj0ggQMAD8I=",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "dristi",
    job: "java developer",
    img: "https://media.istockphoto.com/photos/facial-recognition-system-concept-picture-id872707982?b=1&k=20&m=872707982&s=170667a&w=0&h=rw92Mhgzof0BmxWpW14vZXEOoXKzUQR8MnVkesxRu7w=",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Dipanshi",
    job: "software Eng.",
    img: "https://media.istockphoto.com/photos/    science-technology-concept-scientific-examination-scientist-picture-id1223789403?b=1&k=20&m=1223789403&s=170667a&w=0&h=_x9cZA3kmpNAx-C1PTT1Rqh3PnHrY8x_K2juZ0NI1lw=", 
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually  seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  ];
  
  var imgElement = document.getElementById("person-img");
  var job = document.getElementById("job");
  var info = document.getElementById("info");
  var prv = document.querySelector(".prv");
  var next = document.querySelector(".next");
  var randomBtn = document.querySelector(".random-btn");

  var currentIndex = 0;
  prv.addEventListener("click", prev);
  next.addEventListener("click", nexton);
  randomBtn.addEventListener("click", randomaize);


  function prev() {
    if (currentIndex === 0) {
      currentIndex = reviews.length - 1;
    } else {
      currentIndex--;
    }
    console.log(currentIndex);
    update();
  }
  function nexton() {
    if (currentIndex === reviews.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    console.log(currentIndex);
    update();
  }
  function randomaize() {
    currentIndex = Math.floor(Math.random() * reviews.length);
    console.log(currentIndex);
    update();
  }
  function update() { 
     imgElement.src = reviews[currentIndex].img;
      uname.innerText = reviews[currentIndex].name;
      job.innerText = reviews[currentIndex].job;
      info.innerText = reviews[currentIndex].text;

  }
  