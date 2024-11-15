import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://clpyawrmyngimdqwhedd.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNscHlhd3JteW5naW1kcXdoZWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NDI3NTUsImV4cCI6MjA0NzExODc1NX0.-j462tY_x88T4tq2zY3V2AzTt-o7Mz0bfdGjVhdE1Mg",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNscHlhd3JteW5naW1kcXdoZWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NDI3NTUsImV4cCI6MjA0NzExODc1NX0.-j462tY_x88T4tq2zY3V2AzTt-o7Mz0bfdGjVhdE1Mg"
    }
})