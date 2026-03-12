import React, { useState } from "react";

interface FormData {
    username: string;
    email: string;
    age: number;
    country: string;
}

export default function RegistrationForm() {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        email: "",
        age: 0,
        country: "",
    });

    const [submitted, setSubmitted] = useState<FormData | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "age" ? Number(value) : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(formData);
    };

    const handleClear = () => {
        setFormData({
            username: "",
            email: "",
            age: 0,
            country: "",
        });
        setSubmitted(null);
    };

    return (
        <div className="max-w-md mx-auto p-4 border rounded-md shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full border px-2 py-1 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border px-2 py-1 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1">Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full border px-2 py-1 rounded"
                        min={0}
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1">Country:</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border px-2 py-1 rounded"
                        required
                    />
                </div>

                <div className="flex space-x-2">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={handleClear}
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Clear
                    </button>
                </div>
            </form>

            {submitted && (
                <div className="mt-4 p-4 border rounded bg-gray-50">
                    <h3 className="font-semibold mb-2">Submitted Data:</h3>
                    <p><strong>Username:</strong> {submitted.username}</p>
                    <p><strong>Email:</strong> {submitted.email}</p>
                    <p><strong>Age:</strong> {submitted.age}</p>
                    <p><strong>Country:</strong> {submitted.country}</p>
                </div>
            )}
        </div>
    );
}