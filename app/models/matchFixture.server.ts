import { prisma } from "~/db.server";
import type { User, MatchFixture } from "@prisma/client";


export function getMatchFixture({
  id,
  userId,
}: Pick<MatchFixture, "id"> & {
  userId: User["id"];
}) {
  return prisma.matchFixture.findFirst({
    select: { id: true, body: true, title: true },
    where: { id, userId },
  });
}

export function getMatchFixtureListItems({ userId }: { userId: User["id"] }) {
  return prisma.matchFixture.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createMatchFixture({
  body,
  title,
  userId,
}: Pick<MatchFixture, "body" | "title"> & {
  userId: User["id"];
}) {
  return prisma.matchFixture.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteMatchFixture({
  id,
  userId,
}: Pick<MatchFixture, "id"> & { userId: User["id"] }) {
  return prisma.matchFixture.deleteMany({
    where: { id, userId },
  });
}
