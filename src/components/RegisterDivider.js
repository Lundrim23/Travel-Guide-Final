import { Link } from "react-router-dom";

const RegisterDivider = () => {
  return (
    <div className='bg-[#1F2937] w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to use our powerful features ?</h1>
                <p>Sign up to our platform and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" name="email" placeholder='Enter Email' />
                    <Link to="/register" className='bg-[#6366F1] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Register</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterDivider