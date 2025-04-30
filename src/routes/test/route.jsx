import React from 'react'

export default function TestRoute() {
  return (
      <div
          className="
            bg-pattern h-screen p-4 lg
            transition-all duration-200 ease-in-out
        "
      >
          <main
              className="
                lg:grid lg:grid-cols-4 lg:grid-rows-7 lg:gap-4
                md:grid md:grid-cols-3 md:grid-rows-9 md:gap-4
                max-w-7xl mx-auto min-h-full
            "
          >
              <div
                  className="
                    lg:col-span-3 lg:row-span-3
                    md:col-span-3 md:row-span-3
                    border bg-background/80 rounded grid place-items-center
                "
              >
                  1
              </div>
              <div
                  className="
                    lg:row-span-5 lg:col-start-4
                    md:row-span-5 md:row-start-4
                    border bg-background/80 rounded grid place-items-center
                "
              >
                  2
              </div>
              <div
                  className="
                    lg:col-start-4 lg:row-start-6
                    md:col-start-1 md:row-start-9
                    border bg-background/80 rounded grid place-items-center
                "
              >
                  3
              </div>
              <div
                  className="
                    lg:col-start-4 lg:row-start-7
                    md:row-span-3 md:col-start-2 md:row-start-4
                    border bg-background/80 rounded grid place-items-center
                "
              >
                  4
              </div>
              <div
                  className="
                    lg:row-span-4 lg:col-start-1 lg:row-start-4
                    md:col-start-2 md:row-start-7
                    border bg-background/80 rounded grid place-items-center
                "
              >
                  5
              </div>
              <div
                  className="
                    lg:col-start-2 lg:row-start-4
                    md:col-start-2 md:row-start-8
                    border bg-background/80 rounded grid place-items-center
                "
              >
                  6
              </div>
              <div
                  className="
                    lg:row-span-2 lg:col-start-2 lg:row-start-5
                    md:col-start-2 md:row-start-9
                    border bg-background/80 rounded grid place-items-center
                "
              >
                  7
              </div>
              <div
                  className="
                    lg:col-start-2 lg:row-start-7
                    md:col-start-3 md:row-start-4
                    border bg-background/80 rounded grid place-items-center
                "
              >
                  8
              </div>
              <div
                  className="
                    lg:col-start-3 lg:row-start-4
                    md:col-start-3 md:row-start-5
                    border bg-background/80 rounded grid place-items-center
                "
              >
                  9
              </div>
              <div
                  className="
                    lg:col-start-3 lg:row-start-5
                    md:col-start-3 md:row-start-6
                    border bg-background/80 rounded grid place-items-center
                "
              >
                  10
              </div>
              <div
                  className="
                    lg:col-start-3 lg:row-start-6
                    md:col-start-3 md:row-start-7
                    border bg-background/80 rounded grid place-items-center
                "
              >
                  11
              </div>
              <div
                  className="
                    lg:col-start-3 lg:row-start-7
                    md:col-start-3 md:row-start-8
                    border bg-background/80 rounded grid place-items-center
                "
              >
                  12
              </div>
          </main>
      </div>
  );
}
