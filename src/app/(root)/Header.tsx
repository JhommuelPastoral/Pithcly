import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <>
      <div className="h-full flex items-center gap-2 border-b border-red-600 ">
        <Rocket 
          size={30}
          strokeWidth={2}
          color='red'
          fill='#1b9bd8'
        />
        <p className='text-lg font-semibold tracking-[2px]'>PITCHLY</p>
      </div>
      <div>
        asd
      </div>
    </>
  );
}