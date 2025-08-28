'use client';

import Loader from '@/components/Loader/Loader';
import { fetchNoteById } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import css from './NoteDetails.module.css';

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['myNote', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <div>
      {note && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note.title}</h2>
            </div>
            <p className={css.content}>{note.content}</p>
            <p className={css.date}>{note.createdAt}</p>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
      {isError && <p>Something went wrong.</p>}
    </div>
  );
};

export default NoteDetailsClient;
