import { Link } from "react-router-dom";


export const Page404 = () => {

  return (
    <div class="min-h-screen bg-slate-50">
      <div class="flex justify-center items-center">
        <div class="mt-8">
          <div class="mb-8">
            <div class="font-bold">404</div>
            <br />
            <p class="font-sans">お探しのページは存在しませんでした。</p>
          </div>
          <div class="mb-8">
            <Link to="/">
              <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-amber-300 dark:focus:ring-blue-800">
                TOPへ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};