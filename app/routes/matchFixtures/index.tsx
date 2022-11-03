import { Link } from "@remix-run/react";

export default function MatchFixtureIndexPage() {
  return (
    <p>
      No Match Fixture selected. Select a Match Fixture on the left, or{" "}
      <Link to="new" className="text-blue-500 underline">
        Create a new Match Fixture.
      </Link>
    </p>
  );
}
