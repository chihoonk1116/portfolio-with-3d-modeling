import { useRef } from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import AnimatedTextLines from '../components/AnimatedTextLines'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const About = () => {

  const text = `
    Lorem ipsum dolor sit amet
    adipisicing elit. obcaecati ab aperiam
    laboriosam nam dolorem, harum ullam inventore!
  `
  const aboutText = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Magnam nesciunt repellendus voluptates autem voluptate eius tempore, quasi praesentium, 
    qui sed vero neque et sunt nihil quia omnis nam quibusdam veniam error accusantium! 
    Non, quisquam harum vero maxime recusandae quia quas sint eveniet cumque porro culpa et dolorum quis. 
    Quas, distinctio?
  `

  const imgRef = useRef(null)
  
  useGSAP(()=>{
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false
      },
      ease: "power1.inOut"
    })

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 50%",
      }
    })

  }, [])

  return (
    <section id="about" className='min-h-screen bg-black rounded-b-4xl'>
      <AnimatedHeaderSection 
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div 
        className="flex flex-col items-center justify-between gap-16 px-10 
          pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60"
      >
        <img ref={imgRef} src="images/man.jpg" alt="man" className='w-md rounded-3xl'/>
        <AnimatedTextLines text={aboutText} className={"w-full"}/>
      </div>
    </section>
  )
}

export default About
