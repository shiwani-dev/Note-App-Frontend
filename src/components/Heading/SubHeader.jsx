function SubHeader({
  filteredNotes = [],
  selectedNotes = [],
  loading = false,
}) {
  return (
    <section className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      <div className="rounded-2xl border border-purple-100 bg-slate-50/70 p-3 sm:p-4 shadow-sm transition hover:shadow-md">
        <p className="text-xs sm:text-sm text-black">Visible Notes</p>
        <h2 className="mt-1 text-xl sm:text-2xl font-bold text-black">
          {filteredNotes.length}
        </h2>
      </div>

      <div className="rounded-2xl border border-violet-100 bg-slate-50/70 p-3 sm:p-4 shadow-sm transition hover:shadow-md">
        <p className="text-xs sm:text-sm text-black">Selected</p>
        <h2 className="mt-1 text-xl sm:text-2xl font-bold text-black">
          {selectedNotes.length}
        </h2>
      </div>

      <div className="rounded-2xl border border-pink-100 bg-slate-50/70 p-3 sm:p-4 shadow-sm transition hover:shadow-md">
        <p className="text-xs sm:text-sm text-black">Status</p>
        <h2 className="mt-1 text-sm sm:text-base font-semibold text-black">
          {loading ? "Loading..." : "Ready"}
        </h2>
      </div>
    </section>
  );
}

export default SubHeader;
