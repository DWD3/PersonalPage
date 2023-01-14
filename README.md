This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building and Running the App with Docker

This app is containerized therefore can be built and run using docker.

To build Docker image, type

```bash
docker build -t [name-you-want-for-your-image] .
```

To run the image, type

```bash
docker run -p 3000:3000 [name-you-want-for-your-image]
```

## Deploy the App

Because this App is containerized, it can be deployed to any cloud platform that supports running a docker container.

Google cloud platform's Cloud Run and Cloud Build combo would be a good choice to easily get things running. Please Refer to the documentation on GCP for a step by step guide. On a high level, the quickest way would be to just:

1. Create a new Cloud Run service under one of your GCP project.
2. When setting it up, Either upload your built docker image to GCP's container registery OR choose "Continuously deploy new revisions from a source repository" and point the code source to a Git repo which will give you CI/CD. The latter is more convenient.
3. Since this is a public web app, "Allow unauthenticated invocations" should be selected, the rest of the settings can just be default.
4. Once the service is running, you should be able to access the web page from the URL on your GCP console.
5. \*Bonus: GCP(in selected regions) also provides a domain mapping service to map the service to a custom domain. It will even provide you with SSL out of the box. The service is currently in beta as of 2022 but it's working fine based on my testing.

An instance of the App is running here: [jingcheng.au](https://jingcheng.au)
