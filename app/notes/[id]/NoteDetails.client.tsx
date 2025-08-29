'use client';

import Loader from '@/components/Loader/Loader';
import { fetchNoteById } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import css from './NoteDetails.module.css';

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const {
    data: note,
    isLoading,
    // isError,
  } = useQuery({
    queryKey: ['myNote', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <div>
      {/* {isError && <p>Something went wrong.</p>} */}
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
    </div>
  );
};

export default NoteDetailsClient;
