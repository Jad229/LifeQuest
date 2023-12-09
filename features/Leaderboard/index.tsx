import { Card } from "@/components/ui/card";
import FriendTile from "./FriendTile";

const friendsData: {
  id: number;
  name: string;
  level: number;
  userImage: string;
}[] = [
  {
    id: 1,
    name: "Alice",
    level: 10,
    userImage:
      "https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg",
  },
  {
    id: 2,
    name: "Bob",
    level: 8,
    userImage:
      "https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg",
  },
  {
    id: 3,
    name: "Charlie",
    level: 12,
    userImage:
      "https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg",
  },
  // Add more friends as needed
];

function Leaderboard() {
  return (
    <section className="text-center">
      <h1 className="text-2xl mb-5">Friends</h1>
      <Card>
        {friendsData.map((friend) => (
          <FriendTile
            key={friend.id}
            name={friend.name}
            level={friend.level}
            userImage={friend.userImage}
          />
        ))}
      </Card>
    </section>
  );
}

export default Leaderboard;
