// lib/sanity.server.js
import {createClient} from 'next-sanity'
import {config} from './config'

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient({...config,
    token: process.env.SANITY_API_TOKEN, })