export interface IMenu {
  name: string;
  path: string;
}

export interface IAnswer {
  name: string;
  isCorrect: boolean;
}

export interface ICourse {
  question: string;
  answers: IAnswer;
}

export interface IDanhMuc {
  name: string;
  path: string;
  imgUrl: string;
  // course?: ICourse[];
}
