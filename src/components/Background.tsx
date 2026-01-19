import image from "../assets/bg2.png"
const Background = () => {
  return (
    <div className="flex flex-col w-full">
         {[...Array(6)].map((_, i) => (
            <img 
              key={i}
              src={image} 
              alt="" 
              className="w-full h-auto select-none pointer-events-none -mt-[18px]"
              style={{ transform: i % 2 !== 0 ? 'scaleY(-1)' : 'none' }}
            />
         ))}
    </div>
  )
}

export default Background