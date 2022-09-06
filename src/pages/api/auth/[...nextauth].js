import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

const baseConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

const requester = axios.create(baseConfig);

const providers = [
  CredentialsProvider({
    name: 'Credentials',
    authorize: async (credentials) => {
      try {
        // Authenticate user with credentials
        const response = await requester.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
          password: credentials.password,
          email: credentials.email,
        });

        if (response.data.data) {
          return response.data.data;
        }

        return null
      } catch (e) {
        throw new Error(e);
      }
    }
  })
]

const callbacks = {
  async jwt ({ token, user }) {
    if (user) {
      const { access_token } = user;
      token.accessToken = access_token;
    }
    return Promise.resolve(token);
  },
  async session(session) {
    return Promise.resolve(session);
  },
}

export const options = {
  providers,
  callbacks,
}

const Auth = (req, res) => NextAuth(req, res, options)
export default Auth;
