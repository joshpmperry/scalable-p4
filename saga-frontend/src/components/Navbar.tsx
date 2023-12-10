import { BadgeCent } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { cookies } from 'next/headers'
import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"


const Navbar = async () => {
  const nextCookies = cookies()
  // const { user } = await getServerSideUser(nextCookies)
  const user = null

  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-white'>
        <MaxWidthWrapper>
          <div className='border-b border-gray-200'>
            <div className='flex h-16 items-center'>
              <div className='ml-4 flex lg:ml-0'>
                <Link href='/'>
                  <BadgeCent color="#358CAC" className='h-10 w-10' />
                </Link>
              </div>

              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  {user ? null : 
                    <Link
                    href='/sign-in'
                    className={buttonVariants({variant: 'ghost', })}>
                    Sign-In
                  </Link>
                  }

                  {user ? null: <span className='h-6 w-px bg-gray-200' aria-hidden='true'/>}

                  {user ? (
                    <p></p>
                  )
                  : 
                    <Link
                      href='/sign-up'
                      className={buttonVariants({variant: 'ghost', })}>
                      Sign-Up
                    </Link>
                  }

                  
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar