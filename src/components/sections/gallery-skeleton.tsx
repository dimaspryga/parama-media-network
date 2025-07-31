import { Skeleton } from "@/components/ui/skeleton"

export default function GallerySkeleton() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto mb-2" />
          <Skeleton className="h-6 w-80 mx-auto" />
        </div>

        {/* Filter Skeleton */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-10 w-24 rounded-full" />
          ))}
        </div>

        {/* Masonry Gallery Skeleton */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="break-inside-avoid mb-6">
              <Skeleton className="w-full rounded-lg" style={{ height: `${300 + (index % 3) * 50}px` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
