/// <reference path="./imports.d.ts" />

import { createIcons, icons } from "lucide";
import {
  siCplusplus,
  siCss,
  siGithub,
  siHtml5,
  siJavascript,
  siPython,
  siTypescript,
  siX,
} from "simple-icons";
import illustratorSvg from "devicon/icons/illustrator/illustrator-original.svg?raw";
import linkedinSvg from "devicon/icons/linkedin/linkedin-original.svg?raw";
import photoshopSvg from "devicon/icons/photoshop/photoshop-original.svg?raw";
import premiereProSvg from "devicon/icons/premierepro/premierepro-original.svg?raw";
import cnFlagSvg from "flag-icons/flags/4x3/cn.svg?raw";
import esFlagSvg from "flag-icons/flags/4x3/es.svg?raw";
import gbFlagSvg from "flag-icons/flags/4x3/gb.svg?raw";
import hkFlagSvg from "flag-icons/flags/4x3/hk.svg?raw";
import "./style.css";

type CareerItem = {
  title: string;
  org: string;
  time: string;
};

type ProjectItem = {
  name: string;
  description: string;
  href: string;
  image: string;
};

type SkillItem = {
  name: string;
  iconHtml: string;
};

type LanguageSkillItem = {
  name: string;
  iconHtml: string;
};

type SimpleIconData = {
  hex: string;
  path: string;
};

const simpleIcon = (icon: SimpleIconData): string =>
  `<span class="brand-icon inline-flex items-center"><svg viewBox="0 0 24 24" aria-hidden="true" fill="#${icon.hex}"><path d="${icon.path}"/></svg></span>`;

const brandIcon = (svgHtml: string): string =>
  `<span class="brand-icon inline-flex items-center">${svgHtml}</span>`;

const rawSvgIcon = (svg: string): string =>
  brandIcon(
    svg
      .replace("<svg", '<svg aria-hidden="true" class="h-4 w-4"')
      .replace(/\s(width|height)="[^"]*"/g, ""),
  );

const dualIcon = (left: string, right: string): string =>
  `<span class="inline-flex items-center gap-1">${left}${right}</span>`;

const flagIcon = (svg: string, label: string): string =>
  `<span class="brand-icon inline-flex items-center" aria-label="${label}">${svg
    .replace("<svg", '<svg aria-hidden="true" class="h-4 w-4"')
    .replace(/\s(width|height)="[^"]*"/g, "")}</span>`;

const codingSkills: SkillItem[] = [
  { name: "HTML", iconHtml: simpleIcon(siHtml5) },
  {
    name: "JavaScript / TypeScript",
    iconHtml: dualIcon(simpleIcon(siJavascript), simpleIcon(siTypescript)),
  },
  { name: "CSS", iconHtml: simpleIcon(siCss) },
  { name: "C / C++", iconHtml: simpleIcon(siCplusplus) },
  { name: "Python", iconHtml: simpleIcon(siPython) },
];

const designSkills: SkillItem[] = [
  {
    name: "Adobe Photoshop",
    iconHtml: rawSvgIcon(photoshopSvg),
  },
  {
    name: "Adobe Illustrator",
    iconHtml: rawSvgIcon(illustratorSvg),
  },
  {
    name: "Adobe Premiere Pro",
    iconHtml: rawSvgIcon(premiereProSvg),
  },
];

const languageSkills: LanguageSkillItem[] = [
  { name: "Cantonese", iconHtml: flagIcon(hkFlagSvg, "Hong Kong") },
  { name: "English", iconHtml: flagIcon(gbFlagSvg, "United Kingdom") },
  { name: "Putonghua", iconHtml: flagIcon(cnFlagSvg, "China") },
  { name: "Spanish", iconHtml: flagIcon(esFlagSvg, "Spain") },
];

const socialIcons = {
  github: simpleIcon(siGithub),
  linkedin: rawSvgIcon(linkedinSvg),
  x: simpleIcon(siX),
};

const career: CareerItem[] = [
  {
    title: "BSc in Mathematics",
    org: "The Chinese University of Hong Kong",
    time: "Sep 2018 - Jul 2022",
  },
  {
    title: "Android Developer",
    org: "AritaOne Software Limited",
    time: "Nov 2021 - May 2022",
  },
  {
    title: "Software Engineer",
    org: "ASMPT Limited",
    time: "May 2022 - May 2024",
  },
  {
    title: "MSc in Computer Science",
    org: "The University of Hong Kong",
    time: "Sep 2024 - Current",
  },
  {
    title: "Software Developer",
    org: "yyResearch Limited",
    time: "Oct 2024 - Current",
  },
];

