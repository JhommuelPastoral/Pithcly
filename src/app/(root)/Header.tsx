import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { signIn } from "@/auth"

export default function Header() {


  return (
    <>
      <div className="flex items-center w-full h-full">
        <Image
          src={'/pitchly-logo.png'}
          alt='pitchly-logo'
          width={100}
          height={64}
          priority={true}
          className='object-cover object-center h-full cursor-pointer'
        >
        </Image>

      </div>
      <div className='flex items-center h-full font-poppins'>
        <form action={
          async () => {
            "use server"
            await signIn('google', {redirectTo: '/dashboard'})
          }}
        >
          <Button 
            className='flex items-center gap-2 cursor-pointer group' 

          >
            <Image 
              src={'/google-logo.png'}
              width={24}
              height={24}
              alt='google-logo'
              className='object-cover object-center h-full cursor-pointer'
            />
            <span >Login</span>
          </Button>


        </form>


      </div>

    </>
  );
}