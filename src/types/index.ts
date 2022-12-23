export interface CustomInputProps {
  control: any;
  name: string;
  rules: object;
  placeholder: string;
  secureTextEntry?: boolean;
}

export interface LoginButtonProps {
  title: string;
  onPress: (event: any) => void;
}

export interface HeaderProps {
  title: string;
  onPress: (event: any) => void;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostCardProps {
  data: any;
}

export interface ModalProps {
  id: number;
  openModal: boolean;
  setOpenModal: (param: boolean) => void;
}

export interface CommentsProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CommentCardProps {
  comments: any;
}
