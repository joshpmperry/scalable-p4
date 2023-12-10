'use client'

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ArrowRight, BadgeCent, Regex } from "lucide-react"
import Link from "next/link"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import { useState } from "react"

const Page = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const addReq = () => {
        fetch("http://localhost:3000/api/token", {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            "content-type": "application/json",
          },
        }).catch((e) => console.log(e));
      };
  return (
    <>
      <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            <BadgeCent className='h-20 w-20' />
            <h1 className='text-2xl font-semibold tracking-tight'>
                Sign In!
            </h1>

            <Link href='/sign-up'
              className={buttonVariants({ variant: 'link', className: 'gap-1.5', })}>
              Dont have an account? Sign-up
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>

          <div className='grid gap-6'>
            <form onSubmit={(e) => addReq()}>
              <div className='grid gap-2'>
                <div className='grid gap-1 py-2'>
                  <Label htmlFor='username'>Username</Label>
                    <Input
                      placeholder='username'
                    />
                </div>
                <div className='grid gap-1 py-2'>
                  <Label htmlFor='password'>Password</Label>
                  <Input type='password'
                    placeholder='********'
                  />
                </div>
                <Button>Sign in</Button>

              </div>
            
              
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Page