
type SectionHeaderProps = {
    children: React.ReactNode
};

const SectionHeader = ({children}: SectionHeaderProps) => {
  return (
    <h2 className="dark:text-[#b7ab98] uppercase tracking-[.5em] pb-10 text-center">
      {children}
    </h2>
  )
}

export default SectionHeader