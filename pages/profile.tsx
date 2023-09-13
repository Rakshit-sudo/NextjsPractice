import Head from "next/head";
import Layout from "../layout/layout";
import { getSession, useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>PROFILE</title>
      </Head>
      <Layout>
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="px-4 sm:px-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Applicant Information
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              In this Page the details are visible!!
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-xl sm:mt-20">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-bold leading-6 text-gray-900">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {session.user.name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-bold leading-6 text-gray-900">
                  Email address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {session.user.email}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Layout>
    </div>
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
