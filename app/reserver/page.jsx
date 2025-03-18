
"use client";
import React, { useState } from "react";
import styles from "../reserver/page.module.css";

    const Reservation = () => {
    const [formData, setFormData] = useState({
    name: "",
    secondname:"",
    email: "",
    date: "",
    time: "",
    people: "",
    room: ""
  });

  const [reservations, setReservations] = useState([]);

  const rooms = [
    "Salle A", "Salle B", "Salle C", "Salle D", "Salle E", "Salle F", "Salle G", "Salle H", "Salle I", "Salle J", "Salle K", "Salle L", "Salle M", "Salle N", "Salle O", "Salle P", "Salle Q", "Salle R", "Salle S", "Salle T", "Salle U", "Salle V", "Salle W", "Salle X", "Salle Y", "Salle Z"
  ];
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.secondname && formData.email && formData.date && formData.time && formData.people && formData.room) {
      setReservations([...reservations, formData]);
      setFormData({ name: "", secondname: "", email: "", date: "", time: "", people: "", room: "" });
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <div className={styles["reservation-container"]} >
      <h2 className={styles["reservation-title"]}>Réservation de Salle</h2>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <label className={styles["label"]}>Nom :</label>
        <input className={styles["inputField"]} type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label className={styles["label"]}>Prénom :</label>
        <input className={styles["inputField"]} type="text" name="secondname" value={formData.secondname} onChange={handleChange} required />

        <label className={styles["label"]}>Email :</label>
        <input className={styles["inputField"]} type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label className={styles["label"]}>Date :</label>
        <input className={styles["inputField"]} type="date" name="date" value={formData.date} onChange={handleChange} required />
        
        <label className={styles["label"]}>Heure :</label>
        <input className={styles["inputField"]} type="time" name="time" value={formData.time} onChange={handleChange} required />
        
        <label className={styles["label"]}>Nombre de personnes :</label>
        <input className={styles["inputField"]} type="number" name="people" value={formData.people} onChange={(e) => {
            if (e.target.value > 0 || e.target.value === "") {
                handleChange(e);
            }
        }}
            min="1"  // Valeur minimale de 1 pour garantir que le nombre est > 0
        required />
        
        <label className={styles["label"]}>Sélectionnez une salle :</label>
        <select className={styles["select"]} name="room" value={formData.room} onChange={handleChange} required>
          <option id="option" value="">-- Choisissez une salle --</option>
          {rooms.map((room, index) => (
            <option key={index} value={room}>{room}</option>
          ))}
        </select>
        
        <button className={styles["bouton"]} type="submit">Réserver</button>
      </form>
      
      <h3 id="confirm" >Réservations</h3>
      <ul id="ul" >
        {reservations.map((res, index) => (
          <li className={styles["message"]} key={index}>
            {res.name} a réservé {res.room} le {res.date} à {res.time} pour {res.people} personnes.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservation;
