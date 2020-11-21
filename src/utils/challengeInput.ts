import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

export const getChallengeInput = async function (year: string, day: string) {
  const URL = `https://adventofcode.com/${year}/day/${day}`;
  const header = {
    Cookie: process.env['COOKIE'],
  };
  const web = axios.create({
    baseURL: URL,
    headers: header,
  });
  const response = await web.get('/input');
  return response.data;
};
