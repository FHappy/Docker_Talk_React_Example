import authReducer, {
  initialState,
  selectCurrentUser,
  setCurrentUserAction
} from "./authSlice";
import { RootState } from "app/rootReducer";
import { MOCK_USER } from "./mocks";
import { User } from "./types";

describe("Auth Store Slice", () => {
  it("sanity check", () => {
    expect(true).toBe(true);
  });

  it("Should return initial state for auth slice on app load", () => {
    const expectedState = initialState;
    const resultState = authReducer(undefined, {});

    expect(resultState).toEqual(expectedState);
  });

  it("Should set state to current user after dispatching setCurrentUser action.", () => {
    const mockData: User = MOCK_USER;

    const expectedState = { currentUser: MOCK_USER };
    const resultState = authReducer(
      initialState,
      setCurrentUserAction(mockData)
    );

    expect(resultState).toEqual(expectedState);
  });

  it("Should correctly return selectors when state is populated with currentUser.", () => {
    const resultState = { currentUser: MOCK_USER };
    const rootState: RootState = {
      posts: [],
      auth: resultState
    };

    expect(selectCurrentUser(rootState)).toEqual(MOCK_USER);
  });
});
