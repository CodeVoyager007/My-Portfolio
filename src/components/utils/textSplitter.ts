// Lightweight replacement for GSAP's SplitText plugin
export class TextSplitter {
  chars: Element[] = [];
  words: Element[] = [];
  lines: Element[] = [];
  elements: Element[] = [];
  selector: string | Function;
  private originalNodes: Map<Element, Node[]> = new Map();

  constructor(target: string | Element | NodeListOf<Element> | Element[], vars?: { type?: string; linesClass?: string }) {
    const type = vars?.type || "chars,words,lines";
    const linesClass = vars?.linesClass || "split-line";

    let elements: Element[] = [];
    if (typeof target === "string") {
      elements = Array.from(document.querySelectorAll(target));
    } else if (target instanceof NodeList) {
      elements = Array.from(target);
    } else if (Array.isArray(target)) {
      elements = target;
    } else {
      elements = [target];
    }

    this.selector = typeof target === "string" ? target : "";
    this.elements = elements;

    elements.forEach((element) => {
      // Keep the original DOM so text can be restored without reparsing HTML.
      this.originalNodes.set(element, Array.from(element.childNodes, (node) => node.cloneNode(true)));

      if (type.includes("chars") && type.includes("words")) {
        // Split into words first, then chars
        this.splitWords(element);
        this.splitCharsFromWords(element);
      } else if (type.includes("chars")) {
        this.splitChars(element);
      } else if (type.includes("words")) {
        this.splitWords(element);
      }

      if (type.includes("lines")) {
        this.splitLines(element, linesClass);
      }
    });
  }

  private splitChars(element: Element) {
    const text = element.textContent || "";
    const chars = text.split("");
    
    const fragment = document.createDocumentFragment();
    chars.forEach((char) => {
      if (char === "\n") {
        fragment.appendChild(document.createElement("br"));
        return;
      }
      const span = document.createElement("span");
      span.className = "split-char";
      span.style.display = "inline-block";
      span.style.whiteSpace = "pre";
      span.textContent = char;
      fragment.appendChild(span);
    });
    element.replaceChildren(fragment);

    this.chars.push(...Array.from(element.querySelectorAll(".split-char")));
  }

  private splitWords(element: Element) {
    const text = element.textContent || "";
    const words = text.split(/(\s+)/);

    const fragment = document.createDocumentFragment();
    words.forEach((word) => {
      if (word.trim().length === 0) {
        fragment.appendChild(document.createTextNode(word));
        return;
      }
      const span = document.createElement("span");
      span.className = "split-word";
      span.style.display = "inline-block";
      span.style.whiteSpace = "pre";
      span.textContent = word;
      fragment.appendChild(span);
    });
    element.replaceChildren(fragment);

    this.words.push(...Array.from(element.querySelectorAll(".split-word")));
  }

  private splitCharsFromWords(element: Element) {
    const words = element.querySelectorAll(".split-word");
    words.forEach((word) => {
      const text = word.textContent || "";
      const chars = text.split("");
      const fragment = document.createDocumentFragment();
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.className = "split-char";
        span.style.display = "inline-block";
        span.style.whiteSpace = "pre";
        span.textContent = char;
        fragment.appendChild(span);
      });
      word.replaceChildren(fragment);
      this.chars.push(...Array.from(word.querySelectorAll(".split-char")));
    });
  }

  private splitLines(element: Element, linesClass: string) {
    // Use requestAnimationFrame to ensure layout is complete
    requestAnimationFrame(() => {
      const items = element.querySelectorAll(".split-word, .split-char");
      if (items.length === 0) return;

      let currentLine: Element[] = [];
      let lines: Element[][] = [];
      let currentTop = 0;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (currentTop === 0) {
          currentTop = rect.top;
        }

        if (Math.abs(rect.top - currentTop) > 5) {
          if (currentLine.length > 0) {
            lines.push([...currentLine]);
          }
          currentLine = [item];
          currentTop = rect.top;
        } else {
          currentLine.push(item);
        }
      });

      if (currentLine.length > 0) {
        lines.push(currentLine);
      }

      lines.forEach((line) => {
        if (line.length === 0) return;
        const lineWrapper = document.createElement("span");
        lineWrapper.className = linesClass;
        lineWrapper.style.display = "block";
        const firstItem = line[0];
        firstItem.parentNode?.insertBefore(lineWrapper, firstItem);
        line.forEach((item) => {
          if (item.parentNode === lineWrapper.parentNode) {
            lineWrapper.appendChild(item);
          }
        });
      });

      this.lines.push(...Array.from(element.querySelectorAll(`.${linesClass}`)));
    });
  }

  revert() {
    this.elements.forEach((element) => {
      const originalNodes = this.originalNodes.get(element);
      if (originalNodes) element.replaceChildren(...originalNodes);
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
    this.originalNodes.clear();
  }
}
