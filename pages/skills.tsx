import Layout from "../layout/layout";
import { getSession } from "next-auth/react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Skills() {
  return (
    <Layout>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-gray-600">
                  What is..?
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  NEXT JS
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Next.js is a React framework for building full-stack web
                  applications. You use React Components to build user
                  interfaces, and Next.js for additional features and
                  optimizations.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://www.rlogical.com/wp-content/uploads/2023/03/1-copy-8.webp"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Everything we can do in React we can also do in Next.js – with
                  some additional features like routing, API calls,
                  authentication, and more. We don’t have these features in
                  React. Instead, we have to install some external libraries and
                  dependencies – like React Router for routing in a single page
                  React app, for example.
                </p>
                <p>
                  But in Next.js, things are different. We don’t have to rely on
                  external libraries to get these kinds of things done. They
                  come built into the package when we create a Next.js app. This
                  is the main reason why a Next.js app is different from a
                  traditional React app.
                </p>
                <p>
                  This is the main reason why a Next.js app is different from a
                  traditional React app.
                </p>

                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CloudArrowUpIcon
                      className="mt-1 h-5 w-5 flex-none text-gray-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Routing
                      </strong>{" "}
                      Next.js uses the file system to enable routing in the app.
                      Next automatically treats every file with the extensions
                      .js, .jsx, .ts, or .tsx under the pages directory as a
                      route.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-gray-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Server Side Rendering
                      </strong>{" "}
                      In Server Side Rendering, the user interface that we see
                      on the screen is not generated by the browser, but on the
                      server. When an application loads, it does not need to
                      parse the user interface on the browser. Instead it comes
                      from the server side, that has been generated in advance
                      in the server.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ServerIcon
                      className="mt-1 h-5 w-5 flex-none text-gray-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Next Auth
                      </strong>{" "}
                      NextAuth.js is a complete open-source authentication
                      solution for Next.js applications. It is designed from the
                      ground up to support Next.js and Serverless.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  In this task till now I have learnd and now have a good grasp
                  over NEXT.js, and I am truly fasinated about how much it makes
                  our task easy to do and with those features we can spend time
                  on writing the actual logic and it saves lots of time and
                  efforts.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  NEXT.js is many time faster than react
                </h2>
                <p className="mt-6">
                  With use of serve side rendering the time to render new page
                  has been reduced to 150ms from 1.5s, when we call an api by
                  next js it automatically chache the data so that is can
                  rendered quickly if we refresh, reload or revisit the page.
                  These enchancements make next js a choice for over react js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
