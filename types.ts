
export type apiKey = {
  apiKey: string;
};

export type UserInfo = {
  userId: string;
  email: string;
  username: string;
  apiKeys: apiKey[];
  createdAt: string;
};
