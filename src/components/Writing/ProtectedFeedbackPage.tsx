import { Navigate } from "react-router-dom";
import { useWritingStore } from "../../store/writingStore";

export default function ProtectedFeedbackPage({ children }: { children: TSX.Element }) {
  const canAccess = useWritingStore((s) => s.canAccessFeedback);

  if (!canAccess) return <Navigate to="/writing" />;

  return children;
}
