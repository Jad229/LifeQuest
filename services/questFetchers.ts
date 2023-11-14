
interface Quest{
  id: number;
  title: string;
  expGain: number;
  skills: string[];
  description: string;
  category: string;
  date?: Date;
}

const quests: Quest[] = [
    {
      id: 1,
      title: "Coding Project",
      expGain: 100,
      skills: ["Programming", "Problem Solving"],
      description: "Work on a coding project to improve your programming skills.",
      category: "Todos"
    },
    {
      id: 2,
      title: "Gym Workout",
      expGain: 50,
      skills: ["Fitness", "Strength"],
      description: "Hit the gym and have a good workout session.",
      category: "Habits"
    },
    {
      id: 3,
      title: "Reading Challenge",
      expGain: 30,
      skills: ["Intellect", "Knowledge"],
      description: "Read 10 pages of a book to expand your knowledge.",
      category: "Dailies"
    },
    {
      id: 4,
      title: "Meditation",
      expGain: 40,
      skills: ["Mental Clarity", "Stress Management"],
      description:
        "Practice meditation for 15 minutes to improve mental clarity and reduce stress.",
      category: "Dailies"
    },
    {
      id: 5,
      title: "Cooking Experiment",
      expGain: 60,
      skills: ["Culinary", "Creativity"],
      description:
        "Try cooking a new recipe and experiment with different ingredients.",
      category: "Habits"
    },
  ];

async function fetchDailyQuests(){
    return quests;
}

async function fetchHabitQuests(){
    return quests;
}

async function fetchTodoQuests(){
    return quests;
}

export {fetchDailyQuests, fetchHabitQuests, fetchTodoQuests};