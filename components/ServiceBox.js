import Image from './Image'
import Link from './Link'

import { logEvent as logGAEvent } from './analytics/GoogleAnalytics'
import { logEvent as logPlausibleEvent } from './analytics/Plausible'
import { logEvent as logSAEvent } from './analytics/SimpleAnalytics'

const ServiceBox = ({ number, title, description, href }) => {
  const logClickEvent = () => {
    logGAEvent('view_service')
    logPlausibleEvent('view_service')
    logSAEvent('view_service')
  }

  return (
    <div className="">
      <div className="h-full overflow-hidden border-t-2 border-gray-200 border-opacity-60 dark:border-gray-700">
        <div className="p-6">
          <p className="py-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {number}
          </p>
          <h2 className="mb-4 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">{description}</p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ServiceBox
