import React, { useState } from 'react';

function ScheduleAppointment() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Appointment Data:', formData);
        // Handle form submission
    };

    return (
        <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Agende sua consulta</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="date">Data:</label>
                    <input 
                        type="text" 
                        id="date" 
                        name="date" 
                        placeholder="dd/mm/yyyy"
                        pattern="\d{2}/\d{2}/\d{4}"
                        value={formData.date} 
                        onChange={handleChange} 
                        className="p-2 border rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="time">Horário:</label>
                    <select 
                        id="time" 
                        name="time" 
                        value={formData.time} 
                        onChange={handleChange} 
                        className="p-2 border rounded-md w-full"
                    >
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                                        </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Seu nome" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="p-2 border rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="seuemail@example.com" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="p-2 border rounded-md w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Agendar</button>
            </form>
        </section>
    );
}

export default ScheduleAppointment;
