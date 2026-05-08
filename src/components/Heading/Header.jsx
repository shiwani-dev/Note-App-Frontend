import Profile from "./Profile";

function Header({ user, onLogout }) {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5 rounded-2xl border bg-slate-50/70 border-purple-100 p-4">

    
      <div className="self-start sm:self-auto">
        <Profile user={user} onLogout={onLogout} />
      </div>

      
      <div className="flex-1 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-sm">
          <span>📋</span>
          <span>Smart Notes Manager</span>
        </div>

        <p className="mt-2 max-w-xl text-purple-700 text-sm sm:text-base">
          Create, edit, delete, and prioritize your notes.
        </p>
      </div>

      <div className="hidden sm:block w-10" />
      
    </section>
  );
}

export default Header;