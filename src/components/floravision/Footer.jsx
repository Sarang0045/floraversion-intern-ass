import logo from "@/assets/plant.png";

export function Footer() {
  return (
    <footer className="relative mt-8">
      <div className="flora-shell py-20 grid md:grid-cols-[1.25fr_0.55fr_1fr] gap-16">
        <div>
          <a href="#" className="flex items-center gap-2 text-2xl font-bold">
            <img src={logo} alt="" className="size-12 object-contain" />
            <span className="text-white">
              FloraVision<span className="text-[oklch(0.75_0.16_150)]">.</span>
            </span>
          </a>
          <p className="mt-6 max-w-[25rem] text-sm leading-snug text-white/78">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
          </p>
          <div className="mt-14 flex gap-9 text-xs font-semibold text-white/88">
            <a aria-label="Facebook" className="hover:text-white">FB</a>
            <a aria-label="Twitter" className="hover:text-white">TW</a>
            <a aria-label="LinkedIn" className="hover:text-white">LI</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Quick Link's</h4>
          <ul className="mt-6 space-y-4 text-xs text-white/78">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Types of plant's</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Privacy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">For Every Update.</h4>
          <form className="mt-7 flex h-12 max-w-[31rem] items-center border border-white/85 bg-transparent">
            <input
              type="email"
              placeholder="Enter Email"
              className="h-full min-w-0 flex-1 bg-transparent px-5 text-xs text-white placeholder:text-white/65 outline-none"
            />
            <button type="submit" className="h-full border-l border-white/85 bg-white px-5 text-[0.63rem] font-semibold text-[#142014] transition hover:bg-white/90">
              SUBSCRIBE
            </button>
          </form>
          <p className="mt-28 text-xs text-white/66">FloraVision © all right reserve</p>
        </div>
      </div>
    </footer>
  );
}
