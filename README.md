# Introduction to NEXT.JS 13/14

This is my first NEXT project. It features basic API fetching, popup modal and some tailwind use

## Running the app

First, run the json server (download if necessary):

```bash
json-server --watch --port 4000 ./_data/db.json
```

Secondly, run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## How to use

 - The initial home page is the dashboard, the button view tickets fetches the tickets from the json server and displays the on another page. Alternatively the `tickets` button on the navbar can be used.

 - The person icon on the navbar takes you to `/account/LogIn` where a user can log in, or use the `sign up` button to create a new user.

 - If you go to `tickets/create` you can create your own ticket, which will be displayed on the `tickets page`, the app will redirect you to the said page and refresh the route in order to view the newly added ticket

## Other remarks
The app has utilized the caching features that NEXT.JS provides, which in turn makes the code blazingly fast