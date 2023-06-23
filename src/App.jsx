import './App.css'
import logo from './assets/e-logo.png'
function App() {  
  return (
    <>
      {/* Hero Section */}
      <section id='hero'>
        <div className="max-w-6xl mx-auto text-center mb-40 p-10 pt-16">
          <img src={logo} alt="" className="mx-auto my-16 h-[150px] w-[150px]" />
          <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
          Edit: Your Ultimate Editing Companion
          </h3>
          <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
          Edit: Powerfully simple editing software. Transform content with precision. Elevate your skills. Create captivating visuals effortlessly.
          </p>
          {/* Button container */}
          <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
            <a href="" className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
              Download for Windows
            </a>
            <a href="" className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
              Download for Mac
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
