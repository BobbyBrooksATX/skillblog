export default function PageTitle({ children }) {
  return (
    <h1 className="max-w-3xl mx-auto text-3xl font-extrabold font-sans leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
