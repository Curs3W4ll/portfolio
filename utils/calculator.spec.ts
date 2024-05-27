import * as calculator from "@/utils/calculator";
import { describe, expect, it } from "vitest";

describe("sum", () => {
  it("should add a and b", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(3, 2)).toBe(5);
  });
});

describe("sub", () => {
  it("should sub b from a", () => {
    expect(calculator.sub(2, 1)).toBe(1);
    expect(calculator.sub(4, 2)).toBe(2);
    expect(calculator.sub(2, 5)).toBe(-3);
  });
});

describe.todo("mul");

describe.todo("div");
