import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { useUser } from "~/utils";
import { requireUserId } from "~/session.server";
import { getMatchFixtureListItems } from "~/models/matchFixture.server";

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const matchFixtureListItems = await getMatchFixtureListItems({ userId });
  return json({ matchFixtureListItems });
}

export default function MatchFixturesPage() {
  const data = useLoaderData<typeof loader>();
  const user = useUser();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
        <h1 className="text-3xl font-bold">
          <Link to=".">Match Fixtures</Link>
        </h1>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600">
            Logout
          </button>
        </Form>
      </header>

      <main className="flex h-full bg-white">
        <div className="h-full w-80 border-r bg-gray-50">

          <Link to="new" className="block p-4 text-xl text-blue-500">
            Add New Match Fixture
          </Link>

          <hr />

          { data.matchFixtureListItems.length === 0 && (
            <p className="p-4">No matchFixtures yet</p>
          )}

          { data.matchFixtureListItems.length > 0 && (
            <ol>
              {data.matchFixtureListItems.map((
                { id, title }:
                { id: string, title: string }
                ) => (
                <li key={id}>
                  <NavLink
                    to={id}
                    className={
                      ({ isActive }) =>
                      `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                    }>
                    📝 {title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
