import { useState } from "react";
import Rating from "react-rating";
import {TrophyIconEmpty, TrophyIconFull} from "./icons/TrophyIcon";

export default function ReviewModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onClose({review: review, rating: rating});
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
      <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-lg p-5">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Rating com react-rating */}
        <div className="flex justify-center mb-4">
          <Rating
            initialRating={rating}
            onChange={(value) => setRating(value)}
            emptySymbol={<TrophyIconEmpty className="w-7 h-7"/>}
            fullSymbol={<TrophyIconFull className="w-7 h-7"/>}
            fractions={1}
          />
        </div>

        {/* Título */}
        <h2 className="text-base font-semibold mb-3 text-center">
          Escreva a sua review
        </h2>

        {/* Textarea */}
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Escreva aqui o motivo da sua avaliação"
          className="w-full h-28 p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none mb-4"
        />

        {/* Botão enviar */}
        <button
          onClick={handleSubmit}
          disabled={rating === 0}
          className={`w-full py-3 rounded-xl font-medium transition ${
            rating === 0
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          Enviar Review
        </button>
      </div>
    </div>
  );
}
