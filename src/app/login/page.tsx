"use client";
import { ThemeToggle } from "@/components/Theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
const router = useRouter()

  const handleLoginAdmin = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setIsLoading(false);
    if (!res?.ok) {
      return setErrorMessage(res?.error ? res?.error : null);
    }
  router.push("/dashboard")
   
    // window.location.replace("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen">
       <form onSubmit={handleLoginAdmin}>
     <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle className="text-2xl flex justify-between">Anam Login <ThemeToggle/></CardTitle>
      <CardDescription>
        Enter your email below to login to your account.
      </CardDescription>
    </CardHeader>
    <CardContent className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input name="email" type="email" placeholder="admin@rafiulaanam.com" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" placeholder="**********" required />
      </div>
    </CardContent>
    <CardFooter>
      {
        isLoading ? 
        <Button disabled className="w-full">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      :

      <Button type="submit" className="w-full">Sign in</Button>
      }

    </CardFooter>
  </Card>
   </form>
    </div>
  
  );
};

export default Login;
