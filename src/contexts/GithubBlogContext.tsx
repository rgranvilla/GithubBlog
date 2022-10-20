import { AxiosError } from 'axios';
import { createContext, ReactNode, useEffect, useState } from 'react';
import api from '../services/api';

interface UserDTO {
  avatar_url: string;
  name: string;
  html_url: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

export interface IssuesDTO {
  number: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
  comments: number;
  body: string;
  created_at: Date;
}

interface ResponseErrorType {
  message: string;
  type: string;
}

interface GithubBlogContextType {
  user: UserDTO;
  posts: IssuesDTO[];
  activedPost: IssuesDTO;
  error: ResponseErrorType;
  getPost: (issueNumber: string) => Promise<void>;
  searchIssues: (searchBy: string) => Promise<void>;
}

export const GithubBlogContext = createContext({} as GithubBlogContextType);

interface GithubBlogContextProviderProps {
  children: ReactNode;
}

export function GithubBlogContextProvider({ children }: GithubBlogContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({
    avatar_url: '',
    name: '',
    html_url: '',
    bio: '',
    login: '',
    company: '',
    followers: 0,
  });
  const [posts, setPosts] = useState<IssuesDTO[]>([]);
  const [activedPost, setActivedPost] = useState<IssuesDTO>({
    number: 0,
    html_url: '',
    title: '',
    user: {
      login: '',
    },
    comments: 0,
    body: '',
    created_at: new Date(),
  });
  const [error, setError] = useState<ResponseErrorType>({
    message: '',
    type: '',
  });

  async function getUser() {
    try {
      const response = await api.get('/users/rgranvilla');
      setUser(response.data);
    } catch (err) {
      console.error(error);
    }
  }

  async function getIssues(): Promise<void> {
    try {
      const response = await api.get(`/repos/rgranvilla/GithubBlog/issues`);
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getPost(issueNumer: string): Promise<void> {
    try {
      const response = await api.get(`/repos/rgranvilla/GithubBlog/issues/${issueNumer}`);
      setActivedPost(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function searchIssues(searchBy: string) {
    try {
      const response = await api.get(
        `https://api.github.com/search/issues?q=${searchBy}%20repo:rgranvilla/GithubBlog`,
      );
      setPosts(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
    getIssues();
  }, []);

  return (
    <GithubBlogContext.Provider
      value={{
        user,
        posts,
        activedPost,
        error,
        getPost,
        searchIssues,
      }}
    >
      {children}
    </GithubBlogContext.Provider>
  );
}
