import { useEffect, useState } from "react";

const useDataGetting = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, [handleSubmit]);
  return [tasks];
};

export default useDataGetting;
