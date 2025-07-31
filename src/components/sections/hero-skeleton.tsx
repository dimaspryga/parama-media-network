import { Skeleton } from "@/components/ui/skeleton";

export default function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Skeleton */}
      <Skeleton className="absolute inset-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Skeleton */}
          <div className="text-center lg:text-left">
            {/* Trust indicators skeleton */}
            {/* <div className="flex items-center justify-center lg:justify-start gap-6 mb-6">
              <Skeleton className="h-8 w-24 rounded-full" />
              <Skeleton className="h-8 w-24 rounded-full" />
              <Skeleton className="h-8 w-24 rounded-full" />
            </div> */}

            {/* Title skeleton */}
            <Skeleton className="h-16 w-full mb-4" />
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-5/6 mb-8" />

            {/* Buttons skeleton */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>

          {/* Right Content Skeleton */}
          {/* <div className="relative lg:block hidden">
            <div className="grid grid-cols-2 gap-6">
              {[...Array(4)].map((_, index) => (
                <Skeleton key={index} className="h-32 w-full rounded-xl" />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
