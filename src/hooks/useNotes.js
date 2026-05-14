import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getNotes,
  createNote,
  updateNoteApi,
  deleteNoteApi,
} from "@/services/noteApi";

export function useNotes() {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedNotes, setSelectedNotes] = useState([]);

  const {
    data: notes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const res = await getNotes();
      return res.data;
    },
  });

  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
      setInput("");
    },
  });

  const addNote = () => {
    if (!input.trim()) return;
    addMutation.mutate({ text: input, importance: false });
  };

  const deleteMutation = useMutation({
    mutationFn: deleteNoteApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  const deleteNote = (id) => {
    deleteMutation.mutate(id);
  };

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateNoteApi(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  const toggleNote = (id) => {
    const note = notes.find((n) => n._id === id);
    if (!note) return;

    updateMutation.mutate({
      id,
      data: { importance: !note.importance },
    });
  };

  const editMutation = useMutation({
    mutationFn: ({ id, text }) => updateNoteApi(id, { text }),
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  const editNote = (id, text) => {
    editMutation.mutate({ id, text });
  };

  const deleteSelectedNotes = async () => {
    await Promise.all(selectedNotes.map((id) => deleteNoteApi(id)));
    setSelectedNotes([]);
    queryClient.invalidateQueries(["notes"]);
  };

  const toggleSelect = (id) => {
    setSelectedNotes((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const filteredNotes = (notes || []).filter((note) => {
    if (filter === "important") return note.importance;
    if (filter === "normal") return !note.importance;
    return true;
  });

  return {
    filteredNotes,
    input,
    setInput,
    filter,
    setFilter,
    loading: isLoading,
    error,
    addNote,
    deleteNote,
    toggleNote,
    editNote,
    selectedNotes,
    toggleSelect,
    deleteSelectedNotes,
  };
}
