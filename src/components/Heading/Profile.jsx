import { useState, useEffect, useRef } from "react";

function Profile({ user, onLogout }) {
  const [showProfile, setShowProfile] = useState(false);
  const ref = useRef()

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div className="relative flex p-2 sm:p-4" ref={ref}>
      <img
        src={`https://ui-avatars.com/api/?name=${user.name}`}
        alt="profile"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer"
        onClick={toggleProfile}
      />

      {showProfile && (
        <div className="absolute left-20  w-56 sm:w-60 rounded-2xl border border-gray-200 bg-slate-50/70 p-4 sm:p-3 shadow-2xl backdrop-blur-md">

          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-violet-100 text-lg sm:text-xl font-bold text-violet-700">
              {user.name?.charAt(0)}
            </div>

            <div>
              <h2 className="text-sm sm:text-lg font-semibold text-violet-700">
                Welcome back !
              </h2>
              <p className="text-xs sm:text-sm text-black">
                User Dashboard
              </p>
            </div>
          </div>

          <div className="mb-4 border-t border-gray-200"></div>

          <div className="space-y-1 text-left">
            <p className="text-sm sm:text-base text-black">
              Name : {user.name}
            </p>

            <p className="truncate text-xs sm:text-sm text-black">
              Email : {user.email}
            </p>
          </div>

          <button
            onClick={onLogout}
            className="mt-4 sm:mt-6 w-full rounded-xl bg-violet-700 py-2 text-sm sm:text-base font-medium text-white transition hover:bg-violet-800 active:scale-[0.98]"
          >
            Logout
          </button>

        </div>
      )}
    </div>
  );
}

export default Profile;