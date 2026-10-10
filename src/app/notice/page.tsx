import Link from "next/link";
import NoticeLayout from "@/components/Notice/NoticeLayout";
import {
  NOTICE_COLUMN_ONE,
  NOTICE_COLUMN_TWO,
  slugify,
} from "@/lib/notices-data";

function NoticeColumn({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((title) => (
        <li key={title}>
          <Link
            href={`/notice/${slugify(title)}`}
            className="block rounded border border-neutral-200 px-4 py-3 text-[13.5px] leading-snug text-neutral-700 transition-colors hover:border-[#2f9e44] hover:text-[#2f9e44]"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <NoticeLayout title="Notice" active="">
      <p className="mb-6 text-[15px] leading-[1.9] text-neutral-700">
        Select a notice below to view its details.
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        <NoticeColumn items={NOTICE_COLUMN_ONE} />
        <NoticeColumn items={NOTICE_COLUMN_TWO} />
      </div>
    </NoticeLayout>
  );
}
