import { NextResponse } from 'next/server'

const protectedRoutes = ['/profile']

export function middleware(request) {
  const token = request.cookies.get('token')?.value 

  if (protectedRoutes.some((path) => request.nextUrl.pathname.startsWith(path))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}
