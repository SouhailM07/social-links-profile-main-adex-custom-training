import "./container.css";

export default function Container() {
  let links: { label: string; link: string }[] = [
    { label: "GitHub", link: "https://github.com" },
    { label: "Frontend Mentor", link: "https://www.frontendmentor.io" },
    { label: "LinkedIn", link: "https://www.linkedin.com" },
    { label: "Twitter", link: "https://twitter.com" },
    { label: "Instagram", link: "https://www.instagram.com" },
  ];

  return (
    <main className="min-h-screen grid place-items-center ">
      <section className="bg-Grey800 w-[17rem] sm:w-[19rem] rounded-xl min-h-[28rem] py-[1.5rem] text-center">
        <img
          className="rounded-full h-[5rem] mx-auto "
          alt="img"
          src="avatar-jessica.jpeg"
        />
        <article className="my-[1rem] space-y-1 font-medium">
          <h1 className="text-[1.5rem] ">Jessica Randall</h1>
          <h2 className="text-Green text-[0.8rem]">London, United Kingdom</h2>
        </article>
        <p className="text-[0.8rem] text-gray-300">
          "Front-end developer and avid reader"
        </p>
        <ul role="list" className="px-[2rem] space-y-3 mt-3">
          {links.map((e, i) => (
            <a
              role="listitem"
              href={`${e.link}`}
              key={i}
              className="bg-Grey700 block py-2 text-[0.8rem] font-medium rounded-sm hover:bg-Green hover:text-black"
            >
              {e.label}
            </a>
          ))}
        </ul>
      </section>
    </main>
  );
}
