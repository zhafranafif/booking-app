'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/BHLogo.png" 
      height="90" 
      width="90" 
      alt="Logo" 
    />
   );
}
 
export default Logo;
