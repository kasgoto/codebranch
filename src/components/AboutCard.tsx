interface AboutCardProps {
  emoji: string
  title: string
  description: string
}

const AboutCard: React.FC<AboutCardProps> = (props) => {
  return (
    <div className='md:max-w-[600px] max-w-[332px] min-h-[273px] px-2 rounded-[25px] bg-[#d9d9d9] pt-[20px] pb-[57px] flex flex-col items-center gap-2 hover:shadow-xl transition'>
      <p className='md:text-[80px] text-[60px]'>{props.emoji}</p>
      <h3 className='md:text-[32px] text-[24px]'>{props.title}</h3>
      <p className='md:text-[22px] text-[18px] text-[#414141]'>
        {props.description}
      </p>
    </div>
  )
}

export default AboutCard
