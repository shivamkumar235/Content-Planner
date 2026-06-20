// import React from 'react

const Priorityshow = (propes) => {
  return (
    <span
      className={`flex items-center  w-fit ${propes.prioritycolor} gap-1 rounded-2xl px-4 py-[0.2vw]  `}
    >
      <p> {propes.priority}</p>
    </span>
  );
};

export default Priorityshow;
