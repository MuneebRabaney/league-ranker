import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">

            <div className="relative px-4 pt-15 pb-8 sm:px-6 sm:pt-20 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-30">
              <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-8xl lg:text-7xl">
                <span className="block uppercase text-yellow-500 drop-shadow-md">
                  League Ranker
                </span>
              </h1>

              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/matchFixtures"
                    className="flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8">
                    View Match Fixtures
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-4 py-3 text-base font-medium text-slate shadow-sm hover:bg-yellow-50 sm:px-8">
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600">
                      Log In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
