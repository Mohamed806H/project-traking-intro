import "./style.css";

document.querySelector("#app").innerHTML = `
    <header class="flex justify-between md:block">
      <nav id="nav" class="   md:flex  md:justify-between items-center sm:mt-16   sm:mx-20 lg:mx-41 mt-[38px] ml-8">
        <div class="logo">
          <img src="./images/logo.svg" alt="Monograph Logo" />
        </div>
        <ul class="nav-links hidden sm:flex flex-col sm:flex-row text-center align-items-center justify-center gap-y-6 sm:gap-3 bg-white sm:bg-inherit absolute sm:relative top-24.5  sm:top-[-29px] md:top-0  left-8 sm:left-[150px] md:left-0  w-[90%] sm:w-auto  px-10 sm:p-0 py-6 sm:font-bold font-semibold text-[18px]">
          <li class="mr-0 sm:mr-6 md:mr-11"><a href="#product" class='text-Grayishblue font-condensed font-bold hover:text-LightGrayishblue'>PRODUCT</a></li>
          <li class="mr-0 sm:mr-6 md:mr-11"><a href="#features" class='text-Grayishblue font-condensed font-bold hover:text-LightGrayishblue'>FEATURES</a></li>
          <li class="mr-0 sm:mr-6 md:mr-11"><a href="#pricing" class='text-Grayishblue font-condensed font-bold hover:text-LightGrayishblue'>PRICING</a></li>
          <div class="circle-separator bg-LightGrayishblue mt-3 sm:rounded-full sm:w-1.5 sm:h-1.5 w-[90%]  rounded-none border border-LightGrayishblue mx-auto"></div>
          <li><a href="#login" class='text-LightGrayishblue font-condensed font-bold ml-0 sm:ml-6 md:ml-11 hover:text-Grayishblue'>LOGIN</a></li>
        </ul>
      </nav>
      <button id="menu-toggle"  class=" sm:hidden absolute top-10 right-8"><img src="./images/icon-hamburger.svg" alt="Menu" class="w-6" /></button>
    </header>

    <main>
    <section class="intro flex flex-col-reverse lg:flex-row lg:pl-41 lg:pt-40  pt-15">
      <div class="text-content lg:w-[38%] w-[90%] shrink-0 pl-8 pt-22 lg:pt-0">
      <div class="starter-text flex flex-row  items-center ">
              <span class="badge  bg-Darkblue rounded-xl  py-1.25  px-3  text-white font-bold font-condensed ">NEW</span>
        <h2 class="ml-3.5 font-condensed text-LightGrayishblue tracking-[0.33em]">Monograph Dashboard</h2>
      </div>
        <h1 class="font-condensed text-Darkblue md:text-[63px]/[64px] text-[40px]/[40px] md:font-bold font-semibold  mt-1">Powerful Insights Into Your Team</h1>
        <p class="text-Grayishblue font-barlow text-[18px]/[25px] md:w-[60.084%] mt-8 w-[94%]">Project planning and time tracking for agile teams</p>
        <div class="schedule mt-16">
        <button class="cta-button bg-red text-white md:font-bold font-semibold font-condensed md:text-[18px] text-[1em] text-center rounded-md md:py-3.25 md:px-8 py-2.5 px-5">SCHEDULE A DEMO</button>
        <span class="preview-text font-condensed tracking-[0.22em] text-LightGrayishblue ml-6 text-[13px]">To see a preview</span>
        </div>
        
      </div>
      <div class="image-content overflow-x-hidden w-[483px] h-[244px] lg:w-[75%] lg:h-[464px] shrink-0 ml-3 lg:ml-24 xs:w-full xs:h-auto">
  <img src="./images/illustrationdevices.svg" class="max-w-none w-full h-full!" alt="Desktop Preview">
</div>
    </section>

  </main>
  `;
const menuBtn = document.querySelector("#menu-toggle");
const mobileNav = document.querySelector(".nav-links");
const menuIcon = menuBtn.querySelector("img");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  mobileNav.classList.toggle("flex");

  // isOpen=true means it WAS hidden → now opening → show close icon
  menuIcon.src = mobileNav.classList.contains("hidden")
    ? "./src/images/icon-hamburger.svg"
    : "./src/images/icon-close.svg";
});
