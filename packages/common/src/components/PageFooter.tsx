export const PageFooter = ({ links }: { links?: React.ReactNode }) => {
  return (
    <footer className="flex flex-row flex-wrap flex-shrink-0 gap-4 justify-end items-center border-solid border-slate-400 border-t-2 border-0 p-4">
      {links}
    </footer>
  )
}
