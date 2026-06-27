function GitHubCTA() {
  return (
    <div className="relative mt-20 mb-4 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between gap-10 px-8 py-12 md:flex-row md:px-14">
        {/* Left */}
        <div className="flex flex-col gap-4 max-w-lg">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-fuchsia-200/80">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-fuchsia-200/80"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            The Developer
          </div>

          <h2 className="text-2xl font-semibold leading-snug text-white md:text-3xl">
            Connect with the developer directly.
          </h2>

          <p className="text-sm leading-relaxed text-slate-300">
            The engineering behind every site, database, and digital product
            here was built by one developer. If you want work done right—and
            actually delivered—reach out directly on GitHub.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="https://github.com/abhinavvgusainn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-fuchsia-100"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              @abhinavvgusainn
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex w-full shrink-0 flex-col gap-5 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm md:w-72">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-xl font-bold text-slate-950">
              A
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Abhinav Gusain
              </p>
              <p className="mt-0.5 text-xs text-slate-300">
                Full-stack Developer
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { label: "Repos", val: "Public" },
              { label: "Role", val: "Dev" },
              { label: "Status", val: "Open" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/10 px-2 py-3"
              >
                <p className="text-xs font-semibold text-white">
                  {item.val}
                </p>
                <p className="mt-0.5 text-xs text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            Available for new projects
          </div>

          <a
            href="https://github.com/abhinavvgusainn"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/15 py-2.5 text-center text-sm font-medium text-white transition-all hover:border-fuchsia-300/60 hover:bg-white/10"
          >
            View GitHub Profile →
          </a>
        </div>
      </div>
    </div>
  );
}

export default GitHubCTA;
