import Link from "next/link";
import Layout from "../../layout/layout";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Users = ({ users }) => {
  return (
    <Layout>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="px-4 sm:px-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Users List
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A user API is fetched and list of all user is here, if we click on
            the user we get user details
          </p>
        </div>
        <ul role="list" className="divide-y divide-gray-100">
          {users.map(({ id, name, email }) => (
            <li key={email}>
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <Link legacyBehavior href={`/users/${id}`} key={id}>
                    <a className="text-sm font-semibold leading-6 text-gray-900">
                      {name}
                    </a>
                  </Link>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {email}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm leading-6 text-gray-900">{id}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Users;
