import { render } from "../../testing-deps.ts";
import { describe, it } from "../../testing-deps.ts";
import TestRoute from "./index.tsx"
import { assertSnapshot } from "$fresh/src/server/deps.ts";

describe("about endpoint test", function(){
  it("test against snapshot", async function(snapshot): Promise<void> {
    const renderedEndpoint: string = render(<TestRoute />); 
    await assertSnapshot(snapshot, renderedEndpoint);
  });
});

