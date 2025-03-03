import { FaImage } from "react-icons/fa"
import Title from "../titleComp/title"

export default function gallery() {
  return(
    <>
    <Title title="About Me" subtitle="About Components" Icon={FaImage} />
    <div className="border-b border-zinc-800 w-full" />
    <div className="h-auto lg:h-auto px-8 lg:px-20">
      <div className="flex flex-col h-full bg-zinc-950 border-x border-x-zinc-800">
        
      </div>
     </div>   
    </>
  )
}