const projects: ProjectItem[] = [
  {
    name: "Teletype",
    description: "Typing test website",
    href: "https://github.com/onenylxus/teletype",
    image: "/assets/teletype.png",
  },
  {
    name: "Tetty",
    description: "Tetris in JavaScript",
    href: "https://github.com/onenylxus/tetty",
    image: "/assets/tetty.png",
  },
  {
    name: "Geode",
    description: "Minimal code editor",
    href: "https://github.com/onenylxus/geode",
    image: "/assets/geode.png",
  },
];

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("#app not found");
}

app.innerHTML = `
  <div class="min-h-screen">
    <header class="sticky top-0 z-30 border-b border-[color:var(--line)]/70 bg-[color:var(--bg)]/80 backdrop-blur-md">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" class="text-sm font-semibold tracking-[0.08em] text-[color:var(--muted)]">Nicholas Ng</a>
        <div class="flex items-center gap-3 md:gap-5">
          <ul class="hidden items-center gap-6 text-sm font-semibold text-[color:var(--muted)] md:flex">
            <li><a class="transition hover:text-[color:var(--ink)]" href="#about">About</a></li>
            <li><a class="transition hover:text-[color:var(--ink)]" href="#career">Career</a></li>
            <li><a class="transition hover:text-[color:var(--ink)]" href="#skills">Skills</a></li>
            <li><a class="transition hover:text-[color:var(--ink)]" href="#projects">Projects</a></li>
            <li><a class="transition hover:text-[color:var(--ink)]" href="#contact">Contact</a></li>
          </ul>
          <button id="theme-toggle" class="icon-chip flex items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)] p-2 text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]" aria-label="Toggle light and dark mode">
            <i data-lucide="moon"></i>
          </button>
        </div>
      </nav>
    </header>

    <main class="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-16 pt-10 md:pt-14">
      <section id="home" class="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div class="hero-enter space-y-6">
          <p class="text-xs font-semibold tracking-[0.18em] text-[color:var(--accent)]">SOFTWARE DEVELOPER</p>
          <h1 class="text-4xl font-extrabold leading-tight text-[color:var(--ink)] md:text-6xl">Designing clear, reliable, and expressive digital products.</h1>
          <p class="max-w-2xl text-base leading-relaxed text-[color:var(--muted)] md:text-lg">I am Nicholas Ng, a software developer and postgraduate Computer Science student focused on full-stack web and mobile development.</p>
          <div class="flex flex-wrap items-center gap-4">
            <a href="#contact" class="rounded-full border border-[color:var(--accent)] bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)] hover:border-[color:var(--accent-hover)]">Contact me</a>
            <a href="/assets/resume.pdf" class="rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]" download>Download CV</a>
          </div>
          <div class="flex flex-wrap gap-3 text-sm font-semibold text-[color:var(--muted)]">
            <a class="icon-chip flex items-center gap-2 rounded-full border border-[color:var(--line)] px-3 py-2 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]" href="https://github.com/onenylxus" target="_blank" rel="noreferrer">${socialIcons.github}GitHub</a>
            <a class="icon-chip flex items-center gap-2 rounded-full border border-[color:var(--line)] px-3 py-2 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]" href="https://www.linkedin.com/in/nicholasng6237" target="_blank" rel="noreferrer">${socialIcons.linkedin}LinkedIn</a>
            <a class="icon-chip flex items-center gap-2 rounded-full border border-[color:var(--line)] px-3 py-2 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]" href="https://x.com/onenylxus" target="_blank" rel="noreferrer">${socialIcons.x}X</a>
          </div>
        </div>
        <div class="reveal glass relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl p-5" style="--delay: 120ms">
          <img src="/assets/home.png" alt="Nicholas Ng" class="h-auto w-full rounded-2xl object-cover" />
        </div>
      </section>

      <section id="about" class="reveal grid gap-8 md:grid-cols-[0.7fr_1.3fr]" style="--delay: 40ms">
        <img src="/assets/about.jpg" alt="About Nicholas" class="glass w-full rounded-3xl object-cover p-2" />
        <div class="space-y-6">
          <h2 class="text-2xl font-bold md:text-3xl">About</h2>
          <p class="max-w-3xl leading-relaxed text-[color:var(--muted)]">I enjoy developing full stack web and mobile applications. I have experience building open-source projects in small teams and learning fast across product and engineering workflows.</p>
          <div class="grid gap-4 sm:grid-cols-3">
            <article class="glass rounded-2xl p-4">
              <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">Contributions</p>
              <p id="contributions" class="mt-2 text-2xl font-extrabold">--</p>
              <p class="text-sm text-[color:var(--muted)]">last year</p>
            </article>
            <article class="glass rounded-2xl p-4">
              <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">Public Projects</p>
              <p id="public-projects" class="mt-2 text-2xl font-extrabold">--</p>
              <p class="text-sm text-[color:var(--muted)]">on GitHub</p>
            </article>
            <article class="glass rounded-2xl p-4">
              <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">Followers</p>
              <p id="followers" class="mt-2 text-2xl font-extrabold">--</p>
              <p class="text-sm text-[color:var(--muted)]">on GitHub</p>
            </article>
          </div>
        </div>
      </section>

      <section id="career" class="reveal space-y-6" style="--delay: 60ms">
        <h2 class="text-2xl font-bold md:text-3xl">Career</h2>
        <div class="grid gap-4 md:grid-cols-2">
          ${career
            .map(
              (item) => `
                <article class="glass rounded-2xl p-5">
                  <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--accent)]">${item.time}</p>
                  <h3 class="mt-3 text-lg font-bold">${item.title}</h3>
                  <p class="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">${item.org}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section id="skills" class="reveal space-y-6" style="--delay: 80ms">
        <h2 class="text-2xl font-bold md:text-3xl">Skills</h2>
        <div class="grid gap-4 lg:grid-cols-3">
          <article class="glass rounded-3xl p-5">
            <p class="mb-3 flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)]"><i data-lucide="sparkles"></i> Coding</p>
            <div class="grid gap-2">
              ${codingSkills
                .map(
                  (skill) => `
                    <span class="icon-chip flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)]/85 px-3 py-2 text-sm font-semibold text-[color:var(--muted)]">${skill.iconHtml}${skill.name}</span>
                  `,
                )
                .join("")}
            </div>
          </article>

          <article class="glass rounded-3xl p-5">
            <p class="mb-3 flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)]"><i data-lucide="sparkles"></i> Design</p>
            <div class="grid gap-2">
              ${designSkills
                .map(
                  (skill) => `
                    <span class="icon-chip flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)]/85 px-3 py-2 text-sm font-semibold text-[color:var(--muted)]">${skill.iconHtml}${skill.name}</span>
                  `,
                )
                .join("")}
            </div>
          </article>

          <article class="glass rounded-3xl p-5">
            <p class="mb-3 flex items-center gap-2 text-sm font-semibold text-[color:var(--ink)]"><i data-lucide="languages"></i> Languages</p>
            <div class="grid gap-2">
              ${languageSkills
                .map(
                  (skill) => `
                    <span class="icon-chip flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)]/85 px-3 py-2 text-sm font-semibold text-[color:var(--muted)]">${skill.iconHtml}${skill.name}</span>
                  `,
                )
                .join("")}
            </div>
          </article>
        </div>
      </section>

      <section id="projects" class="reveal space-y-6" style="--delay: 100ms">
        <h2 class="text-2xl font-bold md:text-3xl">Projects</h2>
        <div class="grid gap-6 md:grid-cols-3">
          ${projects
            .map(
              (project) => `
                <article class="glass group overflow-hidden rounded-3xl p-3 transition duration-300 hover:-translate-y-1">
                  <img src="${project.image}" alt="${project.name}" class="h-44 w-full rounded-2xl object-cover" />
                  <div class="p-3">
                    <h3 class="text-lg font-bold">${project.name}</h3>
                    <p class="mt-2 text-sm text-[color:var(--muted)]">${project.description}</p>
                    <a href="${project.href}" target="_blank" rel="noreferrer" class="mt-4 inline-block text-xs font-semibold tracking-[0.1em] text-[color:var(--accent)]">VIEW REPOSITORY</a>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section id="contact" class="reveal" style="--delay: 120ms">
        <div class="glass rounded-3xl p-6 md:p-8">
          <div class="mb-8">
            <h2 class="text-2xl font-bold md:text-3xl">Contact</h2>
            <p class="mt-2 text-[color:var(--muted)]">Let us build something clean, useful, and well-crafted.</p>
          </div>
          <form action="https://formsubmit.co/nicholasng6237@gmail.com" method="POST" class="grid gap-4 md:grid-cols-2">
            <input class="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-4 py-3 text-sm text-[color:var(--ink)] placeholder:text-[color:var(--muted)] outline-none ring-[color:var(--accent)] transition focus:ring" type="text" name="name" placeholder="Name" required />
            <input class="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-4 py-3 text-sm text-[color:var(--ink)] placeholder:text-[color:var(--muted)] outline-none ring-[color:var(--accent)] transition focus:ring" type="email" name="email" placeholder="Email" required />
            <input class="md:col-span-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-4 py-3 text-sm text-[color:var(--ink)] placeholder:text-[color:var(--muted)] outline-none ring-[color:var(--accent)] transition focus:ring" type="text" name="_subject" placeholder="Subject" required />
            <textarea class="md:col-span-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-4 py-3 text-sm text-[color:var(--ink)] placeholder:text-[color:var(--muted)] outline-none ring-[color:var(--accent)] transition focus:ring" name="message" rows="6" placeholder="Message"></textarea>
            <button class="md:col-span-2 w-fit rounded-full bg-[color:var(--accent)] px-7 py-3 text-xs font-semibold tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)]" type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </section>
    </main>

    <footer class="border-t border-[color:var(--line)]/90 px-6 py-6 text-center text-sm text-[color:var(--muted)]">
      <p>© <span id="year"></span> Nicholas Ng</p>
    </footer>
  </div>
`;

const formatNumber = (value: unknown): string => {
  const number = Number(value) || 0;
  if (number < 10) {
    return `${number}`;
  }

  const magnitude = 10 ** Math.max(0, Math.floor(Math.log10(number)) - 1);
  return `${Math.floor(Math.floor(number / magnitude) / 5) * 5 * magnitude}+`;
};

const setText = (selector: string, value: string): void => {
  const element = document.querySelector<HTMLElement>(selector);
  if (element) {
    element.textContent = value;
  }
};

const populateGitHubStats = async (): Promise<void> => {
  try {
    const [contribResponse, profileResponse] = await Promise.all([
      fetch("https://github-contributions-api.deno.dev/onenylxus.json"),
      fetch("https://api.github.com/users/onenylxus"),
    ]);

    const contribData = (await contribResponse.json()) as {
      totalContributions: number;
    };
    const profileData = (await profileResponse.json()) as {
      public_repos: number;
      followers: number;
    };

    setText("#contributions", formatNumber(contribData.totalContributions));
    setText("#public-projects", formatNumber(profileData.public_repos));
    setText("#followers", formatNumber(profileData.followers));
  } catch {
    setText("#contributions", "N/A");
    setText("#public-projects", "N/A");
    setText("#followers", "N/A");
  }
};

const setupReveal = (): void => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  document
    .querySelectorAll<HTMLElement>(".reveal")
    .forEach((element) => observer.observe(element));
};

const setupThemeToggle = (): void => {
  const storageKey = "theme";
  const toggle = document.querySelector<HTMLButtonElement>("#theme-toggle");
  if (!toggle) {
    return;
  }

  const applyTheme = (theme: "light" | "dark") => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem(storageKey, theme);
    toggle.innerHTML = `<i data-lucide="${theme === "dark" ? "sun" : "moon"}"></i>`;
    toggle.setAttribute(
      "aria-label",
      `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
    );
    createIcons({ icons });
  };

  const stored = localStorage.getItem(storageKey);
  const initialTheme: "light" | "dark" = stored === "dark" ? "dark" : "light";
  applyTheme(initialTheme);

  toggle.addEventListener("click", () => {
    const nextTheme: "light" | "dark" = document.body.classList.contains(
      "dark-theme",
    )
      ? "light"
      : "dark";
    applyTheme(nextTheme);
  });
};

setText("#year", new Date().getFullYear().toString());
setupThemeToggle();
populateGitHubStats();
setupReveal();

createIcons({ icons });
