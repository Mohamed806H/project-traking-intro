import "./style.css";

document.querySelector("#app").innerHTML = `
    <header>
      <nav id="nav" class=" md:flex  md:justify-between items-center md:mt-16 md:ml-41 md:mr-41 mt-[38px] ml-8">
        <div class="logo">
          <img src="./src/images/logo.svg" alt="Monograph Logo" />
        </div>
        <ul
        class="nav-links hidden md:flex  items-center list-none m-0 p-0"
        >
          <li class="mr-11"><a href="#product" class='text-grayishBlue font-barlowCondensed font-bold hover:text-lightGrayishBlue'>PRODUCT</a></li>
          <li class="mr-11"><a href="#features" class='text-grayishBlue font-barlowCondensed font-bold hover:text-lightGrayishBlue'>FEATURES</a></li>
          <li class="mr-11"><a href="#pricing" class='text-grayishBlue font-barlowCondensed font-bold hover:text-lightGrayishBlue'>PRICING</a></li>
          <div class="circle-separator bg-lightGrayishBlue mt-1 rounded-full w-1.5 h-1.5"></div>

          <li><a href="#login" class='text-lightGrayishBlue font-barlowCondensed font-bold ml-11 hover:text-grayishBlue'>LOGIN</a></li>
        </ul>
      </nav>
      <button id="menu-toggle" class="absolute top-[42px] left-[319px] md:hidden">
          <img src="./src/images/icon-hamburger.svg" alt="Menu" class="w-6" />
        </button>
    </header>

    <main>
    <section class="intro flex flex-col-reverse md:flex-row md:pl-41 md:pt-40  pt-96 pl-8 ">
      <div class="text-content md:w-[38%] w-[90%] shrink-0  ">
      <div class="starter-text flex flex-row  items-center ">
              <span class="badge  bg-darkBlue rounded-xl  py-1.25  px-3  text-white font-bold font-barlowCondensed ">NEW</span>
        <h2 class="ml-3.5 font-barlowCondensed text-lightGrayishBlue tracking-[0.33em]">Monograph Dashboard</h2>
      </div>
        <h1 class="font-barlowCondensed text-darkBlue text-[40px]/[40px] font-semibold  mt-1">Powerful Insights Into Your Team</h1>
        <p class="text-grayishBlue font-barlow text-[18px]/[25px] md:w-[60.084%] mt-8 w-[94%]">Project planning and time tracking for agile teams</p>
        <div class="schedule mt-16">
        <button class="cta-button bg-raed text-white md:font-bold font-semibold font-barlowCondensed md:text-[18px] text-[1em] text-center rounded-md md:py-3.25 md:px-8 py-2.5 px-5">SCHEDULE A DEMO</button>
        <span class="preview-text font-barlowCondensed tracking-[0.22em] text-lightGrayishBlue ml-6 text-[13px]">To see a preview</span>
        </div>
        
      </div>
      <div class="image-content relative overflow-x-hidden md:w-[75.25%] md:h-[464px]  shrink-0 ">
        <img src="/src/images/illustrationdevices.svg" class="absolute w-full max-w-none -right-24 "alt="Desktop Preview">
      </div>
    </section>
    
  </main>
  `;
// const menuBtn = document.getElementById("menu-toggle");
// const mobileNav = document.getElementById("mobile-nav");
// const menuIcon = menuBtn.querySelector("img");

// menuBtn.addEventListener("click", () => {
//   const isOpen = !mobileNav.classList.contains("hidden");
//   mobileNav.classList.toggle("hidden");

//   // Change icon depending on state
//   menuIcon.src = isOpen
//     ? "./src/images/icon-hamburger.svg"
//     : "./src/images/icon-close.svg";
// });
