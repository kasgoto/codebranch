import TeamCard from "./TeamCard"
import founder from "../assets/team/image-1.png"
import backend from "../assets/team/image.png"
import frontend from "../assets/team/image-2.jpg"

const Team = () => {
  return (
    <section
      id='team'
      className='mx-auto max-w-screen-2xl container md:mt-[145px] mt-[80px] xl:px-[60px]'
    >
      <div className=" md:pt-[50px] pt-[30px] md:pb-[140px] pb-[70px] text-black text-center  px-[60px] bg-[#f6f6f6] rounded-[25px] ">
        <h2 className='md:text-[48px] text-[32px]'>Команда \\\ Dream team</h2>
        <div className='flex xl:flex-row flex-col items-center gap-6 justify-between w-5/6 md:mt-[66px] mt-[30px] mx-auto'>
          <TeamCard
            image={founder}
            name='stamp_qw'
            position='founder\\\ full-stack developer'
          />
          <TeamCard
            image={backend}
            name='gladiator'
            position='founder\\\ back-end\\\ devops'
          />
          <TeamCard
            image={frontend}
            name='kas.goto'
            position='front-end developer'
          />
        </div>
      </div>
    </section>
  )
}

export default Team
