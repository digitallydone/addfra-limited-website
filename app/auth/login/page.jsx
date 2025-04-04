// "use client";

// import { useState, Suspense } from "react";
// import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import { signIn } from "next-auth/react";
// import { Eye, EyeOff, Mail, Lock } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { login } from "@/app/actions/auth";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     const formData = new FormData(e.currentTarget);
//     const email = formData.get("email");
//     const password = formData.get("password");

//     // Validate form data
//     const validationResult = await login(formData);
//     if (!validationResult.success) {
//       setError("Please check your credentials and try again.");
//       setIsLoading(false);
//       return;
//     }

//     // Sign in with NextAuth
//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     if (result?.error) {
//       setError("Invalid email or password");
//       setIsLoading(false);
//     } else {
//       // Force a hard redirect to ensure the session is fully established
//       window.location.href = callbackUrl;
//     }
//   };

//   const handleSocialSignIn = (provider) => {
//     signIn(provider, { callbackUrl });
//   };

//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <main className="flex min-h-screen items-center justify-center bg-slate-50 py-12 px-4">
//         <Card className="w-full max-w-md shadow-lg">
//           <CardHeader className="space-y-1 text-center">
//             <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
//             <CardDescription>
//               Sign in to your account to continue
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Tabs defaultValue="email" className="w-full">
//               <TabsList className="grid w-full grid-cols-2 mb-6">
//                 <TabsTrigger value="email">Email</TabsTrigger>
//                 <TabsTrigger value="phone">Phone</TabsTrigger>
//               </TabsList>

//               <TabsContent value="email">
//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <div className="relative">
//                       <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="Enter your email"
//                         className="pl-10"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <Label htmlFor="password">Password</Label>
//                       <Link
//                         href="/auth/forgot-password"
//                         className="text-sm text-primary hover:underline"
//                       >
//                         Forgot password?
//                       </Link>
//                     </div>
//                     <div className="relative">
//                       <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
//                       <Input
//                         id="password"
//                         name="password"
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Enter your password"
//                         className="pl-10 pr-10"
//                         required
//                       />
//                       <Button
//                         type="button"
//                         variant="ghost"
//                         size="icon"
//                         className="absolute right-0 top-0 h-10 w-10 text-slate-400"
//                         onClick={togglePasswordVisibility}
//                       >
//                         {showPassword ? (
//                           <EyeOff className="h-4 w-4" />
//                         ) : (
//                           <Eye className="h-4 w-4" />
//                         )}
//                       </Button>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-2">
//                     <Checkbox id="remember" name="remember" />
//                     <Label htmlFor="remember" className="text-sm">
//                       Remember me
//                     </Label>
//                   </div>

//                   {error && (
//                     <div className="bg-red-50 p-3 rounded-md">
//                       <p className="text-sm text-red-500">{error}</p>
//                     </div>
//                   )}

//                   <Button type="submit" className="w-full" disabled={isLoading}>
//                     {isLoading ? "Signing In..." : "Sign In"}
//                   </Button>
//                 </form>
//               </TabsContent>

//               <TabsContent value="phone">
//                 <form className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <Input
//                       id="phone"
//                       type="tel"
//                       placeholder="Enter your phone number"
//                       required
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <Label htmlFor="password-phone">Password</Label>
//                       <Link
//                         href="/auth/forgot-password"
//                         className="text-sm text-primary hover:underline"
//                       >
//                         Forgot password?
//                       </Link>
//                     </div>
//                     <div className="relative">
//                       <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
//                       <Input
//                         id="password-phone"
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Enter your password"
//                         className="pl-10 pr-10"
//                         required
//                       />
//                       <Button
//                         type="button"
//                         variant="ghost"
//                         size="icon"
//                         className="absolute right-0 top-0 h-10 w-10 text-slate-400"
//                         onClick={togglePasswordVisibility}
//                       >
//                         {showPassword ? (
//                           <EyeOff className="h-4 w-4" />
//                         ) : (
//                           <Eye className="h-4 w-4" />
//                         )}
//                       </Button>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-2">
//                     <Checkbox id="remember-phone" />
//                     <Label htmlFor="remember-phone" className="text-sm">
//                       Remember me
//                     </Label>
//                   </div>

