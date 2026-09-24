import { useState } from "react";

export type TimelineItem = {
    index: string;
    title: string;
    subtitle: string;
    meta?: string;
    date: string;
    bullets: string[];
    defaultExpanded?: boolean;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
    return (
        <ol>
            {items.map((item, i) => (
                <TimelineRow key={`${item.title}-${item.date}`} item={item} isLast={i === items.length - 1} />
            ))}
        </ol>
    );
}

function TimelineRow({ item, isLast }: { item: TimelineItem; isLast: boolean }) {
    const [expanded, setExpanded] = useState(item.defaultExpanded ?? false);
    const visibleBullets = expanded ? item.bullets : item.bullets.slice(0, 2);
    const hiddenCount = item.bullets.length - visibleBullets.length;

    return (
        <li className="relative flex gap-4 pb-10 last:pb-0 sm:gap-6">
            <div className="flex flex-col items-center">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-mist-900 text-[10px] font-semibold text-white">
                    {item.index}
                </span>
                {!isLast && <span aria-hidden="true" className="mt-1 w-px flex-1 bg-mist-300" />}
            </div>
            <div className="min-w-0 flex-1">
                <p className="shrink-0 text-sm text-mist-800 font-medium">{item.date}</p>
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                    <h3 className="text-xl font-bold sm:text-2xl">{item.title}</h3>
                    {item.meta && <p className="text-sm text-mist-500">{item.meta}</p>}
                </div>
                <p className="text-base text-mist-800">{item.subtitle}</p>
                {visibleBullets.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-mist-700">
                        {visibleBullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                )}
                {hiddenCount > 0 && (
                    <button
                        type="button"
                        onClick={() => setExpanded(true)}
                        className="mt-2 text-sm font-medium underline underline-offset-2"
                    >
                        Show {hiddenCount} more +
                    </button>
                )}
            </div>
        </li>
    );
}
