let movies = [
    {
      name: "Falcon and the Winter Soldier",
      des:
        "An enhanced soldier and Steve Rogers's best friend during the 1940s who was presumed killed in action during World War II, before re-emerging as a brainwashed assassin in the present day.",
      image: "slider 2.png"
    },
    {
      name : "MS Dhoni: The Untold Story",
      des : 
        "A tell-all tale about the life and times of Indian cricketer Mahendra Singh Dhoni, mapping his journey from a ticket collector to a celebrated sportsman.",
      image : "slider 8.png"
    },
    {
      name : "Masoom",
      des:
      "When Sana arrives for her mother's funeral, she senses that things are not as plain as they seem. Determined, she decides to find the truth even if it incurs her father's wrath.",
      image : "slider 7.png"
    },
    {
      name: "Loki",
      des:
        "Loki's character has borrowed a number of characteristics and storylines from across the history of the character in Marvel Comics.",
      image: "slider 1.png"
    },
    {
      name: "Wanda Vision",
      des:
        "An Avenger who can harness chaos magic, engage in telepathy and telekinesis, and alter reality.",
      image: "slider 3.png"
    },
    {
      name: "Raya and the Last Dragon",
      des:
        "Five hundred years ago, the peaceful and prosperous sub-continent of Kumandra is ravaged by the Druun, evil, dark-colored spirits that turn every living thing in their path to stone.",
      image: "slider 4.png"
    },
    {
      name: "Luca",
      des:
        "Luca and Alberto buy a Vespa, but Alberto sells it to get a train ticket for Luca, allowing him to go to school in Genoa with Giulia.",
      image: "slider 5.png"
    },
    {
        name : "Doctor Strange",
        des : 
        "When the Multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary.",
        image : "slider 6.png"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //Video Cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  