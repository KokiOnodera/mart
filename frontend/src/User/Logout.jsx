import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


export const Logout = () => {

  const navigate = useNavigate();

  window.setTimeout(topTransition, 5000);

  function topTransition() {
    navigate('/');
  }

  return (
    <div class="flex min-h-screen bg-slate-50">
      <div class="mx-2">
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="space-y-6">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">ログアウトしました</h5>
            5秒後にTOPに遷移します。
          </div>
        </div>
      </div>
    </div>
  );
};