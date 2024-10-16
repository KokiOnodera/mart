import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


export const UserModal = ({user}) => {

  return (
    <div class="mx-2">
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="space-y-6">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">ようこそ、{user.user_name}さん</h5>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">買い物かご</label>
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">お買い物を始める</label>
          </div>
          <button type="button"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">注文履歴</button>
        </div>
      </div>
    </div>
  );
};