import { RootState } from "app/rootReducer";
import { MOCK_USER } from "features/auth/mocks";
import { MOCK_POSTS } from "./mocks";
import postsReducer, {
  initialState,
  loadPostsAction,
  selectPosts,
  selectPostsByCurrentUser,
  selectPostsByOtherUsers
} from "./postSlice";
import { Post } from "./types";

describe("Posts Store Slice", () => {
  it("sanity check", () => {
    expect(true).toBe(true);
  });

  it("Should return initial state for post slice on app load", () => {
    const expectedState = initialState;
    const resultState = postsReducer(undefined, {});

    expect(resultState).toEqual(expectedState);
  });

  it("Should set state to retrieved posts after dispatching loadPosts action.", () => {
    const mockData: Post[] = MOCK_POSTS;

    const expectedState = mockData;
    const resultState = postsReducer(initialState, loadPostsAction(mockData));

    expect(resultState).toEqual(expectedState);
  });

  it("Should correctly return selectors when state is populated with data.", () => {
    const resultState = MOCK_POSTS;
    const rootState: RootState = {
      auth: { currentUser: MOCK_USER },
      posts: resultState
    };

    const postsByCurrentUser = MOCK_POSTS.filter(
      post => post.userId === MOCK_USER.id
    );
    const postsByOtherUsers = MOCK_POSTS.filter(
      post => post.userId !== MOCK_USER.id
    );

    expect(selectPosts(rootState)).toEqual(MOCK_POSTS);
    expect(selectPostsByCurrentUser(rootState)).toEqual(postsByCurrentUser);
    expect(selectPostsByOtherUsers(rootState)).toEqual(postsByOtherUsers);
  });
});
