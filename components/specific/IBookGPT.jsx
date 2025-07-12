import {
  FaCircle,
  FaPrint,
  FaRobot,
  FaThumbsDown,
  FaThumbsUp,
  FaUser,
} from "react-icons/fa";

export function FeedbackButtons() {
  return (
    <div className="flex gap-2 mt-2 text-gray-500">
      <FaThumbsUp
        title="Like"
        className="cursor-pointer hover:text-green-500"
      />
      <FaThumbsDown
        title="Dislike"
        className="cursor-pointer hover:text-red-500"
      />
      <FaPrint
        title="Copy"
        className="cursor-pointer ml-auto hover:text-indigo-600"
      />
    </div>
  );
}

export function EmptyChatMessage() {
  return (
    <div className="text-center text-gray-400 italic py-6">
      Start by asking a question above to get helpful answers.
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="flex items-center justify-center h-full w-full text-indigo-600 animate-pulse">
      <div className="text-lg font-semibold">Loading...</div>
    </div>
  );
}

export function TypingLoader() {
  return (
    <div className="flex items-center gap-3 mt-3 text-sm text-gray-600 dark:text-gray-300">
      {/* AI Avatar */}
      <div className="bg-purple-600 text-white p-2 rounded-full">
        <FaRobot className="text-xs" />
      </div>

      {/* Typing Dots */}
      {/* <div className="flex items-center gap-1">
        <FaCircle className="animate-bounce text-xs text-purple-400" />
        <FaCircle className="animate-bounce text-xs text-purple-400 delay-500" />
        <FaCircle className="animate-bounce text-xs text-purple-400 delay-1000" />
      </div> */}

      {/* Label */}
      <span className="ml-2 italic text-gray-500 dark:text-gray-400">
        Thinking...
      </span>
    </div>
  );
}

export function Message({ msg }) {
  return (
    <div
      className={`flex items-start gap-2 ${
        msg.type === "user" ? "justify-end" : ""
      }`}
    >
      {/* Avatar */}
      {msg.type === "ai" && (
        <div className="bg-purple-600 text-white p-2 rounded-full">
          <FaRobot />
        </div>
      )}
      {msg.type === "user" && (
        <div className="bg-gray-300 text-white p-2 rounded-full">
          <FaUser />
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`p-3 rounded-lg max-w-[80%] text-sm ${
          msg.type === "ai"
            ? "bg-purple-100 text-gray-800"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {msg.text}
        {msg.type === "ai" && <FeedbackButtons />}
      </div>
    </div>
  );
}
