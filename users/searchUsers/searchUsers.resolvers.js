import client from "../../client";

export default {
  Query: {
    searchUsers: async (_, { keyword, lastId }) =>
      await client.user.findMany({
        where: {
          username: {
            startsWith: keyword,
            mode: "insensitive",
          },
        },
        take: 5,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId } }),
      }),
  },
};
