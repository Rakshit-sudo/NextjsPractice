import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Formik } from "formik";
export default function Login() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const logIn = (e: any) => {
    e.preventDefault();
    Cookies.set("loggedin", "true");
    router.push("/");
  };

  // Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex h-screen bg-black">
        <div className="m-auto bg-slate-50 rounded-md">
          <div className="flex justify-center">
            <div className="text-center py-10">
              <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                  <h1 className="text-gray-800 text-4xl font-bold py-4">
                    LOGIN
                  </h1>
                  <p className="w-3/4 mx-auto text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, officia?
                  </p>
                </div>

                {/* form */}
                <form
                  className="flex flex-col gap-5"
                  onSubmit={(e) => logIn(e)}
                >
                  <div className={styles.input_group}>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className={styles.input_text}
                      required
                      // {...formik.getFieldProps("email")}
                    />
                    <span className="icon flex items-center px-4">
                      <HiAtSymbol size={25} />
                    </span>
                  </div>
                  <div className={styles.input_group}>
                    <input
                      type={`${show ? "text" : "password"}`}
                      name="password"
                      id="password"
                      placeholder="password"
                      className={styles.input_text}
                      required
                      // {...formik.getFieldProps("password")}
                    />
                    <span
                      className="icon flex items-center px-4"
                      onClick={() => setShow(!show)}
                    >
                      <HiFingerPrint size={25} />
                    </span>
                  </div>

                  {/* login buttons */}
                  <div className="input-button">
                    <button type="submit" className={styles.button}>
                      Login
                    </button>
                  </div>
                  <div className="input-button">
                    <button
                      type="button"
                      onClick={handleGoogleSignin}
                      className={styles.button_custom}
                    >
                      Sign In with Google{" "}
                    </button>
                  </div>
                </form>

                {/* bottom */}
                <p className="text-center text-gray-400 ">
                  don't have an account yet?{" "}
                  <Link legacyBehavior href={"/register"}>
                    <a className="text-blue-700">Sign Up</a>
                  </Link>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
