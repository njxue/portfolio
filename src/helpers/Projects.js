const Projects = [
  {
    name: "Odo.t",
    img: "odot.PNG",
    about: {
      motivation: "",
      motivation:
        "Todo lists serve as a reminder to the users the tasks that they have to complete. " +
        "However, users have to remember to add these tasks into the list of todos in the first place. " +
        "If they have forgotten to do so, these tasks will not appear in the todo list, " +
        "and they may end up forgetting about these tasks altogether.",
      description:
        "Odo.t is an online todo-list where todos can be automatically added at every fixed interval (e.g. every day, every week). " +
        "Users only have to set the interval once, and the todo list becomes automated! " +
        "Odo.t also features a set of basic todo list functionalities such as sorting the tasks, grouping tasks together " +
        "and marking certain tasks as important.",
    },

    techs: [
      "react",
      "firebase",
      "typescript",
      "html",
      "css",
      "chakraui",
      "git",
    ],
    githubLink: "https://github.com/njxue/odot",
    productLink: "https://odot.vercel.app",
  },
  {
    name: "Frenergy",
    img: "frenergy.PNG",
    about: {
      motivation: "",
      description:
        "An online forum that caters to NUS students. It is a platform for students to engage in online " +
        "discussions, search and form groups, and facilitate group project planning by managing deadlines and work assignment.",
    },
    techs: [
      "react",
      "firebase",
      "javascript",
      "html",
      "css",
      "chakraui",
      "git",
    ],
    githubLink: "https://github.com/njxue/frenergy",
    productLink: "https://frenergy.vercel.app",
  },
  {
    name: "TA-Assist",
    img: "ta-assist.PNG",
    about: {
      motivation: "",
      description:
        "A brownfield team project as part of CS2103T, TA-Assist is a desktop app for Teaching Assistants (TA) to " +
        "keep track of students’ particulars and allocate marks for attendance and assignments. It is optimized for use via a " +
        "Command Line Interface (CLI) while having the benefits of a Graphical User Interface (GUI).",
    },
    techs: ["java", "git"],
    githubLink: "https://github.com/AY2223S1-CS2103T-T12-1/tp",
  },
];

export default Projects;
