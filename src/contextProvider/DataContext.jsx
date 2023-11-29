import { createContext, useContext, useEffect, useReducer } from "react";
import { getData } from "../services/data";

const CurrentContext = createContext();

const inititalState = {
  data: null,
  status: "idle", // idle, error, loading
};

function reducer(state, action) {
  switch (action.type) {
    case "dataFetch/loading":
      return { ...state, status: "loading" };
    case "dataFetch/finished":
      return { ...state, status: "finished", data: action.payload };
    case "dataFetch/error":
      return {
        ...state,
        status: "error",
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
    <CurrentContext.Provider value={{ state }}>
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
