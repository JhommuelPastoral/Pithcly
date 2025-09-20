'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dispatch, SetStateAction } from "react"

type LoginModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function LoginModal({ isOpen, setIsOpen }: LoginModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <p>Login to your account</p>
            <Button size={'sm'} variant={'destructive'} onClick={() => setIsOpen(false)}>X</Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-col gap-2">

          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
