import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";


function Contact(){
    const [isSending, setIsSending] = useState(false)
    const [status, setStatus ] = useState("")

    const sendingMessage = async(event: FormEvent<HTMLFormElement>)=>{
         event.preventDefault();
      const form = event.currentTarget;
      setIsSending(true)
      setStatus(" ")
      try{
       await  emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          
        }
       )
       setStatus("Message sent successfully!")
       form.reset()
}catch(error){
console.log("Emailjs Error", error)
setStatus("Failed to sent the message!")
}finally{
setIsSending(false)
}
}
    return(
        
          <section
    id="contact"
    className="min-h-screen scroll-mt-20 flex flex-col justify-center shadow-lg shadow-purple-500/30 py-3 px-6 w-full dark:bg-gradient-to-t
     dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 bg-slate-50 bg-linear-to-b from-blue-200 to-white"
>
               <div>
         <span className="block text-center text-4xl md:text-6xl font-bold text-purple-400">
  Contact
</span>
                <div >
   <form onSubmit={sendingMessage}                    
    >
     <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mt-16 w-full">
                     <div className=" dark:bg-slate-900 dark:text-white  flex flex-col gap-4 w-full md:w-[400px]">
                        <input
                        type="text"
                         name="from_name"
                         placeholder="Your Name"
                         required
                         className="rounded-2xl shadow-lg shadow-purple-500/30 py-3 px-6 w-full"
                         />
                         <input
                        type="email"
                         name = "form_email"
                         placeholder="Email Address"
                         required
                         className="rounded-2xl shadow-lg shadow-purple-500/30 py-3 px-6 w-full"
                         />
                         <input
                        type="tel"
                        name= "phone"
                         placeholder="Phone Number"
                           className="rounded-2xl shadow-lg shadow-purple-500/30 py-3 px-6"
                         />
                          <textarea
                         name = "message"
                         placeholder="How can I help You ?"
                         required
                           className="rounded-2xl shadow-lg shadow-purple-500/30 py-3 px-6"
                         />
                    </div>
                    <div className="hidden md:flex  dark:text-white flex flex-col gap-4">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                             width="36" height="36" viewBox="0 0 24 24"
                              fill="none" stroke="purple" strokeWidth="2"
                               strokeLinecap="round" strokeLinejoin="round"
                                className="mt-2 lucide lucide-phone preview-icon">
                            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                          <span>
                            <p>Phone</p>
                            <p>+251 917230596</p>
                          </span>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                             width="36" height="36" viewBox="0 0 24 24"
                              fill="none" stroke="purple" strokeWidth="2"
                               strokeLinecap="round" strokeLinejoin="round" 
                               className="mt-2 lucide lucide-mail preview-icon">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
                                <rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                          <span>
                            <p>Email</p>
                            <p>sumeyasabit2004@gmail.com</p>
                          </span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                             width="36" height="36" viewBox="0 0 24 24" 
                             fill="none" stroke="purple" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round" 
                              className="mt-2 lucide lucide-map-pin preview-icon">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                            <span>
                            <p>location</p>
                            <p>Addis Ababa, Ethiopia</p>
                          </span> 
                       
                </div>
                 </div>
                 </div>
                 
<motion.div
  className="relative isolate overflow-hidden w-full max-w-[700px] mx-auto flex justify-center rounded-full bg-purple-400 py-3 px-6 text-white mt-10"
>
  {status && (
  <p className="text-center mt-4 font-semibold dark:text-white">
    {status}
  </p>
)}
  <button
    type="submit"
    disabled={isSending}
    className="relative z-10"
  >
    {isSending ? "Sending..." : "Send Message"}
  </button>
</motion.div>
                 </form>  
                </div>
                </div>
            </section>
       
    )

}
export default Contact