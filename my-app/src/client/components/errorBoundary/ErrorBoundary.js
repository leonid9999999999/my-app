import { ErrorBoundary } from "react-error-boundary";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

function ErrorFallback() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", margin: 120, color: "white" }}>
            <h2>Something went wrong...</h2>
            <button
                onClick={() => navigate("/home")}
                style={{ fontSize: 18, padding: "10px 20px", marginTop: 20 }}
            >
                Go to Main Page
            </button>
        </div>
    );
}

export default function AppErrorBoundaryWrapper() {
    const location = useLocation();

    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            resetKeys={[location.pathname]} // auto-reset whenever the path changes
        >
            <Outlet />
        </ErrorBoundary>
    );
}
