export default function CallOut({ emoji, text }) {
  return (
    <div className="bg-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-200 dark:bg-opacity-10 flex rounded-lg mt-6">
      <div className="pl-3 pr-2 py-2 select-none text-xl">{emoji}</div>
      <div className="pr-4 py-1">{text}</div>
    </div>
  )
}