//                   <Button type="submit" className="w-full">
//                     Sign In
//                   </Button>
//                 </form>
//               </TabsContent>
//             </Tabs>

//             <div className="relative my-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-slate-200"></div>
//               </div>
//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="bg-white px-2 text-slate-500">
//                   Or continue with
//                 </span>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <Button
//                 variant="outline"
//                 className="w-full"
//                 onClick={() => handleSocialSignIn("google")}
//                 type="button"
//               >
//                 <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
//                   <path
//                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                     fill="#4285F4"
//                   />
//                   <path
//                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                     fill="#34A853"
//                   />
//                   <path
//                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                     fill="#FBBC05"
//                   />
//                   <path
//                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                     fill="#EA4335"
//                   />
//                   <path d="M1 1h22v22H1z" fill="none" />
//                 </svg>
//                 Google
//               </Button>
//               <Button
//                 variant="outline"
//                 className="w-full"
//                 onClick={() => handleSocialSignIn("facebook")}
//                 type="button"
//               >
//                 <svg
//                   className="mr-2 h-4 w-4"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
//                 </svg>
//                 Facebook
//               </Button>
//             </div>
//           </CardContent>
//           <CardFooter className="flex flex-col space-y-4">
//             <div className="text-center text-sm">
//               Don't have an account?{" "}
//               <Link
//                 href="/auth/register"
//                 className="text-primary hover:underline"
//               >
//                 Sign up
//               </Link>
//             </div>
//           </CardFooter>
//         </Card>
//       </main>
//     </Suspense>
//   );
// }




"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { login } from "@/app/actions/auth"

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")

    const validationResult = await login(formData)
    if (!validationResult.success) {
      setError("Please check your credentials and try again.")
      setIsLoading(false)
      return
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError("Invalid email or password")
      setIsLoading(false)
    } else {
      window.location.href = callbackUrl
    }
  }

  const handleSocialSignIn = (provider) => {
    signIn(provider, { callbackUrl })
  }

  return (
    <Tabs defaultValue="email" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="email">Email</TabsTrigger>
        <TabsTrigger value="phone">Phone</TabsTrigger>
      </TabsList>

      <TabsContent value="email">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input id="email" name="email" type="email" placeholder="Enter your email" className="pl-10" required />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="pl-10 pr-10" required />
              <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-10 w-10 text-slate-400" onClick={togglePasswordVisibility}>
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {error && <div className="bg-red-50 p-3 rounded-md"><p className="text-sm text-red-500">{error}</p></div>}

          <Button type="submit" className="w-full" disabled={isLoading}>{isLoading ? "Signing In..." : "Sign In"}</Button>
        </form>
      </TabsContent>

      <TabsContent value="phone">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password-phone">Password</Label>
              <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input id="password-phone" type={showPassword ? "text" : "password"} placeholder="Enter your password" className="pl-10 pr-10" required />
              <Button type="button" variant="ghost" size="icon" className="absolute right-0 top-0 h-10 w-10 text-slate-400" onClick={togglePasswordVisibility}>
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <Button type="submit" className="w-full">Sign In</Button>
        </form>
      </TabsContent>
    </Tabs>
  )
}

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 py-12 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<p>Loading...</p>}>
            <LoginForm />
          </Suspense>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full" onClick={() => signIn("google", { callbackUrl: "/" })} type="button">
              Google
            </Button>
            <Button variant="outline" className="w-full" onClick={() => signIn("facebook", { callbackUrl: "/" })} type="button">
              Facebook
            </Button>
          </div>
        </CardContent>
        <CardFooter className="text-center text-sm">
          Don't have an account? <Link href="/auth/register" className="text-primary hover:underline">Sign up</Link>
        </CardFooter>
      </Card>
    </main>
  )
}
