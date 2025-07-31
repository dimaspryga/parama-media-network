import { Skeleton } from "@/components/ui/skeleton"

export default function ServicesSkeleton() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-48 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto mb-2" />
          <Skeleton className="h-6 w-80 mx-auto" />
        </div>

        {/* Services Skeleton */}
        <div className="space-y-20">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Skeleton */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Skeleton className="w-16 h-16 rounded-2xl mb-6" />
                <Skeleton className="h-8 w-64 mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-5/6 mb-6" />

                <div className="grid grid-cols-2 gap-3">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              </div>

              {/* Image Skeleton */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Skeleton className="aspect-[4/3] rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
