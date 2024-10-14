import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";


export const SignupConfirm = () => {

  const location = useLocation();
  const userInfo = location.state.userInfo.user;
  const navigate = useNavigate();


  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      "Access-Control-Allow-Origin": "*",
    },
    responseEncoding: 'shift_jis',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance({
      method : "GET",
      url : "http://localhost:8080/signup",
      params: {
        userInfo,
      },
    })
    .then((response)=> {
      console.log(response);
      if (response.data.status === "success") {
        navigate("/signupComplete")
      } else {
        navigate("/error");
      }
    })
    .catch((error)=> {
      console.error(error);
    });
  }
  

  return (
    <div class="min-h-screen bg-slate-50">
      <div class="flex justify-center items-center">
        <div class="mt-8">
          <div class="mb-8">
            <div class="font-bold">お客様情報の確認</div>
            <br />
            <p class="font-sans">以下の情報が正しいことをご確認ください。</p>
          </div>
          <div class="mb-8">
            <label for="name" class="text-sm block">お名前:</label>
            <p class="font-sans">{userInfo.name}</p>
          </div>
          <div class="mb-8">
            <label for="email" class="text-sm block">Eメール:</label>
            <p class="font-sans">{userInfo.mail}</p>
          </div>
          <div class="mb-8">
            <label for="email" class="text-sm block">パスワード:</label>
            <p class="font-sans">{userInfo.pass}</p>
          </div>
          <div class="mb-8">
            <label for="address" class="text-sm block">住所:</label>
            <p class="font-sans">{userInfo.address}</p>
          </div>
          <div class="mb-8">
            <label for="phone_number" class="text-sm block">電話番号:</label>
            <p class="font-sans">{userInfo.tel}</p>
          </div>
          <div class="mb-8">
          <button type="button" onClick={handleSubmit} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-amber-300 dark:focus:ring-blue-800">
            登録する
          </button>
          </div>
          <div class="mb-8">
          <button type="button" class="w-full text-white bg-stone-600 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-stone-600 dark:hover:bg-stone-300 dark:focus:ring-stone-800">
          <Link to="/signup">入力内容を変更する</Link>
          </button>
          </div>
        </div>
      </div>
    </div>

  );
};