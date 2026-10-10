import Link from "next/link";
import { tickerNotices } from "@/lib/site-data";

export default function NoticeTicker() {
  // The list is rendered twice so the marquee loops without a visible gap.
  const items = [...tickerNotices, ...tickerNotices];

  return (
    <div className="relative z-10 flex bg-[#3aa94f] text-white">
      <div className="relative flex shrink-0 items-center bg-[#3f2c8f] px-6 py-4 pr-8">
        <span className="text-[19px] font-bold">Notice</span>
        {/* Arrow point on the right edge of the tab */}
        <span
          aria-hidden
          className="absolute left-full top-0 h-full w-5 bg-[#3f2c8f]"
          style={{ clipPath: "polygon(0 0, 0 100%, 100% 50%)" }}
        />
      </div>

      <div className="group relative flex-1 overflow-hidden py-4 pl-8">
        <ul className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap group-hover:[animation-play-state:paused]">
          {items.map((notice, i) => (
            <li key={`${notice.title}-${i}`}>
              <Link href={notice.href} className="text-[15px] hover:underline">
                {notice.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}