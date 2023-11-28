import Image from "next/image"

interface FriendTileProps {
    name: string,
    level: number,
    userImage: string,
}

function FriendTile({name, level, userImage}: FriendTileProps): JSX.Element {
  return (
    <div className="flex items-center gap-10 p-4 border-b border-neutral-800 rounded-md">
        <Image className="rounded-full" src={userImage} alt="profile picture default" width={75} height={75}/>
        <h2>{name}</h2>
        <p>Level: {level}</p>
    </div>
  )
}

export default FriendTile