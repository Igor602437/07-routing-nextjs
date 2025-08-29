'use client';

import Modal from '@/components/Modal/Modal';
import { fetchNoteById } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import css from './NotePreview.module.css';
import Loader from '@/components/Loader/Loader';

const NotePreviewClient = () => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  const { id } = useParams<{ id: string }>();
  const { data: note, isLoading } = useQuery({
    queryKey: ['myNotes', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <Modal onClose={handleClose}>
      {note && (
        <div className={css.container}>
          <h2 className={css.title}>{note.title}</h2>{' '}
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </Modal>
  );
};

export default NotePreviewClient;
