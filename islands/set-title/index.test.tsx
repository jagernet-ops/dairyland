import TestComponent from "./index.tsx"
import { describe, it, assertExists, assertEquals, render, DOMParser } from "../../testing-deps.ts";

describe("set title island", function(){
  it("render exists", function(){
    const renderedComponent: string = render(
      <TestComponent>
        <div></div>
      </TestComponent>
    );
    const domReady = new DOMParser().parseFromString(renderedComponent, "text/html");
    assertExists(domReady);
  });
  it("should maintain child composition", function(){
    const renderedComponent: string = render(
      <TestComponent>
        <h1></h1> 
        <p></p>
      </TestComponent>
    );
    const domReady = new DOMParser().parseFromString(renderedComponent, "text/html");
    assertExists(domReady);
    assertEquals(Array.from(domReady?.childNodes).every( ({nodeName}) => nodeName === "h1" || "p"), true)
  })
  it("should maintain textContent", function(){
    const renderedComponent: string = render(
      <TestComponent>
        <h1>Cheese is so good</h1> 
        <p>You ever been to the Dells?</p>
      </TestComponent>
    );
    const domReady = new DOMParser().parseFromString(renderedComponent, "text/html");
    assertEquals(domReady?.querySelector("h1")?.textContent, "Cheese is so good");
    assertEquals(domReady?.querySelector("p")?.textContent, "You ever been to the Dells?");
  });
  it("should change Document title value", function(){
    const renderedComponent: string = render(
      <TestComponent title="Dairyland">
        <title>Dairyland</title>
        <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
      </TestComponent>
    );
    const domReady = new DOMParser().parseFromString(renderedComponent, "text/html")
    assertEquals(domReady?.title, "Dairyland");
  });
});
