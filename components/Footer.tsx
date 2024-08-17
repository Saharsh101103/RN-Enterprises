import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import { Input } from "./ui/input"

const companyName = "RN-Enterprises"

export default function Component() {
  return (
    <footer className="bg-foreground py-12 text-muted">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold"> {companyName}</span>
          </Link>
          <p className="text-sm leading-relaxed">Get the best expert advice for all your financial concerns.</p>
          <div className="flex items-center gap-3">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <FacebookIcon className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <TwitterIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <InstagramIcon className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Shop
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Contact
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Customer Service</h3>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            FAQs
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Returns
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Shipping
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="text-sm">Subscribe to our newsletter to get the latest updates.</p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md bg-background px-3 py-2 text-sm"
            />
            <Button type="submit" className="rounded-md bg-primary px-4 py-2 text-sm text-secondary-foreground">
              Subscribe
            </Button>
          </form>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm">
            1234 Main St, Anytown USA 12345
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@acmeinc.com
          </p>
        </div>
      </div>
      <div className="mt-8 border-t pt-8 text-center text-sm">
        <p>&copy; 2024 {companyName}. All rights reserved.</p>
      </div>
    </footer>
  )
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}