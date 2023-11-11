import './App.css'
function App() {  
  return (
    <>
    
      {/* Hero Section */}
      <section id='hero'>
        <div className="section-container mb-40 pt-16">
          <img src="/e-logo.png" alt="" className="mx-auto my-16 h-[150px] w-[150px]" />
          <h3>
          Edit: Your Ultimate Editing Companion
          </h3>
          <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
          Edit: Powerfully simple editing software. Transform content with precision. Elevate your skills. Create captivating visuals effortlessly.
          </p>
          {/* Button container */}
          <div className="button-container">
            <a href="" className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
              Download for Windows
            </a>
            <a href="" className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
              Download for Mac
            </a>
          </div>
        </div>
      </section>
      {/* Snippets Section */}
      <section id="snippets">
          <div className="section-container my-20 ">
              <h3 >
                Edit the World
              </h3>
              <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
              Elevate your edits with "Edit." Enhance videos and images with ease, from basic tweaks to advanced techniques like motion tracking. Unleash your potential and turn raw content into masterpieces using our comprehensive toolkit.
              </p>
          </div>
      </section>
      {/* Features Section */}
      <section id="features">
        <div className="section-container my-20 ">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            {/* Image */}
              <div className='md:w-1/2'>
                  <img src="/image-computer.png" alt="" className='md:absolute top-0 right-[50%]'/>
              </div>
            {/* Items container */}
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16 md:w-1/2">
                {/* Item 1 */}
                  <div>
                    <h5 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>Discover "Edit"</h5>
                    <p className="max-w-md text-grayishBlue">
                    where extraordinary media editing awaits. Craft captivating videos and images effortlessly, whether you're a beginner or a pro.
                    </p>
                  </div>
                {/* Item 2 */}
                <div>
                    <h5 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>Elevate your edits with "Edit."</h5>
                    <p className="max-w-md text-grayishBlue">
                    Enhance videos and images with ease, from basic tweaks to advanced techniques like motion tracking.
                    </p>
                  </div>
                {/* Item 3 */}
                <div>
                    <h5 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>Dive into the possibilities with "Edit."</h5>
                    <p className="max-w-md text-grayishBlue">
                    Merge videos, add transitions, overlay text – all in real time. Experience efficient editing and see your ideas come to life seamlessly.
                    </p>
                  </div>
            </div>
          </div>
        </div>
      </section>
      {/* Acess Anywhere Section */}
      <section id="access">
        <div className="section-container my-20">
          <h3>Access Edit Anywhere</h3>
          <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
            Whether you're on the go, or at your computer, you can Edit your videos and photos anywhere and everywhere with simple clicks.
          </p>
          <img src="/image-devices.png" alt="" className="mx-auto" />
        </div>
      </section>
      {/* Superchage Section */}
      <section id="supercharge">
        <div className="section-container my-20">
          <h3>Supercharge your workflow</h3>
          <p className="section-content mb-16 ">We've got the tools to boost your productivity.</p>
          {/* Items container*/}
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            {/*Item 1 */}
            <div className="flex flex-col items-center space-y-5">
              <img src="/icon-blacklist.svg"  className="mb-6" />
              <h5>Create Blacklists</h5>
              <p className="max-w-md text-grayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </div>

            {/*Item 2 */}
            <div className="flex flex-col items-center space-y-5">
              <img src="/icon-text.svg"  className="mb-6" />
              <h5>Plain text snippet</h5>
              <p className="max-w-md text-grayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </div>

            {/*Item 3 */}
            <div className="flex flex-col items-center space-y-5">
              <img src="/icon-preview.svg"  className="mb-6" />
              <h5>Sneak preview</h5>
              <p className="max-w-md text-grayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*Refrences section */}
      <section id='references'>
      <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
        <img src="/logo-google.png" alt="" />
        <img src="/logo-ibm.png" alt="" />
        <img src="/logo-microsoft.png" alt="" />
        <img src="/logo-hp.png" alt="" />
        <img src="/logo-vector-graphics.png" alt="" />
      </div>
      </section>
      {/* Bottom CTA section */}
      <section id="bottom">
        <div className="section-container my-20">
          <h3>Edit for Windows and Mac</h3>
          <p className="section-content mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, veritatis qui officiis deleniti reiciendis debitis ex asperiores omnis obcaecati aliquid impedit ut optio laborum repudiandae iure aut vero excepturi cum.
          </p>
          {/* Button container */}
          <div className="button-container">
          <a href="" className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
              Download for Windows
            </a>
            <a href="" className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
              Download for Mac
            </a>
          </div>
        </div>
      </section>
     {/*

<footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Image /}
            <img src="/e-logo.png" className='mx-auto my-16 h-[150px] w-[150px]' />
             Container for Menus and social 
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
              {/* Menus /}
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                {/* Menu 1 /}
                <div className="flex flex-col space-y-4 text-center md:text-left"> 
                  <div><a href="#" className="hover:text-strongCyan">FAQS</a></div>
                  <div><a href="#" className="hover:text-strongCyan">Contact</a></div>
                  
                </div>
                {/* Menu 2 /}
                <div className="flex flex-col space-y-4 text-center md:text-left"> 
                  <div><a href="#" className="hover:text-strongCyan">Privacy Policy</a></div>
                  <div><a href="#" className="hover:text-strongCyan">Press Kit</a></div>
                  
                </div>
                {/* Menu 3 /}
                <div className="flex flex-col space-y-4 text-center md:text-left"> 
                  <div><a href="#" className="hover:text-strongCyan">Install Guide</a></div>
                </div>
              </div>
              {/* Social Icons /}
              <div className="flex justify-between w-32 py-1">
                <a href="#"><img src="/icon-facebook.svg" className="duration-200" /></a>
                <a href="#"><img src="/icon-twitter.svg" className="duration-200" /></a>
                <a href="#"><img src="/icon-instagram.svg" className="duration-200" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      */} 
      
    </>
  )
}

export default App
