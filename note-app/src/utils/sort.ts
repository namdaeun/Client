import { categoryList } from "../constants/filter";
import { NoteProps } from "../hooks/useFetchData";

export const sortData = (data: NoteProps[], category: string): NoteProps[] => {
  let resData = [...data];
  switch(category) {
    case categoryList[0]: {
      // 최신생성순
      return resData.sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime());
    }
    case categoryList[1]: {
      // 최신수정순
      return resData.sort((a, b) => new Date(b.editDate).getTime() - new Date(a.editDate).getTime());
    }
    case categoryList[2]: {
      // 제목순
      return resData.sort((a, b) => a.title.localeCompare(b.title));
    }
    case categoryList[3]: {
      // 즐겨찾기만
      return resData.filter(note => note.like);
    }
    default:
      return resData;
  }  
};