import { Star } from "lucide-react";
import React from "react";

const Rating = ({
  five,
  four,
  three,
  two,
  one,
}: {
  five: number;
  four: number;
  three: number;
  two: number;
  one: number;
}) => {
  const totalRatings = five + four + three + two + one;

  const weightedScore = 5 * five + 4 * four + 3 * three + 2 * two + 1 * one;

  const averageScore = weightedScore / totalRatings;

  const normalizedScore = Math.min(Math.max(averageScore, 0), 5);

  return (
    <div className="grid grid-cols-5 rounded-xl border-neutral-300 bg-white px-4 py-6 text-neutral-600 md:aspect-[3.5/1] md:h-fit md:px-0 lg:border-[6px]">
      <div className="col-span-1 flex flex-col items-center justify-center">
        <p className="text-5xl font-medium">{normalizedScore.toFixed(1)}</p> out
        of 5
      </div>
      <div className="col-span-3 flex flex-col justify-around border-r-[0.3px] border-neutral-400 px-2 text-xs">
        <div className="flex items-center justify-between gap-2 text-neutral-400">
          <div className="flex w-[15%] items-center justify-end">
            <Star fill="rgb(163,163,163)" size={8} />
            <Star fill="rgb(163,163,163)" size={8} />
            <Star fill="rgb(163,163,163)" size={8} />
            <Star fill="rgb(163,163,163)" size={8} />
            <Star fill="rgb(163,163,163)" size={8} />
          </div>
          <div className="w-[80%] rounded-full border bg-neutral-400">
            <div
              className="h-1 rounded-l-full bg-neutral-500"
              style={{ width: `${five}%` }}
            ></div>
          </div>

          <p className="w-[6%]">{five}</p>
        </div>
        <div className="flex items-center justify-between gap-2 text-neutral-400">
          <div className="flex w-[16%] items-center justify-end">
            <Star fill="rgb(163,163,163)" size={8} />
            <Star fill="rgb(163,163,163)" size={8} />
            <Star fill="rgb(163,163,163)" size={8} />
            <Star fill="rgb(163,163,163)" size={8} />
          </div>

          <div className="w-[80%] rounded-full bg-neutral-400">
            <div
              className="h-1 rounded-l-full bg-neutral-500"
              style={{ width: `${four}%` }}
            ></div>
          </div>
          <p className="w-[6%]">{four}</p>
        </div>
        <div className="flex items-center justify-between gap-2 text-neutral-400">
          <div className="flex w-[16%] items-center justify-end">
            <Star fill="rgb(163,163,163)" size={8} />
            <Star fill="rgb(163,163,163)" size={8} />
            <Star fill="rgb(163,163,163)" size={8} />
          </div>

          <div className="w-[80%] rounded-full bg-neutral-400">
            <div
              className="h-1 rounded-l-full bg-neutral-500"
              style={{ width: `${three}%` }}
            ></div>
          </div>
          <p className="w-[6%]">{three}</p>
        </div>
        <div className="flex items-center justify-between gap-2 text-neutral-400">
          <div className="flex w-[16%] items-center justify-end">
            <Star fill="rgb(163,163,163)" size={8} />
            <Star fill="rgb(163,163,163)" size={8} />
          </div>

          <div className="w-[80%] rounded-full bg-neutral-400">
            <div
              className="h-1 rounded-l-full bg-neutral-500"
              style={{ width: `${two}%` }}
            ></div>
          </div>
          <p className="w-[6%]">{two}</p>
        </div>
        <div className="flex items-center justify-between gap-2 text-neutral-400">
          <div className="flex w-[16%] items-center justify-end">
            <Star fill="rgb(163,163,163)" size={8} />
          </div>

          <div className="w-[80%] rounded-full bg-neutral-400">
            <div
              className="h-1 rounded-l-full bg-neutral-500"
              style={{ width: `${one}%` }}
            ></div>
          </div>
          <p className="w-[6%]">{one}</p>
        </div>
      </div>
      <div className="col-span-1 flex justify-center">
        {totalRatings} Ratings
      </div>
    </div>
  );
};

export default Rating;
