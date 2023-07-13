import image from '../assets/illustration-sign-up-desktop.svg'
import imageMobile from '../assets/illustration-sign-up-mobile.svg'
import success from '../assets/icon-success.svg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Subscribe = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === "") {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        } else {
            navigate("/success")
        }

    }
    console.log(email)

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640)
        }

        handleResize()

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    },[])

    const imageSrc = isMobile ? imageMobile : image

  return (
    <main className="w-screen h-screen charcoal flex justify-center items-center">
    <div className="bg-white w-[60rem] h-[40rem] rounded-3xl max-sm:h-screen max-sm:rounded-none">
      <div className='flex justify-between max-sm:flex-col-reverse'>
        <div className=' flex flex-col my-20 ml-14 max-sm:ml-6'>
          <h1 className='font-bold text-[3rem] mb-4 max-sm:text-[2.1rem]'>Stay updated!</h1>
          <p className='w-10/12 max-sm:w-11/12'>Join 60,00+ products managers receiving monthly updates on: </p>
          <ul className='flex flex-col gap-3 mt-10 max-sm: w-10/12'>
            <li className='flex'><img src={success} alt="success" className='w-5' /><p className='ml-4'>Product discovery and building what matters</p></li>
            <li className='flex'><img src={success} alt="success" className='w-5' /><p className='ml-4'>Measuring to ensure updates are a success</p></li>
            <li className='flex'><img src={success} alt="success" className='w-5' /><p className='ml-4'>And much more!</p></li>
          </ul>
          <div className='mt-10 mb-2 flex justify-between w-10/12 max-sm:w-8/12'>
          <span className='text-sm font-bold'>Email address</span>
          {error && <span className='text-sm font-bold text-red-500'> Valid email required</span>}
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col'>
          <input type="email" placeholder='email@company.com' className={`w-[23rem] border p-[.8rem] rounded-lg px-5 text-sm ${error && "border-red-500 bg-red-100 outline-red-500"} max-sm:w-[20.5rem]`} onChange={handleChange} />
          <button className='dark-slate-grey text-white rounded-lg py-[.8rem] w-[23rem] mt-5 active:bg-red-400 max-sm:w-[20.5rem]'>Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div className='mr-10 mt-6 max-sm:m-0 max-sm:h-6/12 flex'>
          <img src={imageSrc} alt="image-sign-up" className='max-sm:w-[30rem]'/>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Subscribe