import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from './logo'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from '@/components/Image'
import BobbyBrooks from './bobbyBrooks'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="block">
        <header className="px-8 mx-auto flex items-center justify-between max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 py-4">
          <div>
            <Link href="/" aria-label="Mindset Creative Agency Home">
              <div className="flex items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src="/static/img/avatar.png"
                    width="55px"
                    height="55px"
                    alt="Bobby Brooks"
                    className="w-10 h-10 rounded-full border-2"
                  />
                  <BobbyBrooks className="-mt-2 font-serif hidden md:block text-2xl font-bold dark:text-gray-100 md:w-40 lg:w-60 text-gray-900 current-color pt-2" />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
