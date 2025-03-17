import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

const ContactPage = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast.success("Thank you for your interest! We'll be in touch soon.")
      setEmail('')
    } else {
      toast.error('Please enter your email address')
    }
  }

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Login Image */}
      <div className="w-full md:w-1/2 relative overflow-hidden min-h-[300px] md:min-h-screen">
        <img
          src="/login.webp"
          alt="Credit card with coins"
          className="absolute w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Email Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-[608px] h-[249px] mx-auto">
          <Link
            to="/"
            className="absolute w-[58px] top-[92px] right-[92px] z-10 font-['IBM_Plex_Mono'] font-bold text-[48px] leading-[0px] tracking-[-0.1px] align-middle text-black no-underline"
          >
            TS
          </Link>
          <div className="text-center">
            <h1 className="w-[393px] h-[29px] text-center mx-auto font-['Inter'] font-semibold text-[20px] leading-[120%] tracking-[-0.02em] text-[#1E1E1E]">
              Enter your Email
            </h1>
            <p className="w-[393px] h-[20px] mx-auto text-center font-body font-normal text-sm leading-[140%] tracking-[0] align-middle text-[#2C2C2C]">
              Enter your email, and we'll keep you updated on our launch.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex justify-center mt-6 space-x-4"
            >
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[249px] h-[40px] rounded-md border border-[#D9D9D9] px-4 py-3 bg-white"
              />
              <Button
                type="submit"
                className="w-[77px] h-[40px] bg-[#000000] rounded-md text-base leading-[100%] text-[#F5F5F5]"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactPage
