const Background = () => {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-[#1C32E6] via-[#2C39F0] to-[#7D23F7]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,194,255,0.4),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(125,35,247,0.35),_transparent_60%)]" />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  )
}

export default Background
