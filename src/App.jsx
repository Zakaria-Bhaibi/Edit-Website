import './App.css'
import logo from '/e-logo.png'
function App() {  
  return (
    <>
      {/* Hero Section */}
      <section id='hero'>
        <div className="section-container mb-40 p-10 pt-16">
          <img src={logo} alt="" className="mx-auto my-16 h-[150px] w-[150px]" />
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
          <div className="section-container my-20 px-10">
              <h3 >
                Edit the World
              </h3>
              <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
              Elevate your edits with "Edit." Enhance videos and images with ease, from basic tweaks to advanced techniques like motion tracking. Unleash your potential and turn raw content into masterpieces using our comprehensive toolkit.
              </p>
          </div>
      </section>
    </>
  )
}

export default App
