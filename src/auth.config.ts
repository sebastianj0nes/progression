import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig = {
    pages: {
        signIn: '/login',
        signOut: '/logout'
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/');
            const publicRoutes = ['/login', '/logout'];

            if (isOnDashboard && !publicRoutes.includes(nextUrl.pathname)) {
                // If the URL requires authentication and is not a public route
                if (isLoggedIn) {
                    // User is authenticated, allow access
                    return true;
                } else {
                    // User is not authenticated, redirect to login page
                    return Response.redirect(new URL('/login', nextUrl));
                }
            } else {
                // If the URL does not require authentication or is a public route
                if (isLoggedIn && nextUrl.pathname === '/login') {
                    // Redirect authenticated users away from the login page
                    return Response.redirect(new URL('/', nextUrl));
                } else {
                    // Allow access to public routes regardless of authentication status
                    return true;
                }

            }
        }
    },
    providers: [Credentials({})],
} satisfies NextAuthConfig;