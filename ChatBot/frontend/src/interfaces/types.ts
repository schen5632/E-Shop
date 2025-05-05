export interface Message {
  id: number;
  sender: "user" | "bot";
  content: string;
}

export interface postBody {
  message: string;
}
