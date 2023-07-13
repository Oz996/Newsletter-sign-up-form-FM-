import success from '../assets/icon-success.svg'

const Success = () => {
  return (
    <main className="w-screen h-screen charcoal flex justify-center items-center">
        <div className="bg-white rounded-3xl w-[30rem] h-[30rem] flex flex-col px-12 py-11 gap-8 max-sm:h-screen max-sm:rounded-none max-sm:w-screen max-sm:px-6">
            <img src={success} alt="success" className='w-14 max-sm:mt-20' />
            <h1 className='text-5xl font-bold max-sm:text-4xl'>Thanks for subscribing!</h1>
            <p className='max-sm:text-sm'>A confirmation email has been sent to <b>ash@loremcompany.com.</b> Please 
            open it and click the button inside to confirm your subscription</p>
            <button className='dark-slate-grey text-white rounded-lg py-[.8rem] active:bg-red-400 max-sm:w-[20.5rem] max-sm:fixed bottom-8'>Dismiss message</button>
        </div>
    </main>
  )
}

export default Success