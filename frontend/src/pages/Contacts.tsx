import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../css/contacts.css";

const contactMethods = [
	{
		type: "Email",
		value: "thedassriharisha@gmail.com",
		link: "mailto:thedassriharisha@gmail.com",
		icon: "✉️",
	},
	{
		type: "LinkedIn",
		value: "linkedin.com/in/thedassriharisha",
		link: "https://www.linkedin.com/in/thedas-sri-harisha-328098198/",
		icon: "",
	},
	{
		type: "GitHub",
		value: "github.com/thedas-01",
		link: "https://github.com/Thedas-01",
		icon: "🐙",
	},
	{
		type: "Facebook",
		value: "facebook.com/thedas",
		link: "https://www.facebook.com/thedas.sri.harisha.2025",
		icon: "📘",
	},
	{
		type: "Instagram",
		value: "instagram.com/thedassriharisha",
		link: "https://www.instagram.com/thedas_sri_harisha/",
		icon: "📸",
	},
	{
		type: "WhatsApp",
		value: "+94 78 818 6673",
		link: "https://wa.me/94788186673",
		icon: "💬",
	},
];

const Contacts: React.FC = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [submitted, setSubmitted] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (formRef.current) {
			emailjs
				.sendForm(
					"service_folgruh", // Replace with your EmailJS service ID
					"template_c3lboam", // Replace with your EmailJS template ID
					formRef.current,
					"uXP8kzRTqPf1nmYmx" // Replace with your EmailJS public key
				)
				.then(
					(result) => {
						console.log("Email sent:", result.text);
						setSubmitted(true);
						setForm({ name: "", email: "", message: "" });
					},
					(error) => {
						console.error("EmailJS error:", error);
						alert("Failed to send message. Please try again.");
					}
				);
		} else {
			alert("Form reference is not available.");
		}
	};

	return (
		<section className="contacts-container">
			<h1>Contact Me</h1>
			<div className="contacts-list">
				{contactMethods.map((method) => (
					<a
						className="contact-card"
						href={method.link}
						target="_blank"
						rel="noopener noreferrer"
						key={method.type}
					>
						<span
							className="contact-icon"
							role="img"
							aria-label={method.type + " icon"}
						>
							{method.icon}
						</span>
						<div>
							<h3>{method.type}</h3>
							<p className="contact-value">{method.value}</p>
						</div>
					</a>
				))}
			</div>
			<div className="contacts-flex-row">
				<div className="feedback-form-section">
					<h2>Send Feedback</h2>
					{submitted ? (
						<div className="feedback-success">
							Thank you for your feedback!
						</div>
					) : (
						<form
							className="feedback-form"
							ref={formRef}
							onSubmit={handleSubmit}
						>
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								value={form.name}
								onChange={handleChange}
								required
							/>
							<input
								type="email"
								name="email"
								placeholder="Your Email"
								value={form.email}
								onChange={handleChange}
								required
							/>
							<textarea
								name="message"
								placeholder="Your Message"
								value={form.message}
								onChange={handleChange}
								rows={5}
								required
							/>
							<button type="submit">Send</button>
						</form>
					)}
				</div>
				<div className="contacts-map-section">
					<h2>My Location</h2>
					<div className="contacts-map-embed">
						<iframe
							title="Google Map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.956430836356!2d79.9909308!3d7.0892531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fbec67fa86e7%3A0x3a455e7bb49b3615!2s87%20Court%20Rd%2C%20Gampaha!5e0!3m2!1sen!2slk!4v1690000000000!5m2!1sen!2slk"
							width="100%"
							height="300"
							style={{ border: 0, borderRadius: "12px" }}
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;