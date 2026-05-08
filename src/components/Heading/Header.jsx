import Profile from "./Profile";

function Header({ user, onLogout }) {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5 rounded-2xl border bg-slate-50/70 border-purple-100 p-4">

      <Profile user={user} onLogout={onLogout} />

      <div className="text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-sm">
          <span>📋</span>
          <span>Smart Notes Manager</span>
        </div>

        <p className="mt-2 max-w-xl text-purple-700 text-sm sm:text-base">
          Create, edit, delete, and prioritize your notes.
        </p>
      </div>

    </section>
  );
}

export default Header;