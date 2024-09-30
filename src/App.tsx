import About from "./components/About"
import Header from "./components/Header"
import Team from "./components/Team"

function App() {
  return (
    <div className='font-kantumruy bg-[#1d1c24] h-full w-full text-white text-[24px]'>
      <Header />
      <Team />
      <About />
    </div>
  )
}

export default App
