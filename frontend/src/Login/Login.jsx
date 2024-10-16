import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


export const Login = () => {
  const [loginParam, setLoginRequest] = useState({ mail: "", pass: "" });

  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
    crossDomain: true,

  })

  const loginExecute = (e) => {
    const mail = loginParam.mail;
    const pass = loginParam.pass;
    e.preventDefault();
    axiosInstance({
      method: "GET",
      url: "https://192.168.0.17:8080/login/",
      params: {
        mail,
        pass
      },
    })
      .then((response) => {
        if (response.data.status === "OK") {
          console.log(response.data.message)
        } else {
          console.log(response.data.message)
        }
      })
      .catch((error) => {
        console.log(error.code);
      });
  }

  return (
    <div class="mx-2">
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="space-y-6">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">ようこそ、ログインはこちらから</h5>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">メールアドレス</label>
            <input type="email" name="email" id="email"
              onChange={(e) => {
                setLoginRequest({ ...loginParam, mail: e.target.value });
              }}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@○○.com" required />
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">パスワード</label>
            <input type="password" name="password" id="password" placeholder="••••••••"
              onChange={(e) => {
                setLoginRequest({ ...loginParam, pass: e.target.value });
              }}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div class="flex items-start">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              </div>
              <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ログイン状態を保持する</label>
            </div>
            <a href="./" class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">パスワードを忘れましたか？</a>
          </div>
          <button type="submit"
            onClick={loginExecute}
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ログイン</button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            登録がお済ではないですか？ <a href="./" class="text-blue-700 hover:underline dark:text-blue-500"><Link to="/signup">登録</Link></a>
          </div>
        </div>
      </div>
    </div>
  );
};