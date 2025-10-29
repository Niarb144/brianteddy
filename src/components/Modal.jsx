"use client";

export default function Modal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-[--Primary-background] text-[--Primary-text] rounded-2xl p-6 w-11/12 max-w-2xl relative animate-[fadeIn_0.3s_ease]">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold cursor-pointer"
        >
          ×
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <p className="text-[--Secondary-color]">
          A detailed description about the project could go here.
        </p>
      </div>
    </div>
  );
}
