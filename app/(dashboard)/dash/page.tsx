import React from "react";

const AllUsers = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center">
        <div className="w-full">some statistics/stuffs</div>
        <div className="border border-black rounded-full p-12">chart</div>
      </div>

      <div>
        <table>
          <tr className="">
            <td className="w-full">All users</td>
            <td className="px-7">
              <select>
                <option value="">Ascending</option>
                <option value="">Descending</option>
              </select>
            </td>
            <td>
              <input
                className="w-44 p-1 border"
                type="search"
                name=""
                id=""
                placeholder="search user"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
