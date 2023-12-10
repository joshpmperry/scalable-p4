import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import {
  ArrowDownToLine,
  CheckCircle,
  Leaf,
} from 'lucide-react'


export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-[#143642] sm:text-6xl'>
            Looking for {' '}
            <span className='text-[#358CAC]'>
              Late Tokens?
            </span>
            
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Welcome to Procrastination Station
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href="/LateToken">
              <Button variant='default' size={'lg'}>
                Buy Tokens
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
