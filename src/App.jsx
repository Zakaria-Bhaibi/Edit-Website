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
                    <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
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
    </>
  )
}

export default App
