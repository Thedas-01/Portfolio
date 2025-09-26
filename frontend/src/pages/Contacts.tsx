import React, { useState } from "react";
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

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// You can integrate with an API or email service here
		setSubmitted(true);
		setForm({ name: "", email: "", message: "" });
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
						<form className="feedback-form" onSubmit={handleSubmit}>
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
							src="https://www.google.com/maps/place/Court+Rd,+Gampaha/@7.0891356,79.992632,16.04z/data=!4m6!3m5!1s0x3ae2fbec68d1bfff:0xf636ca42455fb5b5!8m2!3d7.0886723!4d79.9932596!16s%2Fg%2F11gf5q06_c?entry=ttu&g_ep=EgoyMDI1MDkyMy4wIKXMDSoASAFQAw%3D%3D"
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