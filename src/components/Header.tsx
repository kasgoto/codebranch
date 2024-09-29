import logo from "../assets/header/logo.svg"
import hero from "../assets/header/hero.png"
import scroll from "../assets/header/scroll.svg"

const Header = () => {
  return (
    <header className='mx-auto max-w-screen-2xl container px-4'>
      <nav className='flex justify-between items-center md:h-[81px] h-[60px] md:text-[20px] text-[16px]'>
        <a href='#' className='hover:opacity-60 transition'>
          <img
            src={logo}
            alt='logo'
            className='grow w-[140px] md:w-[253px] mt-1.5'
          />
        </a>
        <ul className='flex md:gap-[82px] gap-[40px]'>
          <li>
            <a href='#team' className='hover:opacity-60 transition'>
              команда
            </a>
          </li>
          <li>
            <a href='#about' className='hover:opacity-60 transition'>
              о нас
            </a>
          </li>
        </ul>
      </nav>

      <div className='mt-[40px] xl:mt-[80px] flex xl:flex-row flex-col gap-[40px] items-center justify-between max-w-screen-2xl'>
        <div className='md:mb-36 xl:pl-[60px]'>
          <h2 className='text-[36px] text-[#6b73ff]'>
            Быстрая, надежная, качественная ❤️️
          </h2>
          <h1 className='text-[36px]'>Студия онлайн разработки 🔥 </h1>
          <p className='text-[24px] text-[#9c9c9c]'>
            Команда с лучшими веб разработчиками в СНГ 🚀
          </p>
        </div>
        <img src={hero} alt='hero' className='w-[700px]' />
      </div>

      <a href='#team' className='flex justify-center mt-10'>
        <img src={scroll} alt='scroll' />
      </a>
    </header>
  )
}

export default Header
