import { useNotes } from "@/hooks/useNotes";
import { useProfile } from "@/hooks/useProfile";
import Header from "@/components/Heading/Header";
import SubHeader from "@/components/Heading/SubHeader";
import NoteUi from "@/components/Body/NoteUi";

function NotesPage() {
  const {
    filteredNotes,
    input,
    setInput,
    filter,
    setFilter,
    loading,
    error,
    addNote,
    deleteNote,
    toggleNote,
    editNote,
    selectedNotes,
    toggleSelect,
    deleteSelectedNotes,
  } = useNotes();

  const { user, logout } = useProfile();

  const handleFilter = (type) => {
    setFilter(type);
  };
  if (!user) return <p className="text-white">Loading user...</p>;

  if (loading) return <p className="text-white">Loading notes...</p>;

  if (error) {
    return (
      <p className="text-red-400">{error.message || "Something went wrong"}</p>
    );
  }

  return (
    <div className="min-h-screen text-white bg-linear-to-br from-black via-purple-950 to-purple-700 py-8">
      <main className="mx-auto w-full max-w-4xl">
        <Header user={user} onLogout={logout} />

        <SubHeader
          filteredNotes={filteredNotes}
          selectedNotes={selectedNotes}
          loading={loading}
        />

        <NoteUi
          filteredNotes={filteredNotes}
          selectedNotes={selectedNotes}
          loading={loading}
          error={error}
          input={input}
          setInput={setInput}
          addNote={addNote}
          filter={filter}
          handleFilter={handleFilter}
          deleteSelectedNotes={deleteSelectedNotes}
          toggleNote={toggleNote}
          editNote={editNote}
          deleteNote={deleteNote}
          toggleSelect={toggleSelect}
        />
      </main>
    </div>
  );
}

export default NotesPage;
