import van from "./van-0.11.10.min";

const { button, div, pre } = van.tags;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Run = ({ icon, sleepMs }: { icon: string; sleepMs: number }) => {
  const headingSpaces = van.state(40),
    trailingUnderscores = van.state(0);

  const animate = async () => {
    while (headingSpaces.val > 0) {
      await sleep(sleepMs);
      --headingSpaces.val, ++trailingUnderscores.val;
    }
  };
  animate();

  const helloText = van.bind(
    headingSpaces,
    trailingUnderscores,
    (h, t) => `${" ".repeat(h)}${icon}💨${"_".repeat(t)}`
  );
  return div(pre(helloText));
};

const Hello = () => {
  const dom = div();
  return div(
    dom,
    button(
      { onclick: () => van.add(dom, Run({ icon: "🐌", sleepMs: 2000 })) },
      "Hello 🐌"
    ),
    button(
      { onclick: () => van.add(dom, Run({ icon: "🐢", sleepMs: 500 })) },
      "Hello 🐢"
    ),
    button(
      { onclick: () => van.add(dom, Run({ icon: "🚶‍♂️", sleepMs: 100 })) },
      "Hello 🚶‍♂️"
    ),
    button(
      { onclick: () => van.add(dom, Run({ icon: "🏎️", sleepMs: 10 })) },
      "Hello 🏎️"
    ),
    button(
      { onclick: () => van.add(dom, Run({ icon: "🚀", sleepMs: 2 })) },
      "Hello 🚀"
    )
  );
};

van.add(document.body, Hello());
