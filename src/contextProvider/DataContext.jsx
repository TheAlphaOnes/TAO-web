import { createContext, useContext, useEffect, useReducer } from "react";
import { getData } from "../services/data";

const CurrentContext = createContext();

const inititalState = {
  data: null,
  status: "idle", // "idle" | "error" | "loading"
  lists: { list1: [], list2: [] },
  projectIndex: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataFetch/loading":
      return { ...state, status: "loading" };
    case "dataFetch/finished": {
      const list1 = [];
      const list2 = [];

      state.projectIndex = action.payload.launches[0].id;

      if (action.payload.launches.length % 2 === 0) {
        const half = action.payload.launches.length / 2;
        action.payload.launches.forEach((el, i) => {
          i < half
            ? list1.push({
                id: el.id,
                desc: el.name,
                one_line_desc: el["one-line-disc"],
              })
            : list2.push({
                id: el.id,
                desc: el.name,
                one_line_desc: el["one-line-disc"],
              });
        });
      }
      if (action.payload.launches.length % 2 !== 0) {
        const roundedHalf = Math.ceil(action.payload.launches.length / 2);
        action.payload.launches.forEach((el, i) => {
          i < roundedHalf
            ? list1.push({
                id: el.id,
                desc: el.name,
                one_line_desc: el["one-line-disc"],
              })
            : list2.push({
                id: el.id,
                desc: el.name,
                one_line_desc: el["one-line-disc"],
              });
        });
      }
      return {
        ...state,
        status: "finished",
        data: action.payload,
        lists: { list1, list2 },
      };
    }
    case "dataFetch/error":
      return {
        ...state,
        status: "error",
      };
    case "dataFetch/changeProjectIndex":
      return {
        ...state,
        projectIndex: action.payload,
      };
  }
}

export function DataContext({ children }) {
  const [state, dispatch] = useReducer(reducer, inititalState);

  useEffect(function () {
    async function fetchData() {
      try {
        dispatch({ type: "dataFetch/loading" });
        const data = await getData();
        dispatch({ type: "dataFetch/finished", payload: data });
      } catch (e) {
        dispatch({ type: "dataFetch/error" });
        console.error("Something Went wrong");
      }
    }
    fetchData();
  }, []);

  return (
    <CurrentContext.Provider value={{ state, dispatch }}>
      {children}
    </CurrentContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(CurrentContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}
