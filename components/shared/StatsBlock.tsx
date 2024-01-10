/* eslint-disable @next/next/no-img-element */

interface Stat {
  name?: string
  value?: string
  unit?: string
}

interface StatProps {
  title?: string
  subtitle?: string
  description?: string
  stats: Stat[]
}

export function StatsBlock({title, subtitle, description, stats }: StatProps) {
  return (
    <div className="container">
      <div className="relative">
        <img
          className="object-cover w-full h-56 bg-gray-50 lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
        <div className="grid mx-auto max-w-7xl lg:grid-cols-2">
          <div className="px-6 pt-16 pb-24 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
            <div className="max-w-2xl mx-auto lg:mr-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-8 text-green-600">
                {subtitle}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-300">
                {title}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {description}
              </p>
              <dl className="grid max-w-xl grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                  <div
                    key={stat.name}
                    className="flex flex-col pl-6 border-l gap-y-3 border-gray-900/20 dark:border-gray-700"
                  >
                    <dt className="text-sm leading-6 text-gray-600">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-300">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}