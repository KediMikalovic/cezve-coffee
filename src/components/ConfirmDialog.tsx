import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface Props {
  open: boolean;
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmDialog({ open, title, message, onCancel, onConfirm }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-espresso/40 backdrop-blur-sm" onClick={onCancel} />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="relative w-full max-w-sm rounded-3xl glass p-6 shadow-card text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <AlertTriangle />
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold text-forest">{title}</h3>
            <p className="mt-1 text-sm text-muted">{message}</p>
            <div className="mt-5 flex gap-2">
              <button onClick={onCancel} className="btn-ghost flex-1">Vazgeç</button>
              <button
                onClick={onConfirm}
                className="flex-1 rounded-xl bg-red-600 py-2 font-semibold text-white transition hover:bg-red-700"
              >
                Sil
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
