import Link from "next/link";
import {
  NOTICE_COLUMN_ONE,
  NOTICE_COLUMN_TWO,
  slugify,
} from "@/lib/notices-data";

function NoticeColumn({
  items,
  active,
}: {
  items: string[];
  active: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((label) => {
        const isActive = label === active;
        return (
          <Link
            key={label}
            href={`/notice/${slugify(label)}`}
            className={`block px-4 py-3 text-[13.5px] leading-snug rounded transition-colors ${
              isActive
                ? "bg-[#2f9e44] text-white font-medium"
                : "border border-neutral-200 text-neutral-700 hover:border-[#2f9e44] hover:text-[#2f9e44]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

export default function ClassFiveScholarshipResultSidebar({
  active,
}: {
  active: string;
}) {
  return (
    <div>
      <h2 className="text-[17px] font-semibold text-[#16253d] mb-4">
        Notice
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <NoticeColumn items={NOTICE_COLUMN_ONE} active={active} />
        <NoticeColumn items={NOTICE_COLUMN_TWO} active={active} />
      </div>
    </div>
  );
}
