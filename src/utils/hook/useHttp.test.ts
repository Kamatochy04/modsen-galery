import { useHttp } from "./useHttp";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useHttp", () => {
  it("should handle GET requests", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useHttp());

    const data = { name: "John Doe" };
    const url = "https://example.com/api/users/1";

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data),
      });
    });

    act(() => {
      result.current.request(url);
    });

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
  });

  it("should handle POST requests", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useHttp());

    const data = { name: "John Doe" };
    const url = "https://example.com/api/users";

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data),
      });
    });

    act(() => {
      result.current.request(url, "POST", data);
    });

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
  });

  it("should handle errors", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useHttp());

    const url = "https://example.com/api/users/1";

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.reject(new Error("Not found"));
    });

    act(() => {
      result.current.request(url);
    });

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toEqual("Not found");
  });

  it("should clear errors", () => {
    const { result } = renderHook(() => useHttp());

    act(() => {
      result.current.cleatError();
    });

    expect(result.current.error).toBeNull();
  });
});
