import { useEffect, useReducer } from "react";

export type NoteProps = {
  id: string;
  title: string;
  content: string;
  date: string;
  like: boolean;
}

type ActionProps = { type: 'INIT'; data: NoteProps[] }
  | { type: 'CREATE'; data: NoteProps }
  | { type: 'REMOVE'; targetId: string }
  | { type: 'EDIT'; data: NoteProps }

const reducer = (state: NoteProps[], action: ActionProps): NoteProps[] => {
  let newState: NoteProps[] = [];
  switch (action.type) {
    case "INIT": {
      newState = action.data;
      break;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((note) => note.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((note) =>
        note.id === action.data.id ? { ...action.data } : note
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("noteData", JSON.stringify(newState));
  return newState;
};

export const useFetchData = () => {
  const initialState = JSON.parse(localStorage.getItem("noteData") || '[]');
  const [data, dispatch] = useReducer(reducer, initialState);

  // 첫 렌더링 시에만 localStorage에서 데이터 불러오기
  useEffect(() => {
    const loadedData = JSON.parse(localStorage.getItem("noteData") || '[]');
    dispatch({ type: "INIT", data: loadedData})
  }, [data]);

  return { data, dispatch };
};