import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


export const Signup = () => {
  const  [user, setUser] = useState({ name: "", mail: "", pass: "", address: "", tel: "" });


  return (
    <div class="min-h-screen bg-slate-50">
      <div class="flex justify-center items-center">
        <div class="mt-8">
          <div class="mb-8">
            <div class="font-bold">アカウントを作成</div>
          </div>
          <div class="mb-8">
            <label for="name" class="text-sm block">お名前　<span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">必須</span></label>
            <input type="text" id="name" class="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" 
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }} placeholder="山田太郎" />
          </div>
          <div class="mb-8">
            <label for="email" class="text-sm block">Eメール　<span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">必須</span></label>
            <input type="email" id="email" class="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50"
            onChange={(e) => {
              setUser({ ...user, mail: e.target.value });
            }} placeholder="Eメール" />
          </div>
          <div class="mb-8">
            <label for="email" class="text-sm block">パスワード　<span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">必須</span></label>
            <input type="password" id="password" class="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50"
            onChange={(e) => {
              setUser({ ...user, pass: e.target.value });
            }} placeholder="パスワード" />
          </div>
          <div class="mb-8">
            <label for="address" class="text-sm block">住所　<span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">必須</span></label>
            <input type="text" id="address" class="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50"
            onChange={(e) => {
              setUser({ ...user, address: e.target.value });
            }} placeholder="住所" />
          </div>
          <div class="mb-8">
            <label for="phone_number" class="text-sm block">電話番号　<span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">必須</span></label>
            <input type="tel" id="phone_number" class="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50"
            onChange={(e) => {
              setUser({ ...user, tel: e.target.value });
            }} placeholder="電話番号" />
          </div>
          <div class="mb-8">
          <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-amber-300 dark:focus:ring-blue-800">
          <Link to="/signupConfirm" state={{ userInfo : {user}}}>次に進む</Link>
          </button>
          </div>
        </div>
      </div>
    </div>

  );
};