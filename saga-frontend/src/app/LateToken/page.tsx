'use client'

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function LateToken() {

    const [username, setUsername] = useState("");
    const [grades, setGrades] = useState("");
    const addReq = () => {
        fetch("http://localhost:3000/api/token", {
          method: "POST",
          body: JSON.stringify({
            username,
            grades,
          }),
          headers: {
            "content-type": "application/json",
          },
        }).catch((e) => console.log(e));
      };

    return (
        <>
            <MaxWidthWrapper>
                <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
                <h1 className='text-4xl font-bold tracking-tight text-[#143642] sm:text-6xl'>
                    <span className='text-[#358CAC]'>
                    Late Tokens
                    </span>
                    
                </h1>
                <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
                    at only 10 % of your total grade :D
                </p>
                <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                    <Link href="/LateToken">
                        <Button onSubmit={(e) => addReq()} variant='default' size={'lg'}>
                            POST req
                        </Button>
                    </Link>
                </div>
                </div>
            </MaxWidthWrapper>
        </>
    )
}