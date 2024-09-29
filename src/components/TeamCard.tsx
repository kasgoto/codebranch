import React from "react"

interface TeamCardProps {
  image: string
  name: string
  position: string
}

const TeamCard: React.FC<TeamCardProps> = (props) => {
  return (
    <div className='w-[332px] py-[40px] px-[20px] flex flex-col items-center gap-2 rounded-[25px] bg-white hover:shadow-xl transition'>
      <img
        src={props.image}
        alt='profile picture'
        className='w-[223px] rounded-full'
      />
      <h3 className='md:text-[48px] text-[32px]'>{props.name}</h3>
      <p className='md:text-[20px] text-[18px] text-[#5b5b5b]'>{props.position}</p>
    </div>
  )
}

export default TeamCard
