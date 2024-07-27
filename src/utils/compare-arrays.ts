import type { Followers } from "../interfaces/followers.interface";

export function getNotFollowingMe( followerList: Followers[], followingList: Followers[] ): Followers[]{
  const notFollowing: Followers[] = []
  const followerValues = new Set(followerList.map(follower => follower.string_list_data[0].value));

  for (const follow of followingList) {
    if (!followerValues.has(follow.string_list_data[0].value)) {
      notFollowing.push(follow);
    }
  }

  return notFollowing
}