import AboutCard from "./AboutCard"

const About = () => {
  return (
    <section
      id='about'
      className='text-center md:mt-[172px] mt-[80px] md:pb-[250px] pb-[100px] bg-aboutGradient'
    >
      <div className='mx-auto max-w-screen-2xl container xl:px-[60px]'>
        <h2 className='text-[36px]'>О нас</h2>
        <div className='md:p-[100px] p-[50px] bg-[#f6f6f6] rounded-[25px] md:mt-[60px] mt-[30px] flex flex-col lg:grid grid-cols-2 gap-y-10 gap-x-20 items-center justify-between text-black'>
          <AboutCard
            emoji='🤓'
            title='Команда основана в 2019 году'
            description='Сначала это были маленькие пет проекты'
          />
          <AboutCard
            emoji='🥳'
            title='Старт фриланс карьеры в 2020'
            description='Начали брать мелкие заказы на фриланс'
          />
          <AboutCard
            emoji='🚀'
            title='Набор сотрудников в команду'
            description='В настоящее время расширяем состав команды'
          />
          <AboutCard
            emoji='📈'
            title='Работа с большими компаниями'
            description='в 2022 начали работать с большими компаниями'
          />
        </div>
      </div>
    </section>
  )
}

export default About
