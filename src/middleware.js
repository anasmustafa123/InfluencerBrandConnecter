import { NextResponse } from 'next/server'

const protectedRoutes = ['/packages', '/packageoverview', '/influencerprofile', '/brandprofile']
const unprotectedRoutes = ['/signup', '/login']

export function middleware(request) {
  const token = request.cookies.get('token')?.value 
  console.log({middleware: token})

  if (protectedRoutes.some((path) => request.nextUrl.pathname.startsWith(path))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }else if (unprotectedRoutes.some((path) => request.nextUrl.pathname.startsWith(path))) {
    if (token) {
      console.log('home')
      return NextResponse.redirect(new URL('/home', request.url))
    }
  }

  return NextResponse.next()
}
