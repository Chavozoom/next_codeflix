import { useScroll } from "@/app/hooks/useScrool";
import { renderHook, act } from "@testing-library/react";

describe("useScroll", () => {
	it("Should respont to scroll events", () => {
		const { result } = renderHook(() => useScroll());
		expect(result.current).toBeFalsy();

		act(() => {
			global.window.scrollY = 100;
			global.window.dispatchEvent(new Event("scroll"));
		});
		expect(result.current).toBeTruthy();

		act(() => {
			global.window.scrollY = 0;
			global.window.dispatchEvent(new Event("scroll"));
		});
		expect(result.current).toBeFalsy();
	});
});
