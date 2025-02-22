import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';

const LoginScreen = ({ onLogin }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Add loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true); // Set loading to true

        try {
            const formData = new URLSearchParams();
            formData.append('username', email);
            formData.append('password', password);
            formData.append('grant_type', 'password');

            const response = await fetch('http://localhost:8000/token', { // Correct endpoint: /token
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            });

            if (response.ok) {
                const data = await response.json(); // Directly parse JSON
                if (data.access_token) {
                    localStorage.setItem('access_token', data.access_token); // Use localStorage
                    onLogin(data.access_token);
                    navigate('/trainer');
                } else {
                    setError("Login successful, but no token received.");
                }
            } else {
                const errorData = await response.json(); // Try to parse JSON error response

                // More robust error message handling
                const errorMessage = errorData.detail || errorData.message || "Invalid email or password";
                setError(errorMessage);

            }
        } catch (err) {
            console.error("Login Error:", err);
            setError("An error occurred during login. Please try again later.");
        } finally {
            setIsLoading(false); // Set loading to false in finally block
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"} {/* Show loading message */}
                </button>
                <p>
                    Don't have an account? <a href="/create-account">Create Account</a>
                </p>
            </form>
        </div>
    );
};

export default LoginScreen;