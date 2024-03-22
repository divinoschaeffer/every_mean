import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

function isAuthentificate(request: NextRequest): boolean{
    return request.cookies.has('token');
}

export function middleware(request: NextRequest){
    if(request.nextUrl.pathname.startsWith('/dashboard')){
        if(!isAuthentificate(request)){
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
}