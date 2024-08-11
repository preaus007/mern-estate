import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  const handleChange = () => {};
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4 px-4">
        <img
          className="w-24 h-24 rounded-full self-center object-cover cursor-pointer"
          src={currentUser.avatar}
          alt="user_image"
        />
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounded-lg"
          value={currentUser.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
          value={currentUser.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg"
          value=""
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase font-semibold transition duration-300 hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between p-4">
        <button className="bg-red-600 text-white rounded-lg p-3 uppercase font-semibold transition duration-300 hover:opacity-95 disabled:opacity-80">
          Delete Account
        </button>
        <button className="bg-purple-600 text-white rounded-lg p-3 uppercase font-semibold transition duration-300 hover:opacity-95 disabled:opacity-80">
          Sign Out
        </button>
      </div>
    </div>
  );
}
