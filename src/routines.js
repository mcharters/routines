const routines = {
  daily: [
    {
      id: 1,
      name: "Breakfast",
      tasks: [
        { name: "Wake up", complete: false },
        { name: "Brush teeth", complete: false },
        { name: "Get dressed", complete: false },
        { name: "Make bed", complete: false },
        { name: "Eat breakfast", complete: false },
        { name: "Clear table", complete: false },
        { name: "Pack backpack", complete: false },
        { name: "Take medicine", complete: false },
        { name: "Put on outdoor clothes", complete: false },
      ],
    },
    {
      id: 2,
      name: "After School",
      tasks: [
        { name: "Take off outdoor clothes", complete: false },
        { name: "Put away backpack", complete: false },
        { name: "Wash hands", complete: false },
        { name: "Eat snack", complete: false },
      ],
    },
    {
      id: 3,
      name: "Dinner Time",
      tasks: [
        { name: "Wash hands", complete: false },
        { name: "Eat dinner", complete: false },
        { name: "Sit at table", complete: false },
        { name: "Clear table", complete: false },
      ],
    },
    {
      id: 4,
      name: "Bedtime",
      tasks: [
        { name: "Bath or shower", complete: false },
        { name: "Put on pajamas", complete: false },
        { name: "Snack", complete: false },
        { name: "Snack tidied up", complete: false },
        { name: "Brush teeth", complete: false },
        { name: "YouTube time", complete: false },
      ],
    },
  ],
  weekly: [
    {
      id: 5,
      name: "Allowance Chores",
      tasks: [
        { name: "Sort laundry", complete: false },
        { name: "Put away laundry", complete: false },
        { name: "Tidy room", complete: false },
        { name: "Bring up garbage bins", complete: false },
        { name: "Help outdoors", complete: false },
      ],
    },
  ],
};

export const names = {
  daily: {
    name: "Daily",
    singular: "Day",
  },
  weekly: {
    name: "Weekly",
    singular: "Week",
  },
};

export default routines;
