/* eslint-disable @next/next/no-img-element */
"use client";

import { InfiniteMoving, InfiniteMovingItem } from "./ui/infinite-moving";

export default function Testimonials() {
  return (
    <section className="mt-32 relative">
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none grid place-content-center pt-[4vh]">
        <img
          // src="https://www.fey.com/images/onboarding/testimonial-bg-glow_2x.jpg"
          src="https://www.fey.com/marketing/_next/static/media/hero-bg_2x.a26fd6cd.jpg"
          alt=""
          className="opacity-50"
          style={{ filter: `blur(12px)` }}
        />
      </div>
      <div className="relative mb-12 container">
        <h3 className="text-4xl text-balance font-extrabold tracking-tight max-w-lg text-transparent text-gradient bg-clip-text">
          What client&apos;s says about us?
        </h3>
        <p className="text-muted-foreground mt-2 max-w-[550px]">
          For casual users you might had some various topics that you can cover
          and using it on your business to grow more.
        </p>
      </div>
      <div className="relative container">
        <InfiniteMoving>
          {[1, 2, 3].map((t) => (
            <InfiniteMovingItem key={t} className="!w-[450px] shrink-0">
              <div key={t} className="flex gap-x-1 px-8">
                <div className="text-4xl font-semibold">“</div>
                <div>
                  <p className="text-white leading-normal mb-4">
                    I really love how beautiful Fey’s Watchlist is.{" "}
                    <span className="text-[#868F97]">
                      I keep it undocked on my desktop for a quick glance at my
                      favorite stocks, which helps me maintain a clean
                      workspace.
                    </span>
                  </p>
                  <h3 className="text-white font-bold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">
                    Software engineer
                  </p>
                </div>
              </div>
            </InfiniteMovingItem>
          ))}
        </InfiniteMoving>
        {/* <div className="relative h-[268px] w-full overflow-hidden pt-px px-4">
          <div className="flex gap-3">
            {[1, 2, 3].map((t) => (
              <div
                key={t}
                className="w-[500px] flex gap-x-1 px-8 shrink-0"
                // style={{
                //   boxShadow: `rgba(255,255,255,0.15) 0px 0px 0px 1px`,
                //   background: `linear-gradient(139.3deg, rgba(107, 107, 107, 0.4) 23.12%, rgba(56, 56, 56, 0.4) 87.06%)`,
                // }}
              >
                <div className="text-4xl font-semibold">“</div>
                <div>
                  <p className="text-white leading-normal mb-4">
                    I really love how beautiful Fey’s Watchlist is.{" "}
                    <span className="text-[#868F97]">
                      I keep it undocked on my desktop for a quick glance at my
                      favorite stocks, which helps me maintain a clean
                      workspace.
                    </span>
                  </p>
                  <h3 className="text-white font-bold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">
                    Software engineer
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
