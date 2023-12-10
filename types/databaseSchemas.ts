type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  accounts: Account[];
  sessions: Session[];
  quests: DatabaseQuest[];
  level: number;
  xp: number;
};

type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
  user: User;
};

type Session = {
  id: string;
  userId: string;
  expires: Date;
  sessionToken: string;
  user: User;
};

// This is the type of the quest object that is stored in the database  (prisma)
type DatabaseQuest = {
  id: string;
  title: string;
  skill: string;
  description?: string | null | undefined;
  difficulty: string;
  category: string;
  expGain: number;
  userId: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
};

export type { User, Account, Session, DatabaseQuest };
