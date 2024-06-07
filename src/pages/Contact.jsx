import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import { Canvas } from '@react-three/fiber';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const[form,setform]=useState({name:'',email:'',message:''})
  const[isLoading,setIsLoading] =useState(false);
  const formRef =useRef(null);
  const[currentAnimation,setCurrentAnimation]=useState('idle')



  const handleChange =(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  };
  const handleFocus =()=>{
    setCurrentAnimation('walk');
  };
  const handleBlur =()=>{
    setCurrentAnimation('idle');
  };

  const {alert,showAlert ,hideAlert}=useAlert();
  // console.log( import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,)
  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');
    emailjs.send(
    //  import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
     'service_u7lcyyt',
     'template_9uisx5k',
    //  import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
     {
      from_name:form.name,
      to_name:"Ritul",
      from_email:form.email,
      to_email:'ritullunagaria04@gmail.com',
      message:form.message
     },
    //  import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    'XvlVZuWuR9M-uBbbY'

    ).then(()=>{
        setIsLoading(false);
        showAlert({show:true,text:'Message sent successfully!',type:'success'})

        setTimeout(()=>{
          hideAlert();
          setCurrentAnimation('idle')},[3000])

        setform({name:'',email:'',message:''});


    }).catch((error)=>{
      setIsLoading(false);
      setCurrentAnimation('idle')
      console.log(error);
      showAlert({show:true,text:'I didnt receive your message',type:'danger'})
    })
  };
  return (
    <section className=' bg-gray-200 relative flex lg:flex-row flex-col max-container'>
      {alert.show&&<Alert {...alert}/> }
      <div className='flex- min-w-[50%] flex flex-col'>
<h1 className='head-text text-slate-700'>
  Get in Touch
</h1>
<form 
onSubmit={handleSubmit}
className=' w-full flex flex-col gap-7 mt-14'>
  <label className='text-blue-500 font-semibold'>
    Name
    <input type="text"
    name="name"
    className='input'
    placeholder='Name'
    required
    value={form.name}
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur} />
    
  </label>

  <label className='text-blue-500 font-semibold'>
    Email
    <input type="email"
    name="email"
    className='input'
    placeholder='abc@gmail.com'
    required
    value={form.email}
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur} />
    
  </label>

  <label className='text-blue-500 font-semibold'>
    Message
    <textarea
    name="message"
    rows={4}
    className='textarea'
    placeholder='Let me know how I can help you!'
    required
    value={form.message}
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur} />
    
  </label>

  <button 
   type='submit'
   className='btn'
   onFocus={handleFocus}
   disabled={isLoading}
   onBlur={handleBlur}
   >
    {isLoading?'Sending...':'Send Message'}
   </button>

</form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>

        <Canvas
        camera={{
          postion :[0,0,5],
          fov:75,
          near:0.1,
          far:1000
        }}
        >
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <ambientLight intensity={.5} />
<Suspense 
fallback={Loader}>
  <Fox
  currentAnimation={currentAnimation}
  postion={[.5,.35,0]}
  rotation={[12.6,-0.6,0]}
  scale={[.5,.5,.5]}
  />
</Suspense>
        </Canvas>

      </div>
    </section>
  )
}

export default Contact